"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };
  const prev = () => go(active === 0 ? TESTIMONIALS.length - 1 : active - 1);
  const next = () => go(active === TESTIMONIALS.length - 1 ? 0 : active + 1);

  const variants = {
    enter:  (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg) 50%, var(--bg-secondary) 100%)" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cosmic-violet/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Client Stories"
            title="Voices of"
            titleHighlight="Transformation"
            subtitle="Thousands have found clarity, peace, and purpose through Sachin Ji's guidance."
          />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden min-h-[280px] flex flex-col justify-between">
              <Quote size={60} className="absolute top-6 right-6 text-cosmic-gold/6" />

              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={active}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(TESTIMONIALS[active].rating)].map((_, i) => (
                      <span key={i} className="text-cosmic-gold text-lg">★</span>
                    ))}
                  </div>
                  <blockquote className="font-cormorant text-xl md:text-2xl dark:text-cosmic-silver/85 text-cosmic-deep/80 leading-relaxed italic mb-8">
                    &ldquo;{TESTIMONIALS[active].text}&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-violet to-indigo-900 flex items-center justify-center border border-[rgba(212,168,67,0.3)]">
                        <span className="font-cinzel font-bold text-cosmic-gold">{TESTIMONIALS[active].initial}</span>
                      </div>
                      <div>
                        <p className="font-cinzel text-sm dark:text-white text-cosmic-deep">{TESTIMONIALS[active].name}</p>
                        <p className="text-xs dark:text-cosmic-silver/50 text-cosmic-deep/50">{TESTIMONIALS[active].role}</p>
                      </div>
                    </div>
                    <span className="text-xs dark:text-cosmic-silver/40 text-cosmic-deep/40">{TESTIMONIALS[active].date}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={prev}
                className="w-10 h-10 rounded-full border border-[rgba(212,168,67,0.2)] flex items-center justify-center dark:text-cosmic-silver/60 text-cosmic-deep/50 hover:text-cosmic-gold hover:border-cosmic-gold/40 transition-all"
                aria-label="Previous">
                <ChevronLeft size={16} />
              </motion.button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => go(i)}
                    className={cn("rounded-full transition-all duration-300",
                      i === active ? "w-6 h-2 bg-cosmic-gold" : "w-2 h-2 bg-cosmic-silver/30 hover:bg-cosmic-gold/50"
                    )} aria-label={`Go to ${i + 1}`} />
                ))}
              </div>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={next}
                className="w-10 h-10 rounded-full border border-[rgba(212,168,67,0.2)] flex items-center justify-center dark:text-cosmic-silver/60 text-cosmic-deep/50 hover:text-cosmic-gold hover:border-cosmic-gold/40 transition-all"
                aria-label="Next">
                <ChevronRight size={16} />
              </motion.button>
            </div>
          </div>
        </AnimatedSection>

        {/* Mini cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => go(i)}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -3 }}
              className={cn(
                "glass-card rounded-xl p-4 text-left w-full transition-all duration-300",
                i === active ? "shadow-gold-sm" : ""
              )}
              style={{ borderColor: i === active ? "rgba(212,168,67,0.4)" : undefined }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cosmic-violet to-indigo-900 flex items-center justify-center">
                  <span className="font-cinzel text-xs text-cosmic-gold font-bold">{t.initial}</span>
                </div>
                <span className="font-cinzel text-xs dark:text-white text-cosmic-deep truncate">{t.name.split(" ")[0]}</span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, si) => (
                  <span key={si} className="text-cosmic-gold text-[10px]">★</span>
                ))}
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
