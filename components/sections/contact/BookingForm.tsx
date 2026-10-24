"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  CircleCheck,
  Eraser,
  History,
  RotateCcw,
  Send,
  Video,
} from "lucide-react";
import { PhoneIcon } from "@/components/ui/BrandIcon";
import { Select } from "@/components/ui/Select";
import { PhoneField } from "@/components/sections/contact/PhoneField";
import { DEFAULT_COUNTRY } from "@/data/countries";
import { emailSuggestion, formatPhone } from "@/lib/phone";
import {
  bookingSchema,
  bookingSummary,
  bookingSummaryLines,
  consultationModes,
  serviceOptions,
  type BookingFormValues,
  type BookingInput,
} from "@/lib/booking";
import { primaryPhone, whatsappLink } from "@/lib/site";
import { Button, ButtonLink } from "@/components/ui/Button";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

const DRAFT_KEY = "astrojain-booking-draft";

const emptyValues: BookingFormValues = {
  name: "",
  phoneCountry: DEFAULT_COUNTRY,
  phone: "",
  email: "",
  service: "",
  mode: "",
  preferredDate: "",
  birthDate: "",
  birthTime: "",
  birthPlace: "",
  message: "",
  consent: false,
  website: "",
};

const draftFields = [
  "name",
  "phoneCountry",
  "phone",
  "email",
  "service",
  "mode",
  "preferredDate",
  "birthDate",
  "birthTime",
  "birthPlace",
  "message",
] as const;

const inputClass =
  "block min-h-12 w-full rounded-xl border border-line-strong bg-paper px-4 py-3 text-base text-fg placeholder:text-fg-subtle aria-[invalid=true]:border-danger";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const modeIcons = {
  video: <Video size={22} aria-hidden="true" />,
  phone: <PhoneIcon size={22} />,
  whatsapp: <WhatsAppIcon size={22} />,
} as const;

type Status =
  | { state: "editing" }
  | { state: "reviewing"; data: BookingInput }
  | { state: "sending"; data: BookingInput }
  | { state: "sent"; delivered: boolean; data: BookingInput }
  | { state: "failed"; data: BookingInput; message: string };

function Field({
  id,
  label,
  error,
  hint,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-fg">
        {label}
        {required ? (
          <span className="text-danger" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="font-normal text-fg-subtle"> (Optional)</span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-sm text-fg-subtle">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm text-danger">
          <AlertCircle size={14} className="mt-0.5 shrink-0" aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  );
}

function readDraft(): Partial<BookingFormValues> | null {
  try {
    const raw = sessionStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const draft: Partial<BookingFormValues> = {};
    for (const key of draftFields) {
      if (typeof parsed[key] === "string") draft[key] = parsed[key] as string;
    }
    return Object.values(draft).some(Boolean) ? draft : null;
  } catch {
    return null;
  }
}

function clearDraft() {
  try {
    sessionStorage.removeItem(DRAFT_KEY);
  } catch {}
}

function newRequestId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : undefined;
}

export function BookingForm() {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const params = useSearchParams();
  const [status, setStatus] = useState<Status>({ state: "editing" });
  const [confirmClear, setConfirmClear] = useState(false);
  const [initialDraft] = useState(() => (typeof window === "undefined" ? null : readDraft()));
  const [restored, setRestored] = useState(Boolean(initialDraft));
  const [birthOpen, setBirthOpen] = useState(
    Boolean(initialDraft?.birthDate || initialDraft?.birthTime || initialDraft?.birthPlace),
  );
  const requestIdRef = useRef<string | undefined>(undefined);
  const resultRef = useRef<HTMLDivElement>(null);
  const today = new Date().toISOString().slice(0, 10);

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    setError,
    setValue,
    trigger,
    subscribe,
    control,
    formState: { errors, isDirty, touchedFields },
  } = useForm<BookingFormValues, unknown, BookingInput>({
    mode: "onTouched",
    resolver: zodResolver(bookingSchema),
    defaultValues: { ...emptyValues, ...initialDraft },
  });

  useEffect(() => {
    const service = params.get("service");
    if (service && serviceOptions.some((s) => s.value === service)) {
      setValue("service", service, { shouldDirty: true });
    }
  }, [params, setValue]);

  useEffect(() => {
    let timer: number | undefined;
    const unsubscribe = subscribe({
      formState: { values: true },
      callback: ({ values }) => {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          try {
            const draft = Object.fromEntries(draftFields.map((k) => [k, values[k] ?? ""]));
            sessionStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
          } catch {}
        }, 400);
      },
    });
    return () => {
      window.clearTimeout(timer);
      unsubscribe();
    };
  }, [subscribe]);

  useEffect(() => {
    if (status.state === "sent" || status.state === "failed") resultRef.current?.focus();
  }, [status.state]);

  const messageLength = (useWatch({ control, name: "message" }) ?? "").length;
  const phoneCountry = useWatch({ control, name: "phoneCountry" }) ?? DEFAULT_COUNTRY;
  const email = (useWatch({ control, name: "email" }) ?? "").trim();
  const suggestion = email ? emailSuggestion(email) : null;
  const emailValid = emailPattern.test(email) && !suggestion;

  const describedBy = (name: keyof BookingFormValues, hint?: boolean) =>
    errors[name] ? id(`${name}-error`) : hint ? id(`${name}-hint`) : undefined;

  async function send(data: BookingInput) {
    requestIdRef.current ??= newRequestId();
    setStatus({ state: "sending", data });
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, requestId: requestIdRef.current }),
        signal: controller.signal,
      });
      const json = (await res.json().catch(() => ({}))) as {
        error?: string;
        delivered?: boolean;
        fields?: { field: string; message: string }[];
      };
      if (res.status === 400 && json.fields?.length) {
        setStatus({ state: "editing" });
        for (const f of json.fields) {
          setError(f.field as keyof BookingFormValues, { message: f.message });
        }
        setFocus(json.fields[0].field as keyof BookingFormValues);
        return;
      }
      if (!res.ok) {
        setStatus({
          state: "failed",
          data,
          message:
            json.error ??
            "Our server could not accept the request just now. Your details are still here, so you can try again or send them on WhatsApp.",
        });
        return;
      }
      trackEvent("generate_lead", {
        service: data.service,
        consultation_mode: data.mode,
        delivered: Boolean(json.delivered),
      });
      clearDraft();
      requestIdRef.current = undefined;
      setStatus({ state: "sent", delivered: Boolean(json.delivered), data });
      reset(emptyValues);
      setRestored(false);
    } catch {
      setStatus({
        state: "failed",
        data,
        message:
          "We could not reach our server. Check your internet connection and try again, or send the same details on WhatsApp.",
      });
    } finally {
      window.clearTimeout(timeout);
    }
  }

  function clearForm() {
    reset(emptyValues);
    clearDraft();
    requestIdRef.current = undefined;
    setRestored(false);
    setBirthOpen(false);
    setConfirmClear(false);
    setStatus({ state: "editing" });
    window.setTimeout(() => setFocus("name"), 50);
  }

  if (status.state === "sent") {
    const message = `Namaste Sachin Jain, I have sent a consultation request on your website.\n\n${bookingSummary(status.data)}`;
    return (
      <div
        ref={resultRef}
        tabIndex={-1}
        role="status"
        className="card p-6 text-center outline-none md:p-10"
      >
        <CheckCircle2 size={44} className="mx-auto text-success" aria-hidden="true" />
        {status.delivered ? (
          <>
            <h2 className="mt-4 text-display-md">
              Request Received, {status.data.name.split(" ")[0]}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-fg-muted">
              Sachin Jain&apos;s team will call or WhatsApp you on{" "}
              {formatPhone(status.data.phone, status.data.phoneCountry)} to confirm a time, usually
              within a few hours during consultation hours. Need it sooner? Call{" "}
              {primaryPhone.display}.
            </p>
          </>
        ) : (
          <>
            <h2 className="mt-4 text-display-md">One Last Step: Send It On WhatsApp</h2>
            <p className="mx-auto mt-3 max-w-md text-fg-muted">
              Your details are ready, but our email service did not confirm delivery. Tap the button
              below to send the same details to Sachin Jain on WhatsApp, or call{" "}
              {primaryPhone.display}. Your request is not booked until you do.
            </p>
          </>
        )}
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={whatsappLink(message)} variant="whatsapp" size="lg">
            <WhatsAppIcon /> {status.delivered ? "Also Send On WhatsApp" : "Send On WhatsApp"}
          </ButtonLink>
          <ButtonLink href={`tel:${primaryPhone.tel}`} variant="secondary" size="lg">
            <PhoneIcon size={18} aria-hidden="true" /> Call {primaryPhone.display}
          </ButtonLink>
        </div>
        <Button variant="ghost" className="mt-4" onClick={() => setStatus({ state: "editing" })}>
          Book Another Consultation
        </Button>
      </div>
    );
  }

  const reviewing = status.state === "reviewing" || status.state === "sending";
  const reviewData = reviewing ? status.data : null;

  return (
    <>
      {status.state === "failed" && (
        <div
          ref={resultRef}
          tabIndex={-1}
          role="alert"
          className="mb-6 rounded-card border border-danger/40 bg-danger/5 p-5 outline-none"
        >
          <p className="flex items-start gap-2 font-semibold text-danger">
            <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
            Your request was not sent
          </p>
          <p className="mt-2 text-fg-muted">{status.message}</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => send(status.data)}>
              <RotateCcw size={16} aria-hidden="true" /> Try Again
            </Button>
            <ButtonLink
              href={whatsappLink(
                `Namaste Sachin Jain, I would like to book a consultation.\n\n${bookingSummary(status.data)}`,
              )}
              variant="whatsapp"
            >
              <WhatsAppIcon /> Send On WhatsApp Instead
            </ButtonLink>
          </div>
        </div>
      )}

      {restored && (
        <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-line bg-tint px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-2 text-fg-muted">
            <History size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
            We restored the details you started entering earlier in this tab.
          </p>
          <Button variant="ghost" size="sm" onClick={() => setConfirmClear(true)}>
            Start Over
          </Button>
        </div>
      )}

      <form
        noValidate
        aria-label="Book a consultation"
        onSubmit={handleSubmit(
          (data) => setStatus({ state: "reviewing", data }),
          (errs) => {
            const first = Object.keys(errs)[0] as keyof BookingFormValues | undefined;
            if (first && ["birthDate", "birthTime", "birthPlace"].includes(first)) {
              setBirthOpen(true);
            }
            if (first) window.setTimeout(() => setFocus(first), 0);
          },
        )}
        className="space-y-8"
      >
        <fieldset className="min-w-0 space-y-5">
          <legend className="mb-1 font-display text-lg font-semibold">1. Your Details</legend>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field id={id("name")} label="Full Name" required error={errors.name?.message}>
              <input
                id={id("name")}
                type="text"
                autoComplete="name"
                placeholder="e.g. Priya Sharma"
                aria-invalid={Boolean(errors.name)}
                aria-required="true"
                aria-describedby={describedBy("name")}
                className={inputClass}
                {...register("name")}
              />
            </Field>
            <div>
              <label htmlFor={id("email")} className="mb-2 block text-sm font-semibold text-fg">
                Email <span className="font-normal text-fg-subtle">(Optional)</span>
              </label>
              <div className="relative">
                <input
                  id={id("email")}
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? id("email-error") : id("email-hint")}
                  className={cn(
                    inputClass,
                    "pr-11",
                    emailValid && !errors.email && "border-success/60",
                  )}
                  {...register("email")}
                />
                <span
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2"
                  aria-hidden="true"
                >
                  {errors.email ? (
                    <AlertCircle size={20} className="text-danger" />
                  ) : emailValid ? (
                    <CircleCheck size={20} className="text-success" />
                  ) : null}
                </span>
              </div>
              {errors.email?.message ? (
                <p
                  id={id("email-error")}
                  className="mt-1.5 flex items-start gap-1.5 text-sm text-danger"
                >
                  <AlertCircle size={14} className="mt-0.5 shrink-0" aria-hidden="true" />{" "}
                  {errors.email.message}
                </p>
              ) : suggestion ? (
                <p id={id("email-hint")} className="mt-1.5 text-sm text-fg-muted">
                  Did you mean{" "}
                  <button
                    type="button"
                    onClick={() =>
                      setValue("email", suggestion, { shouldValidate: true, shouldDirty: true })
                    }
                    className="font-semibold text-gold underline underline-offset-2"
                  >
                    {suggestion}
                  </button>
                  ?
                </p>
              ) : (
                <p id={id("email-hint")} className="mt-1.5 text-sm text-fg-subtle">
                  {emailValid
                    ? "Looks good. We send a confirmation here."
                    : "For booking confirmation only. No spam."}
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor={id("phone")} className="mb-2 block text-sm font-semibold text-fg">
                Mobile Or WhatsApp Number
                <span className="text-danger" aria-hidden="true">
                  {" "}
                  *
                </span>
              </label>
              <Controller
                name="phone"
                control={control}
                render={({ field, fieldState }) => (
                  <PhoneField
                    id={id("phone")}
                    country={phoneCountry}
                    number={field.value ?? ""}
                    onCountryChange={(iso) => {
                      setValue("phoneCountry", iso, { shouldDirty: true });
                      if (fieldState.isTouched || field.value) void trigger("phone");
                    }}
                    onNumberChange={field.onChange}
                    onBlur={field.onBlur}
                    fieldRef={field.ref}
                    error={fieldState.error?.message}
                    touched={Boolean(touchedFields.phone)}
                  />
                )}
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="min-w-0 space-y-5">
          <legend className="mb-1 font-display text-lg font-semibold">2. Your Consultation</legend>
          <Field
            id={id("service")}
            label="What Would You Like Guidance On?"
            required
            error={errors.service?.message}
          >
            <Controller
              name="service"
              control={control}
              render={({ field, fieldState }) => (
                <Select
                  id={id("service")}
                  value={field.value ?? ""}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  fieldRef={field.ref}
                  options={serviceOptions}
                  placeholder="Choose a consultation"
                  invalid={Boolean(fieldState.error)}
                  describedBy={describedBy("service")}
                  required
                />
              )}
            />
          </Field>

          <div
            role="radiogroup"
            aria-labelledby={id("mode-label")}
            aria-describedby={describedBy("mode")}
          >
            <p id={id("mode-label")} className="mb-2 text-sm font-semibold text-fg">
              How Would You Like To Consult?
              <span className="text-danger" aria-hidden="true">
                {" "}
                *
              </span>
            </p>
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {consultationModes.map((m) => (
                <label
                  key={m.value}
                  className="group relative flex min-h-24 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-line-strong bg-paper px-2 py-3 text-center text-sm font-semibold text-fg-muted transition-colors hover:border-gold/70 has-[:checked]:border-gold has-[:checked]:bg-gold-soft has-[:checked]:text-fg has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-violet"
                >
                  <input type="radio" value={m.value} className="sr-only" {...register("mode")} />
                  <span className="text-gold">{modeIcons[m.value]}</span>
                  <span className="leading-tight">{m.label}</span>
                  <CircleCheck
                    size={16}
                    aria-hidden="true"
                    className="absolute right-2 top-2 hidden text-gold group-has-[:checked]:block"
                  />
                </label>
              ))}
            </div>
            {errors.mode?.message && (
              <p
                id={id("mode-error")}
                className="mt-1.5 flex items-start gap-1.5 text-sm text-danger"
              >
                <AlertCircle size={14} className="mt-0.5 shrink-0" aria-hidden="true" />{" "}
                {errors.mode.message}
              </p>
            )}
          </div>

          <Field
            id={id("preferredDate")}
            label="Preferred Date"
            hint="We will confirm the exact time with you."
            error={errors.preferredDate?.message}
          >
            <input
              id={id("preferredDate")}
              type="date"
              min={today}
              aria-invalid={Boolean(errors.preferredDate)}
              aria-describedby={describedBy("preferredDate", true)}
              className={cn(inputClass, "sm:max-w-xs")}
              {...register("preferredDate")}
            />
          </Field>
        </fieldset>

        <fieldset className="min-w-0 rounded-2xl border border-line bg-tint/60">
          <legend className="sr-only">3. Birth Details</legend>
          <button
            type="button"
            onClick={() => setBirthOpen((v) => !v)}
            aria-expanded={birthOpen}
            aria-controls={id("birth")}
            className="flex w-full items-center justify-between gap-4 rounded-2xl px-4 py-4 text-left"
          >
            <span>
              <span className="block font-display text-lg font-semibold">
                3. Birth Details{" "}
                <span className="font-sans text-sm font-normal text-fg-subtle">(Optional)</span>
              </span>
              <span className="mt-0.5 block text-sm text-fg-muted">
                Lets Sachin Jain prepare your kundli before the session, so you get more time for
                questions.
              </span>
            </span>
            <ChevronDown
              size={20}
              aria-hidden="true"
              className={cn("shrink-0 text-gold transition-transform", birthOpen && "rotate-180")}
            />
          </button>
          <div id={id("birth")} hidden={!birthOpen} className="space-y-5 px-4 pb-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id={id("birthDate")} label="Date Of Birth" error={errors.birthDate?.message}>
                <input
                  id={id("birthDate")}
                  type="date"
                  max={today}
                  autoComplete="bday"
                  aria-invalid={Boolean(errors.birthDate)}
                  aria-describedby={describedBy("birthDate")}
                  className={inputClass}
                  {...register("birthDate")}
                />
              </Field>
              <Field
                id={id("birthTime")}
                label="Time Of Birth"
                hint="As exact as possible. Leave empty if unknown."
                error={errors.birthTime?.message}
              >
                <input
                  id={id("birthTime")}
                  type="time"
                  aria-invalid={Boolean(errors.birthTime)}
                  aria-describedby={describedBy("birthTime", true)}
                  className={inputClass}
                  {...register("birthTime")}
                />
              </Field>
            </div>
            <Field
              id={id("birthPlace")}
              label="Place Of Birth"
              hint="City or town, and state or country."
              error={errors.birthPlace?.message}
            >
              <input
                id={id("birthPlace")}
                type="text"
                placeholder="e.g. Jaipur, Rajasthan, India"
                aria-invalid={Boolean(errors.birthPlace)}
                aria-describedby={describedBy("birthPlace", true)}
                className={inputClass}
                {...register("birthPlace")}
              />
            </Field>
          </div>
        </fieldset>

        <Field
          id={id("message")}
          label="What Is On Your Mind?"
          hint={`${messageLength}/1000 characters`}
          error={errors.message?.message}
        >
          <textarea
            id={id("message")}
            rows={4}
            maxLength={1000}
            placeholder="e.g. My marriage keeps getting delayed. I would like to know the right time and any remedies."

            aria-invalid={Boolean(errors.message)}
            aria-describedby={describedBy("message", true)}
            className={cn(inputClass, "resize-y")}
            {...register("message")}
          />
        </Field>

        <div className="hidden" aria-hidden="true">
          <label htmlFor={id("website")}>Leave this field empty</label>
          <input
            id={id("website")}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        <div>
          <label className="flex cursor-pointer items-start gap-3 text-sm text-fg-muted">
            <input
              type="checkbox"
              className="mt-0.5 h-5 w-5 shrink-0 accent-[#b88a25]"
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={describedBy("consent")}
              {...register("consent")}
            />
            <span>
              I agree that AstroJain may contact me about this request and store my details as
              described in the{" "}
              <Link
                href="/privacy-policy"
                className="font-semibold text-gold underline-offset-2 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms-of-service"
                className="font-semibold text-gold underline-offset-2 hover:underline"
              >
                Terms Of Service
              </Link>
              .
            </span>
          </label>
          {errors.consent?.message && (
            <p
              id={id("consent-error")}
              className="mt-1.5 flex items-start gap-1.5 text-sm text-danger"
            >
              <AlertCircle size={14} className="mt-0.5 shrink-0" aria-hidden="true" />{" "}
              {errors.consent.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button type="submit" size="lg" className="sm:min-w-56">
            <Send size={18} aria-hidden="true" /> Review And Send Request
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => setConfirmClear(true)}
            disabled={!isDirty && !restored}
          >
            <Eraser size={18} aria-hidden="true" /> Clear Form
          </Button>
        </div>
        <p className="text-sm text-fg-subtle">
          Prefer to talk? Call{" "}
          <a href={`tel:${primaryPhone.tel}`} className="font-semibold text-fg hover:text-gold">
            {primaryPhone.display}
          </a>{" "}
          between 9 AM and 8 PM, any day.
        </p>
      </form>

      <ConfirmDialog
        open={reviewing}
        size="md"
        title="Send This Consultation Request?"
        description="Check your details. Sachin Jain's team will use them to contact you and prepare your reading."
        confirmLabel="Send Request"
        busyLabel="Sending Request…"
        cancelLabel="Edit Details"
        busy={status.state === "sending"}
        onCancel={() => setStatus({ state: "editing" })}
        onConfirm={() => reviewData && send(reviewData)}
      >
        {reviewData && (
          <dl className="grid gap-x-6 gap-y-3 text-sm sm:grid-cols-[10rem_1fr]">
            {bookingSummaryLines(reviewData).map(([label, value]) => (
              <div key={label} className="contents">
                <dt className="font-semibold text-fg">{label}</dt>
                <dd className="break-words text-fg-muted">{value}</dd>
              </div>
            ))}
          </dl>
        )}
      </ConfirmDialog>

      <ConfirmDialog
        open={confirmClear}
        tone="danger"
        title="Clear All Details?"
        description="This removes everything you have typed in this form, including any saved draft in this tab. You cannot undo this."
        confirmLabel="Clear Form"
        cancelLabel="Keep My Details"
        onCancel={() => setConfirmClear(false)}
        onConfirm={clearForm}
      />
    </>
  );
}
