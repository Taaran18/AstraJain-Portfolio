import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { bookingSchema, bookingSummary, labelFor, serviceOptions } from "@/lib/booking";
import { site } from "@/lib/site";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_BODY_BYTES = 10_000;
const SEND_TIMEOUT_MS = 10_000;

const hits = new Map<string, number[]>();
const recentRequests = new Map<string, { at: number; delivered: boolean }>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_REQUESTS;
}

function previousResult(requestId?: string) {
  if (!requestId) return null;
  const now = Date.now();
  for (const [key, value] of recentRequests) {
    if (now - value.at > WINDOW_MS) recentRequests.delete(key);
  }
  return recentRequests.get(requestId) ?? null;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function log(event: string, details: Record<string, unknown>) {
  console.info(JSON.stringify({ event, at: new Date().toISOString(), ...details }));
}

function withTimeout<T>(promise: Promise<T>, ms: number) {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) => setTimeout(() => reject(new Error("timeout")), ms)),
  ]);
}

export async function POST(req: NextRequest) {
  const traceId = crypto.randomUUID();
  const headers = { "x-request-id": traceId };
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (rateLimited(ip)) {
    log("booking.rate_limited", { traceId });
    return NextResponse.json(
      {
        error:
          "You have sent several requests in a short time. Please wait 10 minutes, or call or WhatsApp us instead.",
      },
      { status: 429, headers },
    );
  }

  const length = Number(req.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: "Your request is too long. Please shorten the message and try again." },
      { status: 413, headers },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "We could not read your request. Please refresh the page and try again." },
      { status: 400, headers },
    );
  }

  const parsed = bookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Some details need fixing before we can send your request.",
        fields: parsed.error.issues.map((i) => ({ field: i.path.join("."), message: i.message })),
      },
      { status: 400, headers },
    );
  }

  const data = parsed.data;
  if (data.website) {
    log("booking.honeypot", { traceId });
    return NextResponse.json({ ok: true, delivered: true }, { headers });
  }

  const duplicate = previousResult(data.requestId);
  if (duplicate) {
    log("booking.duplicate", { traceId, delivered: duplicate.delivered });
    return NextResponse.json({ ok: true, delivered: duplicate.delivered }, { headers });
  }

  const rememberDelivery = () => {
    if (data.requestId) recentRequests.set(data.requestId, { at: Date.now(), delivered: true });
  };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    log("booking.email_not_configured", { traceId });
    return NextResponse.json({ ok: true, delivered: false }, { headers });
  }

  const summary = bookingSummary(data);
  try {
    const resend = new Resend(apiKey);
    const { error } = await withTimeout(
      resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL || "AstroJain <onboarding@resend.dev>",
        to: (process.env.CONTACT_TO_EMAIL || site.email).split(",").map((e) => e.trim()),
        replyTo: data.email || undefined,
        subject: `New consultation request: ${labelFor(serviceOptions, data.service)} – ${data.name}`,
        text: summary,
        html: `<pre style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;white-space:pre-wrap">${escapeHtml(summary)}</pre>`,
      }),
      SEND_TIMEOUT_MS,
    );
    if (error) throw new Error(error.message);
    log("booking.sent", { traceId, service: data.service, mode: data.mode });
    rememberDelivery();
    return NextResponse.json({ ok: true, delivered: true }, { headers });
  } catch (err) {
    log("booking.email_failed", {
      traceId,
      reason: err instanceof Error ? err.message : "unknown",
    });
    return NextResponse.json({ ok: true, delivered: false }, { headers });
  }
}
