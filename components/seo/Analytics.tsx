"use client";

import { useEffect } from "react";
import Script from "next/script";
import { GA_ID, trackEvent } from "@/lib/analytics";

export function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;
      const href = link.getAttribute("href") ?? "";
      const location = window.location.pathname;
      if (href.startsWith("tel:")) trackEvent("phone_call_click", { location });
      else if (href.includes("wa.me/")) trackEvent("whatsapp_click", { location });
      else if (href.startsWith("mailto:")) trackEvent("email_click", { location });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
