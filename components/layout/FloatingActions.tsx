"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 500);
      setPastHero(window.scrollY > 320);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 flex w-14 flex-col items-center gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {showTop && (
          <m.button
            key="top"
            type="button"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
              window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
              document.getElementById("main")?.focus({ preventScroll: true });
            }}
            aria-label="Back to top"
            title="Back to top"
            className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-line-strong bg-card text-fg shadow-lift transition-colors hover:border-gold hover:text-gold"
          >
            <ArrowUp size={20} aria-hidden="true" />
          </m.button>
        )}
      </AnimatePresence>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sachin Jain on WhatsApp"
        className={cn(
          "group pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-night shadow-lift transition-all duration-300 hover:scale-105",
          !pastHero &&
            "pointer-events-none translate-y-4 opacity-0 focus-visible:pointer-events-auto focus-visible:translate-y-0 focus-visible:opacity-100",
        )}
      >
        <WhatsAppIcon size={28} />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-night px-3 py-1.5 text-sm font-semibold text-cream opacity-0 shadow-card transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 lg:block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
