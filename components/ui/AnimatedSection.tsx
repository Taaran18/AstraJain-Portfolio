"use client";

import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade" | "scale";
}

const variants = {
  up:    { hidden: { opacity: 0, y: 40 },        visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -50 },       visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 50 },        visible: { opacity: 1, x: 0 } },
  fade:  { hidden: { opacity: 0 },               visible: { opacity: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.92 },  visible: { opacity: 1, scale: 1 } },
};

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      variants={variants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
