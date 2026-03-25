"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="back-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 24px rgba(212,168,67,0.5)" }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="fixed bottom-24 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center border border-[rgba(212,168,67,0.35)] shadow-gold-sm"
          style={{ background: "linear-gradient(135deg, rgba(30,27,75,0.95), rgba(13,19,64,0.95))" }}
          aria-label="Back to top"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full border border-[rgba(212,168,67,0.2)] animate-ping opacity-30" />
          <ChevronUp size={18} className="text-cosmic-gold" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
