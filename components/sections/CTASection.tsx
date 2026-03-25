"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, var(--bg-deep) 0%, var(--bg-secondary) 50%, var(--bg-deep) 100%)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cosmic-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cosmic-gold/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-48 bg-cosmic-gold/5 rounded-full blur-[60px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-48 bg-indigo-900/15 rounded-full blur-[60px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection direction="scale">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cosmic-gold/50" />
            <span className="font-cinzel text-3xl text-cosmic-gold/60">✦</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cosmic-gold/50" />
          </motion.div>

          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white text-cosmic-deep leading-tight mb-5">
            Your Cosmic Journey{" "}
            <span className="text-gold">Begins Today</span>
          </h2>

          <p className="font-cormorant text-xl dark:text-cosmic-silver/75 text-cosmic-deep/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you seek clarity on love, career, health, or purpose — a
            single consultation with Sachin Ji can illuminate the path forward.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Link href="/contact#book" className="btn-gold py-4 px-10 text-sm">
              Book Your Consultation
            </Link>
            <a
              href={getWhatsAppLink(SITE_CONFIG.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cosmic py-4 px-8 flex items-center gap-2 text-sm"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a href={`tel:${SITE_CONFIG.phone1.replace(/\s/g,"")}`} className="flex items-center gap-2 text-sm dark:text-cosmic-silver/60 text-cosmic-deep/60 hover:text-cosmic-gold transition-colors">
              <Phone size={14} className="text-cosmic-gold" />{SITE_CONFIG.phone1}
            </a>
            <div className="w-px h-4 bg-cosmic-silver/20" />
            <a href={`tel:${SITE_CONFIG.phone2.replace(/\s/g,"")}`} className="flex items-center gap-2 text-sm dark:text-cosmic-silver/60 text-cosmic-deep/60 hover:text-cosmic-gold transition-colors">
              <Phone size={14} className="text-cosmic-gold" />{SITE_CONFIG.phone2}
            </a>
            <div className="w-px h-4 bg-cosmic-silver/20 hidden sm:block" />
            <span className="text-xs dark:text-cosmic-silver/40 text-cosmic-deep/40">{SITE_CONFIG.hours}</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
