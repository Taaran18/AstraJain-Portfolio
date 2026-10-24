export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-3X4FR35P30";

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event" | "config" | "js", target: string | Date, params?: GtagParams) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(name: string, params: GtagParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
