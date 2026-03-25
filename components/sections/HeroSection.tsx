"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";

const ZodiacWheel = dynamic(() => import("@/components/three/ZodiacWheel"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

const STATS = [
  { value: "20+",   label: "Years Experience" },
  { value: "5000+", label: "Lives Guided" },
  { value: "6",     label: "Specializations" },
  { value: "98%",   label: "Client Satisfaction" },
];

/* Each child staggers from this parent */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

/* Slide up + fade — starts partially visible so a slow JS load never gives blank page */
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-bg pt-20">

      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] bg-cosmic-violet/20"
          animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.32, 0.18] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-[80px] bg-indigo-900/25"
          animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.35, 0.18] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Text block ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Eyebrow */}
            <motion.div variants={item} className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-cosmic-gold/60" />
              <span className="font-cinzel text-xs tracking-[0.35em] uppercase text-cosmic-gold/80">
                Vedic Astrology · Jaipur
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={item} className="font-cinzel font-bold leading-tight mb-2">
              <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl dark:text-white text-cosmic-deep block">
                Discover Your
              </span>
              <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gold block mt-1">
                Cosmic Blueprint
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={item} className="font-cormorant text-xl md:text-2xl dark:text-cosmic-silver/80 text-cosmic-deep/75 leading-relaxed mb-3 max-w-lg">
              Consult{" "}
              <span className="text-cosmic-gold font-semibold italic">Sachin Jain</span>
              , Jaipur&apos;s most trusted Vedic astrologer, for guidance that
              illuminates your path and transforms your destiny.
            </motion.p>

            <motion.p variants={item} className="font-inter text-sm dark:text-cosmic-silver/45 text-cosmic-deep/45 mb-10 max-w-md leading-relaxed">
              Horoscope · Kundli Matching · Palmistry · Numerology · Gemstone · Vastu
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
              <Link href="/contact#book" className="btn-gold text-sm py-3.5 px-8">
                Book Consultation
              </Link>
              <a
                href={getWhatsAppLink(SITE_CONFIG.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cosmic text-sm py-3.5 px-8"
              >
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone1.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm dark:text-cosmic-silver/60 text-cosmic-deep/60 hover:text-cosmic-gold transition-colors self-center"
              >
                <Phone size={15} className="text-cosmic-gold" />
                <span className="font-inter">{SITE_CONFIG.phone1}</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-8 border-t border-[rgba(212,168,67,0.12)]"
            >
              {STATS.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="font-cinzel text-2xl md:text-3xl font-bold text-gold">
                    {stat.value}
                  </div>
                  <div className="text-xs dark:text-cosmic-silver/45 text-cosmic-deep/45 mt-1 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Zodiac Wheel ── */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.82, rotate: -12 }}
            animate={{ opacity: 1, scale: 1,    rotate: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-[420px] h-[420px]">
              <div className="absolute inset-0 rounded-full border border-[rgba(212,168,67,0.08)] scale-110" />
              <div className="absolute inset-0 rounded-full border border-[rgba(212,168,67,0.04)] scale-125" />
              <div className="absolute inset-1/4 rounded-full bg-cosmic-violet/12 blur-2xl" />
              <ZodiacWheel />
              <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                <span className="font-cinzel text-4xl text-cosmic-gold/75">ॐ</span>
                <span className="font-cinzel text-xs tracking-[0.2em] text-cosmic-gold/35 mt-1 uppercase">
                  AstroJain
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] font-cinzel tracking-widest dark:text-cosmic-silver/25 text-cosmic-deep/25 uppercase">
            Explore
          </span>
          <ChevronDown size={17} className="text-cosmic-gold/35" />
        </motion.div>
      </motion.div>
    </section>
  );
}
