"use client";
import { ThemeProvider } from "next-themes";

import React, { useEffect, useRef } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    type Particle = {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    };

    const particles: Particle[] = [];

    const isMobile = window.innerWidth < 640;
    const particleCount = isMobile ? 35 : 90; // optimized count
    const speedFactor = isMobile ? 0.25 : 0.35; // slower on mobile
    const maxDistance = isMobile ? 70 : 120;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.8,
        speedX: (Math.random() * 2 - 1) * speedFactor,
        speedY: (Math.random() * 2 - 1) * speedFactor,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;

        // Bounce effect
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();

        // Draw lines (optimized)
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = dx * dx + dy * dy; // no sqrt (faster)

          if (dist < maxDistance * maxDistance) {
            const opacity = 1 - dist / (maxDistance * maxDistance);
            ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className=" inset-0 bg-linear-to-br from-red-950 via-purple-900 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black fixed i -z-10 pointer-events-none"
      />

      <ThemeProvider attribute="class" enableSystem defaultTheme="system">
        <div className="relative z-10 min-h-screen">{children}</div>
      </ThemeProvider>
    </>
  );
};

export default Provider;
