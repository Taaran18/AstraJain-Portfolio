"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show on pointer-capable devices
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;
    setIsTouch(false);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const enter = () => setVisible(true);
    const leave = () => setVisible(false);
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    // Detect hover over interactive elements
    const addHover = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest("a, button, [role='button'], input, textarea, select, label")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mousemove", addHover);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousemove", addHover);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
    };
  }, [cursorX, cursorY, visible]);

  if (isTouch) return null;

  return (
    <>
      {/* Outer ring — spring-lagged */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          borderRadius: "50%",
          border: "1px solid rgba(212,168,67,0.55)",
          boxShadow: hovering
            ? "0 0 12px rgba(212,168,67,0.3), inset 0 0 8px rgba(212,168,67,0.05)"
            : "0 0 6px rgba(212,168,67,0.2)",
        }}
        animate={{
          width: hovering ? 44 : clicking ? 20 : 32,
          height: hovering ? 44 : clicking ? 20 : 32,
          marginLeft: hovering ? -22 : clicking ? -10 : -16,
          marginTop: hovering ? -22 : clicking ? -10 : -16,
          opacity: visible ? 1 : 0,
          backgroundColor: hovering ? "rgba(212,168,67,0.12)" : "transparent",
          borderColor: hovering
            ? "rgba(212,168,67,0.9)"
            : clicking
            ? "rgba(212,168,67,0.4)"
            : "rgba(212,168,67,0.55)",
          borderWidth: hovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.4 }}
      />

      {/* Inner dot — direct */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          marginLeft: -3,
          marginTop: -3,
          width: 6,
          height: 6,
          background: "radial-gradient(circle, #f59e0b, #d4a843)",
          boxShadow: "0 0 8px rgba(212,168,67,0.8)",
        }}
        animate={{
          opacity: hovering || !visible ? 0 : 1,
          scale: clicking ? 0.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Click burst */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          marginLeft: -20,
          marginTop: -20,
          width: 40,
          height: 40,
          border: "1px solid rgba(212,168,67,0.6)",
        }}
        animate={{
          scale: clicking ? 1.6 : 1,
          opacity: clicking ? 0 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
}
