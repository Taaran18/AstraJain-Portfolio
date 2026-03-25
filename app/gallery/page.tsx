"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const GALLERY_ITEMS = [
  {
    id: 1,
    category: "Consultation",
    title: "Vedic Horoscope Reading",
    desc: "In-depth birth chart analysis revealing planetary positions and life patterns.",
    emoji: "☽",
    gradient: "from-indigo-900 via-violet-900 to-purple-900",
    accent: "#818cf8",
  },
  {
    id: 2,
    category: "Astrology",
    title: "Kundli Matching",
    desc: "Traditional Vedic compatibility analysis for marriage and long-term relationships.",
    emoji: "♥",
    gradient: "from-rose-900 via-pink-900 to-purple-900",
    accent: "#f472b6",
  },
  {
    id: 3,
    category: "Gemstones",
    title: "Certified Gemstone Collection",
    desc: "Authentic, certified planetary gemstones prescribed for specific astrological benefits.",
    emoji: "◆",
    gradient: "from-teal-900 via-cyan-900 to-blue-900",
    accent: "#2dd4bf",
  },
  {
    id: 4,
    category: "Palmistry",
    title: "Palm Reading Session",
    desc: "Expert analysis of life, head, heart and fate lines to decode your life path.",
    emoji: "🤲",
    gradient: "from-amber-900 via-orange-900 to-red-900",
    accent: "#fbbf24",
  },
  {
    id: 5,
    category: "Vastu",
    title: "Vastu Shastra Consultation",
    desc: "Transforming homes and offices into energy-aligned sanctuaries of prosperity.",
    emoji: "⌂",
    gradient: "from-green-900 via-emerald-900 to-teal-900",
    accent: "#34d399",
  },
  {
    id: 6,
    category: "Numerology",
    title: "Numerology Analysis",
    desc: "Unlocking the cosmic significance of your name and birth numbers.",
    emoji: "◈",
    gradient: "from-blue-900 via-indigo-900 to-violet-900",
    accent: "#60a5fa",
  },
  {
    id: 7,
    category: "Events",
    title: "Auspicious Muhurta",
    desc: "Selecting the most favourable cosmic timing for weddings, business launches, and more.",
    emoji: "✦",
    gradient: "from-yellow-900 via-amber-900 to-orange-900",
    accent: "#fcd34d",
  },
  {
    id: 8,
    category: "Consultation",
    title: "Online Consultation",
    desc: "Seamless virtual sessions connecting Sachin Ji's wisdom with clients across the globe.",
    emoji: "◉",
    gradient: "from-purple-900 via-violet-900 to-indigo-900",
    accent: "#c084fc",
  },
  {
    id: 9,
    category: "Astrology",
    title: "Dosha Analysis & Remedies",
    desc: "Identification of malefic planetary afflictions and precise, practical remedies.",
    emoji: "☿",
    gradient: "from-slate-900 via-zinc-900 to-gray-900",
    accent: "#94a3b8",
  },
  {
    id: 10,
    category: "Vastu",
    title: "Commercial Vastu",
    desc: "Office and business space alignment for enhanced productivity and financial growth.",
    emoji: "⊞",
    gradient: "from-lime-900 via-green-900 to-emerald-900",
    accent: "#a3e635",
  },
  {
    id: 11,
    category: "Gemstones",
    title: "Ruby & Emerald Selection",
    desc: "Premium quality planetary stones with certification for authentic astrological use.",
    emoji: "♦",
    gradient: "from-red-900 via-rose-900 to-pink-900",
    accent: "#f87171",
  },
  {
    id: 12,
    category: "Events",
    title: "Client Consultations",
    desc: "Thousands of transformed lives — real people, real results, real cosmic alignment.",
    emoji: "★",
    gradient: "from-violet-900 via-purple-900 to-fuchsia-900",
    accent: "#a78bfa",
  },
];

const CATEGORIES = ["All", "Consultation", "Astrology", "Gemstones", "Palmistry", "Vastu", "Numerology", "Events"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === filter);

  const lightboxItem = lightbox !== null ? GALLERY_ITEMS.find((g) => g.id === lightbox) : null;
  const lightboxIndex = lightbox !== null ? filtered.findIndex((g) => g.id === lightbox) : -1;

  const prevLightbox = () => {
    if (lightboxIndex > 0) setLightbox(filtered[lightboxIndex - 1].id);
  };
  const nextLightbox = () => {
    if (lightboxIndex < filtered.length - 1) setLightbox(filtered[lightboxIndex + 1].id);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center pt-20 overflow-hidden hero-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-cosmic-violet/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-indigo-900/15 rounded-full blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-cosmic-gold/50" />
              <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-cosmic-gold/80">Visual Journey</span>
              <div className="h-px w-8 bg-cosmic-gold/50" />
            </div>
            <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white text-cosmic-deep mb-5 leading-tight">
              Our <span className="text-gold">Gallery</span>
            </h1>
            <p className="font-cormorant text-xl dark:text-cosmic-silver/75 text-cosmic-deep/70 max-w-xl mx-auto leading-relaxed">
              A visual window into the world of AstroJain — our services, sacred
              practices, and the cosmic wisdom that guides every consultation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 sticky top-16 md:top-20 z-30 border-b border-[rgba(212,168,67,0.1)]"
        style={{ background: "var(--nav-bg)", backdropFilter: "blur(16px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full font-cinzel text-xs tracking-wider uppercase transition-all duration-300 ${
                  filter === cat
                    ? "bg-cosmic-gold text-cosmic-black shadow-gold-sm"
                    : "border border-[rgba(212,168,67,0.2)] dark:text-cosmic-silver/60 text-cosmic-deep/60 hover:border-cosmic-gold/40 hover:text-cosmic-gold"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setLightbox(item.id)}
                  className="group glass-card rounded-xl overflow-hidden cursor-pointer relative"
                >
                  {/* Visual panel */}
                  <div
                    className={`relative h-52 bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    {/* Ambient circles */}
                    <div className="absolute inset-0">
                      <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full blur-2xl opacity-30"
                        style={{ background: item.accent }} />
                      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-full blur-xl opacity-20"
                        style={{ background: item.accent }} />
                    </div>

                    {/* Emoji icon */}
                    <motion.span
                      className="text-6xl relative z-10 drop-shadow-lg"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.emoji}
                    </motion.span>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn size={16} className="text-white" />
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-cinzel tracking-wider uppercase"
                      style={{ background: `${item.accent}25`, color: item.accent, border: `1px solid ${item.accent}40` }}>
                      {item.category}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-4">
                    <h3 className="font-cinzel text-sm font-semibold dark:text-white text-cosmic-deep mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs dark:text-cosmic-silver/55 text-cosmic-deep/55 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <span className="text-4xl">✦</span>
              <p className="font-cormorant text-xl dark:text-cosmic-silver/50 text-cosmic-deep/50 mt-4">
                No items in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

            {/* Card */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-lg glass-card rounded-2xl overflow-hidden"
            >
              {/* Visual */}
              <div className={`relative h-72 bg-gradient-to-br ${lightboxItem.gradient} flex items-center justify-center`}>
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-3xl opacity-40"
                    style={{ background: lightboxItem.accent }} />
                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full blur-2xl opacity-25"
                    style={{ background: lightboxItem.accent }} />
                </div>
                <motion.span
                  className="text-8xl relative z-10 drop-shadow-2xl"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  {lightboxItem.emoji}
                </motion.span>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-cinzel tracking-wider uppercase"
                  style={{ background: `${lightboxItem.accent}25`, color: lightboxItem.accent, border: `1px solid ${lightboxItem.accent}40` }}>
                  {lightboxItem.category}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h2 className="font-cinzel text-xl font-bold dark:text-white text-cosmic-deep mb-3">{lightboxItem.title}</h2>
                <p className="font-cormorant text-lg dark:text-cosmic-silver/75 text-cosmic-deep/70 leading-relaxed mb-5">{lightboxItem.desc}</p>
                <div className="flex gap-3">
                  <a href="/contact#book" className="btn-gold text-xs py-2.5 px-5 flex-1 text-center">
                    Book This Service
                  </a>
                  <button onClick={() => setLightbox(null)} className="btn-cosmic text-xs py-2.5 px-5">
                    Close
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Prev / Next */}
            {lightboxIndex > 0 && (
              <motion.button
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full glass-card flex items-center justify-center dark:text-white text-cosmic-deep hover:text-cosmic-gold"
              >
                <ChevronLeft size={20} />
              </motion.button>
            )}
            {lightboxIndex < filtered.length - 1 && (
              <motion.button
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full glass-card flex items-center justify-center dark:text-white text-cosmic-deep hover:text-cosmic-gold"
              >
                <ChevronRight size={20} />
              </motion.button>
            )}

            {/* Close */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full glass-card flex items-center justify-center dark:text-white text-cosmic-deep hover:text-cosmic-gold"
            >
              <X size={16} />
            </motion.button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-cinzel text-xs text-white/50 z-20">
              {lightboxIndex + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
