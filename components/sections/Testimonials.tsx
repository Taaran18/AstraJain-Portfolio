"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [[index, direction], setState] = useState<[number, number]>([0, 1]);
  const count = testimonials.length;
  const active = testimonials[index];

  const go = (next: number, dir: number) => setState([(next + count) % count, dir]);

  return (
    <div className="mx-auto max-w-3xl">
      <div
        className="card p-6 md:p-10"
        role="region"
        aria-roledescription="carousel"
        aria-label="Client experiences"
      >
        <div className="min-h-[18rem] overflow-hidden sm:min-h-[15rem]" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.name}
              initial={{ opacity: 0, x: direction * 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -32 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-1 text-gold" aria-label={`${active.rating} out of 5`}>
                  {Array.from({ length: active.rating }, (_, i) => (
                    <Star key={i} size={18} className="fill-current" aria-hidden="true" />
                  ))}
                </div>
                <Quote size={40} aria-hidden="true" className="shrink-0 text-gold opacity-25" />
              </div>
              <blockquote className="mt-5 font-serif text-xl leading-relaxed text-fg md:text-2xl">
                &ldquo;{active.text}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-night font-display font-bold text-brand"
                >
                  {active.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-fg">{active.name}</span>
                  <span className="block text-sm text-fg-muted">
                    {active.role} · {active.topic}
                  </span>
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 sm:gap-4">
        <button
          type="button"
          onClick={() => go(index - 1, -1)}
          aria-label="Previous client story"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-fg hover:border-gold hover:text-gold"
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <ul className="flex items-center gap-1">
          {testimonials.map((t, i) => (
            <li key={t.name}>
              <button
                type="button"
                onClick={() => go(i, i > index ? 1 : -1)}
                aria-label={`Show story ${i + 1} of ${count}`}
                aria-current={i === index ? "true" : undefined}
                className="flex h-11 w-5 items-center justify-center sm:w-7"
              >
                <span
                  className={cn(
                    "block h-2 rounded-full transition-all duration-300",
                    i === index ? "w-6 bg-gold" : "w-2 bg-line-strong",
                  )}
                />
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => go(index + 1, 1)}
          aria-label="Next client story"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-fg hover:border-gold hover:text-gold"
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
