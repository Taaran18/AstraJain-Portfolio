import { z } from "zod";
import { servicePages } from "@/data/services";
import { countries } from "@/data/countries";
import { formatPhone, phoneProblem } from "@/lib/phone";

export const serviceOptions = [
  ...servicePages.map((s) => ({ value: s.slug, label: s.name })),
  { value: "muhurta", label: "Muhurta (Auspicious Date And Time)" },
  { value: "not-sure", label: "Not Sure Yet, Please Advise" },
] as const;

export const consultationModes = [
  { value: "video", label: "Video Call" },
  { value: "phone", label: "Phone Call" },
  { value: "whatsapp", label: "WhatsApp Call" },
] as const;

const isoDate = /^\d{4}-\d{2}-\d{2}$/;
const time = /^\d{2}:\d{2}$/;

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

const optionalText = (max: number, message: string) =>
  z.string().trim().max(max, message).optional().or(z.literal(""));

const countryCodes = countries.map((c) => c.iso) as [string, ...string[]];

export const bookingSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Enter your name")
      .max(80, "Name must be 80 characters or fewer"),
    phoneCountry: z.enum(countryCodes, { error: "Choose your country code" }),
    phone: z.string().trim().max(20, "Enter your mobile number without spaces or symbols"),
    email: z
      .union([z.literal(""), z.email("Enter a valid email address or leave it empty")])
      .optional(),
    service: z.enum(serviceOptions.map((s) => s.value) as [string, ...string[]], {
      error: "Choose what you would like guidance on",
    }),
    mode: z.enum(consultationModes.map((m) => m.value) as [string, ...string[]], {
      error: "Choose how you would like to consult",
    }),
    preferredDate: z
      .union([
        z.literal(""),
        z
          .string()
          .regex(isoDate, "Choose a valid date")
          .refine((v) => v >= todayIso(), "Choose today or a future date"),
      ])
      .optional(),
    birthDate: z
      .union([
        z.literal(""),
        z
          .string()
          .regex(isoDate, "Choose a valid date of birth")
          .refine((v) => v <= todayIso(), "Date of birth cannot be in the future"),
      ])
      .optional(),
    birthTime: z.union([z.literal(""), z.string().regex(time, "Choose a valid time")]).optional(),
    birthPlace: optionalText(120, "Birth place must be 120 characters or fewer"),
    message: optionalText(1000, "Keep your message under 1,000 characters"),
    consent: z.boolean().refine((v) => v, "Please agree so we can contact you about your request"),
    website: z.string().max(200).optional(),
    requestId: z.uuid().optional(),
  })
  .check((ctx) => {
    const problem = phoneProblem(ctx.value.phone, ctx.value.phoneCountry);
    if (problem) {
      ctx.issues.push({
        code: "custom",
        path: ["phone"],
        message: problem,
        input: ctx.value.phone,
      });
    }
  });

export type BookingFormValues = z.input<typeof bookingSchema>;
export type BookingInput = z.output<typeof bookingSchema>;

export function labelFor(list: readonly { value: string; label: string }[], value?: string) {
  return list.find((i) => i.value === value)?.label ?? value ?? "";
}

export function bookingSummaryLines(data: BookingInput) {
  return [
    ["Name", data.name],
    ["Phone", formatPhone(data.phone, data.phoneCountry)],
    ["Email", data.email],
    ["Service", labelFor(serviceOptions, data.service)],
    ["Consultation", labelFor(consultationModes, data.mode)],
    ["Preferred date", data.preferredDate],
    ["Date of birth", data.birthDate],
    ["Time of birth", data.birthTime],
    ["Place of birth", data.birthPlace],
    ["Message", data.message],
  ].filter((row): row is [string, string] => Boolean(row[1]));
}

export function bookingSummary(data: BookingInput) {
  return bookingSummaryLines(data)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}
