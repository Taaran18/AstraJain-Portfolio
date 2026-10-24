"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

const format = (n: number) => Math.round(n).toLocaleString("en-IN");
const DURATION = 1600;

export function CountUp({ to, prefix = "", suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView || reduced) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - t, 4);
      node.textContent = `${prefix}${format(to * eased)}${suffix}`;
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, to, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {`${prefix}${format(to)}${suffix}`}
    </span>
  );
}
