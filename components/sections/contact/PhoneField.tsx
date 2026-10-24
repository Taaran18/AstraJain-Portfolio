"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, CircleAlert, CircleCheck, Search } from "lucide-react";
import { countries, getCountry, popularCountries, type Country } from "@/data/countries";
import { digitsLabel, formatPhone, onlyDigits, phoneProblem } from "@/lib/phone";
import { cn } from "@/lib/utils";

type PhoneFieldProps = {
  id: string;
  country: string;
  number: string;
  onCountryChange: (iso: string) => void;
  onNumberChange: (digits: string) => void;
  onBlur: () => void;
  error?: string;
  touched: boolean;
  fieldRef?: (el: HTMLInputElement | null) => void;
};

function Flag({ country, className }: { country: Country; className?: string }) {
  return (
    <Image
      src={`/flags/${country.iso}.svg`}
      alt=""
      width={24}
      height={16}
      unoptimized
      className={cn("h-4 w-6 shrink-0 rounded-[3px] object-cover ring-1 ring-black/10", className)}
    />
  );
}

function normalise(raw: string, country: Country) {
  let digits = onlyDigits(raw);
  if (raw.trim().startsWith("+") && digits.startsWith(country.dial)) {
    digits = digits.slice(country.dial.length);
  } else if (digits.length > country.max && digits.startsWith(country.dial)) {
    digits = digits.slice(country.dial.length);
  }
  if (digits.length > country.max && digits.startsWith("0")) digits = digits.replace(/^0+/, "");
  return digits.slice(0, country.max);
}

export function PhoneField({
  id,
  country: iso,
  number,
  onCountryChange,
  onNumberChange,
  onBlur,
  error,
  touched,
  fieldRef,
}: PhoneFieldProps) {
  const country = getCountry(iso);
  const listId = useId();
  const searchId = useId();
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase().replace(/^\+/, "");
    if (!q) {
      const popular = popularCountries.map((c) => getCountry(c));
      const rest = countries.filter((c) => !popularCountries.includes(c.iso));
      return [...popular, ...rest];
    }
    return countries.filter(
      (c) => c.name.toLowerCase().includes(q) || c.iso.toLowerCase() === q || c.dial.startsWith(q),
    );
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    const timer = window.setTimeout(() => searchRef.current?.focus(), 30);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [open, active]);

  const openList = () => {
    setQuery("");
    setActive(0);
    setOpen(true);
  };

  const close = (focusButton = true) => {
    setOpen(false);
    if (focusButton) buttonRef.current?.focus();
  };

  const choose = (c: Country | undefined) => {
    if (!c) return;
    onCountryChange(c.iso);
    if (number.length > c.max) onNumberChange(number.slice(0, c.max));
    setOpen(false);
    window.setTimeout(() => inputRef.current?.focus(), 0);
  };

  const onSearchKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(results.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      choose(results[active]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  };

  const problem = number ? phoneProblem(number, country.iso) : null;
  const valid = number.length > 0 && !problem;
  const showError = Boolean(error) && (touched || number.length >= country.min);
  const counter = `${number.length}/${country.max}`;

  return (
    <div ref={rootRef} className="relative">
      <div
        className={cn(
          "flex min-h-12 w-full items-stretch overflow-hidden rounded-xl border bg-paper transition-colors focus-within:border-gold",
          showError ? "border-danger" : valid ? "border-success/60" : "border-line-strong",
        )}
      >
        <button
          ref={buttonRef}
          type="button"
          onClick={() => (open ? close() : openList())}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown" && !open) {
              e.preventDefault();
              openList();
            }
          }}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls={open ? listId : undefined}
          aria-label={`Country code: ${country.name} +${country.dial}. Change country`}
          className="flex shrink-0 items-center gap-2 border-r border-line bg-tint/70 pl-3 pr-2.5 text-[0.95rem] font-semibold text-fg hover:bg-tint-strong"
        >
          <Flag country={country} />
          <span>+{country.dial}</span>
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={cn("text-fg-subtle transition-transform", open && "rotate-180 text-gold")}
          />
        </button>
        <input
          ref={(el) => {
            inputRef.current = el;
            fieldRef?.(el);
          }}
          id={id}
          name="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          placeholder={country.example}
          value={number}
          maxLength={country.max + 6}
          onChange={(e) => onNumberChange(normalise(e.target.value, country))}
          onBlur={onBlur}
          aria-invalid={showError || undefined}
          aria-required="true"
          aria-describedby={showError ? errorId : hintId}
          className="w-0 min-w-0 flex-1 bg-transparent px-3 py-3 text-base tracking-wide text-fg placeholder:tracking-normal placeholder:text-fg-subtle focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <span className="flex shrink-0 items-center pr-3" aria-hidden="true">
          {valid ? (
            <CircleCheck size={20} className="text-success" />
          ) : showError ? (
            <CircleAlert size={20} className="text-danger" />
          ) : (
            <span className="text-xs tabular-nums text-fg-subtle">{counter}</span>
          )}
        </span>
      </div>

      {showError ? (
        <p id={errorId} className="mt-1.5 flex items-start gap-1.5 text-sm text-danger">
          <CircleAlert size={14} className="mt-0.5 shrink-0" aria-hidden="true" /> {error}
        </p>
      ) : valid ? (
        <p id={hintId} className="mt-1.5 flex items-start gap-1.5 text-sm text-success">
          <CircleCheck size={14} className="mt-0.5 shrink-0" aria-hidden="true" /> We will reach you
          on {formatPhone(number, country.iso)}
        </p>
      ) : (
        <p id={hintId} className="mt-1.5 text-sm text-fg-subtle">
          {digitsLabel(country)} mobile number for {country.name}. We call or WhatsApp you on this
          number.
        </p>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Choose your country code"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-x-0 top-[3.4rem] z-30 overflow-hidden rounded-xl border border-line bg-card shadow-lift sm:right-auto sm:w-[22rem]"
          >
            <div className="border-b border-line p-2">
              <label htmlFor={searchId} className="sr-only">
                Search countries
              </label>
              <div className="flex items-center gap-2 rounded-lg bg-tint px-3">
                <Search size={16} aria-hidden="true" className="shrink-0 text-fg-subtle" />
                <input
                  ref={searchRef}
                  id={searchId}
                  type="text"
                  role="combobox"
                  aria-expanded="true"
                  aria-controls={listId}
                  aria-activedescendant={
                    results[active] ? `${listId}-${results[active].iso}` : undefined
                  }
                  aria-autocomplete="list"
                  autoComplete="off"
                  placeholder="Search country or code, e.g. India or +91"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActive(0);
                  }}
                  onKeyDown={onSearchKey}
                  className="min-h-10 w-full bg-transparent text-[0.95rem] text-fg placeholder:text-fg-subtle focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
            <ul
              ref={listRef}
              id={listId}
              role="listbox"
              aria-label="Countries"
              className="max-h-72 overflow-y-auto p-1.5"
            >
              {results.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-fg-muted">
                  No country matches &ldquo;{query}&rdquo;. Try the country name or dial code.
                </li>
              )}
              {results.map((c, i) => {
                const selected = c.iso === country.iso;
                const divider = !query && i === popularCountries.length;
                return (
                  <li
                    key={c.iso}
                    id={`${listId}-${c.iso}`}
                    role="option"
                    aria-selected={selected}
                    data-index={i}
                    onPointerEnter={() => setActive(i)}
                    onPointerDown={(e) => e.preventDefault()}
                    onClick={() => choose(c)}
                    className={cn(
                      "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-[0.95rem]",
                      i === active ? "bg-tint-strong" : "",
                      divider && "mt-1.5 border-t border-line pt-3",
                    )}
                  >
                    <Flag country={c} />
                    <span
                      className={cn(
                        "min-w-0 flex-1 truncate",
                        selected ? "font-semibold text-fg" : "text-fg-muted",
                      )}
                    >
                      {c.name}
                    </span>
                    <span className="shrink-0 tabular-nums text-fg-subtle">+{c.dial}</span>
                    {selected && (
                      <Check size={16} aria-hidden="true" className="shrink-0 text-gold" />
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
