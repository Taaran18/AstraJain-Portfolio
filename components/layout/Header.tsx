"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-[rgba(212,168,67,0.12)] shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
          : "bg-transparent"
      )}
      style={scrolled ? { background: "var(--nav-bg)", backdropFilter: "blur(16px)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-cinzel text-xl md:text-2xl font-bold tracking-widest">
              <span className="text-gold">ASTRO</span>
              <span className="transition-colors duration-300 dark:text-white text-cosmic-deep">JAIN</span>
            </span>
            <span className="text-[10px] tracking-[0.25em] text-cosmic-gold/60 uppercase font-inter">
              Vedic Astrology
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.filter((l) => !l.highlight).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 font-cinzel text-sm tracking-widest uppercase transition-all duration-300 relative group",
                  pathname === link.href
                    ? "text-cosmic-gold"
                    : "dark:text-slate-300 text-cosmic-deep/80 hover:text-cosmic-gold"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-px bg-cosmic-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone1.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm dark:text-cosmic-silver/60 text-cosmic-deep/60 hover:text-cosmic-gold transition-colors"
            >
              <Phone size={13} className="text-cosmic-gold" />
              <span className="font-inter hidden xl:block">{SITE_CONFIG.phone1}</span>
            </a>
            <ThemeToggle />
            <Link href="/contact#book" className="btn-gold text-xs py-2.5 px-5">
              Book Now
            </Link>
          </div>

          {/* Mobile right */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 dark:text-slate-300 text-cosmic-deep hover:text-cosmic-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-16 z-40"
          >
            <div
              className="absolute inset-0 backdrop-blur-2xl"
              style={{ background: "var(--nav-bg)" }}
            />
            <div className="relative flex flex-col items-center justify-center h-full gap-5 p-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "font-cinzel text-xl tracking-widest uppercase block transition-all duration-300",
                      link.highlight
                        ? "text-cosmic-gold border border-[rgba(212,168,67,0.4)] px-8 py-3 hover:bg-[rgba(212,168,67,0.08)]"
                        : pathname === link.href
                        ? "text-cosmic-gold"
                        : "dark:text-slate-200 text-cosmic-deep hover:text-cosmic-gold"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="gold-divider w-48 my-1" />
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                href={`tel:${SITE_CONFIG.phone1.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm dark:text-cosmic-silver/60 text-cosmic-deep/60 hover:text-cosmic-gold transition-colors"
              >
                <Phone size={15} className="text-cosmic-gold" />
                <span className="font-inter">{SITE_CONFIG.phone1}</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
