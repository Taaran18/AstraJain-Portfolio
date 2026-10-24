"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

const format = (n: number) => Math.round(n).toLocaleString("en-IN");

export function CountUp({ to, prefix = "", suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView || reduced) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        node.textContent = `${prefix}${format(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduced, to, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {`${prefix}${format(to)}${suffix}`}
    </span>
  );
}
