"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  active: boolean;
  timer: number;
  nextFire: number;
}

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 4000);
      starsRef.current = Array.from({ length: Math.min(count, 300) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random(),
        size: Math.random() * 1.8 + 0.2,
        opacity: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
      }));

      shootingStarsRef.current = Array.from({ length: 3 }, (_, i) => ({
        x: 0,
        y: 0,
        length: Math.random() * 120 + 80,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.5,
        speed: Math.random() * 8 + 6,
        opacity: 0,
        active: false,
        timer: 0,
        nextFire: Math.random() * 300 + 200 + i * 100,
      }));
    };

    const drawStar = (star: Star, time: number) => {
      const twinkle = Math.sin(time * star.twinkleSpeed * 60 + star.twinkleOffset);
      const opacity = star.opacity + twinkle * 0.25;
      const size = star.size + twinkle * 0.3;

      ctx.beginPath();
      ctx.arc(star.x, star.y, Math.max(0.1, size), 0, Math.PI * 2);

      // Gold tint for larger stars
      const isGold = star.size > 1.4;
      if (isGold) {
        ctx.fillStyle = `rgba(212, 180, 100, ${Math.max(0, opacity)})`;
        if (size > 1.2) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = "rgba(212, 168, 67, 0.6)";
        }
      } else {
        ctx.fillStyle = `rgba(180, 195, 255, ${Math.max(0, opacity)})`;
      }
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const drawShootingStar = (ss: ShootingStar) => {
      if (!ss.active) return;
      const endX = ss.x + Math.cos(ss.angle) * ss.length * ss.timer;
      const endY = ss.y + Math.sin(ss.angle) * ss.length * ss.timer;
      const startX = ss.x + Math.cos(ss.angle) * ss.length * Math.max(0, ss.timer - 0.3);
      const startY = ss.y + Math.sin(ss.angle) * ss.length * Math.max(0, ss.timer - 0.3);

      const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
      gradient.addColorStop(0, `rgba(212, 168, 67, 0)`);
      gradient.addColorStop(0.5, `rgba(255, 220, 150, ${ss.opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(255, 255, 255, ${ss.opacity})`);

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    };

    const updateShootingStar = (ss: ShootingStar) => {
      if (!ss.active) {
        ss.nextFire--;
        if (ss.nextFire <= 0) {
          ss.active = true;
          ss.x = Math.random() * canvas.width * 0.7;
          ss.y = Math.random() * canvas.height * 0.4;
          ss.timer = 0;
          ss.opacity = 0;
          ss.length = Math.random() * 120 + 80;
          ss.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.4;
          ss.speed = Math.random() * 0.008 + 0.006;
          ss.nextFire = Math.random() * 400 + 200;
        }
        return;
      }

      ss.timer += ss.speed;
      ss.opacity = ss.timer < 0.3 ? ss.timer / 0.3 : ss.timer > 0.8 ? (1 - ss.timer) / 0.2 : 1;

      if (ss.timer >= 1) {
        ss.active = false;
        ss.timer = 0;
      }
    };

    const animate = (timestamp: number) => {
      timeRef.current = timestamp * 0.001;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => drawStar(star, timeRef.current));
      shootingStarsRef.current.forEach((ss) => {
        updateShootingStar(ss);
        drawShootingStar(ss);
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    resize();
    animFrameRef.current = requestAnimationFrame(animate);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  );
}
