"use client";

import { useEffect, useRef } from "react";

const ZODIAC_SYMBOLS = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

export default function ZodiacWheel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = canvas.width;
    const cx = size / 2;
    const cy = size / 2;
    let rotation = 0;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);

      const outerR = size * 0.44;
      const innerR = size * 0.3;
      const symbolR = size * 0.38;

      // Outer ring
      ctx.beginPath();
      ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(212, 168, 67, 0.25)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Inner ring
      ctx.beginPath();
      ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(212, 168, 67, 0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(212, 168, 67, 0.6)";
      ctx.fill();

      // Spokes
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + rotation;
        ctx.beginPath();
        ctx.moveTo(
          cx + Math.cos(angle) * innerR,
          cy + Math.sin(angle) * innerR
        );
        ctx.lineTo(
          cx + Math.cos(angle) * outerR,
          cy + Math.sin(angle) * outerR
        );
        ctx.strokeStyle = "rgba(212, 168, 67, 0.1)";
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Dot on outer ring
        const dotX = cx + Math.cos(angle) * outerR;
        const dotY = cy + Math.sin(angle) * outerR;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(212, 168, 67, 0.5)";
        ctx.fill();
      }

      // Zodiac symbols
      ctx.font = `${size * 0.065}px serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + rotation - Math.PI / 2;
        const sx = cx + Math.cos(angle) * symbolR;
        const sy = cy + Math.sin(angle) * symbolR;

        const progress = (Math.sin(Date.now() * 0.001 + i * 0.5) + 1) / 2;
        const alpha = 0.3 + progress * 0.5;
        ctx.fillStyle = `rgba(212, 168, 67, ${alpha})`;
        ctx.fillText(ZODIAC_SYMBOLS[i], sx, sy);
      }

      rotation += 0.002;
      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      className="w-full h-full opacity-70"
      aria-hidden="true"
    />
  );
}
