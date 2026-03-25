"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

const cardVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const cardItem = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function ServicesSection() {
  return (
    <section className="section-padding relative section-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cosmic-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cosmic-gold/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-cosmic-violet/10 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-indigo-900/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="What We Offer"
            title="Sacred Services for"
            titleHighlight="Every Life Path"
            subtitle="From birth chart analysis to space harmonisation — each service is a doorway to deeper self-understanding and cosmic alignment."
          />
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              variants={cardItem}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 350, damping: 20 } }}
              className="glass-card rounded-xl p-6 h-full flex flex-col"
              style={{ borderColor: `${service.accent}20` }}
            >
              {/* Icon + Title */}
              <div className="mb-4 flex items-center gap-3">
                <motion.div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${service.accent}15`, border: `1px solid ${service.accent}30` }}
                  whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                >
                  <span style={{ color: service.accent }}>{service.icon}</span>
                </motion.div>
                <div>
                  <h3 className="font-cinzel text-sm font-semibold dark:text-white text-cosmic-deep tracking-wide">
                    {service.title}
                  </h3>
                  <span className="text-xs" style={{ color: `${service.accent}99` }}>
                    {service.subtitle}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="font-cormorant text-base dark:text-cosmic-silver/70 text-cosmic-deep/65 leading-relaxed mb-5 flex-1">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5 mb-5">
                {service.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-xs dark:text-cosmic-silver/60 text-cosmic-deep/60">
                    <span style={{ color: service.accent }} className="text-[10px]">✦</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact#book"
                className="flex items-center gap-1.5 text-xs font-cinzel tracking-wider uppercase transition-all hover:gap-3"
                style={{ color: `${service.accent}cc` }}
              >
                Book This Service <ArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection delay={400}>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-cosmic inline-block">
              View All Services
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
