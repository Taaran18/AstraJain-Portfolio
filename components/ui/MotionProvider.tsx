"use client";

import { LazyMotion, MotionConfig } from "framer-motion";

const loadFeatures = () => import("@/components/ui/motion-features").then((mod) => mod.default);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
