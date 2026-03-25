"use client";

import { motion } from "framer-motion";
import { WHY_CHOOSE } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function WhyChooseSection() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none opacity-50" style={{ background: "var(--gradient-section)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Why AstroJain"
            title="Trusted by Thousands,"
            titleHighlight="Guided by Stars"
            subtitle="What sets Sachin Jain apart is not just decades of experience — it is a genuine commitment to your well-being and transformation."
          />
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
        >
          {WHY_CHOOSE.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 350, damping: 20 } }}
              className="glass-card rounded-xl p-6 h-full"
            >
              <motion.div
                className="w-12 h-12 rounded-lg border border-[rgba(212,168,67,0.2)] bg-cosmic-violet/15 flex items-center justify-center text-xl text-cosmic-gold mb-4"
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="font-cinzel text-sm font-semibold dark:text-white text-cosmic-deep tracking-wide mb-3">
                {item.title}
              </h3>
              <p className="font-cormorant text-base dark:text-cosmic-silver/65 text-cosmic-deep/65 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
