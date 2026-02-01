"use client";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useLayoutEffect, useRef } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current!;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const isMobile = window.innerWidth < 640;
    const particleCount = isMobile ? 35 : 90;
    const speedFactor = isMobile ? 0.25 : 0.35;
    const maxDistance = isMobile ? 70 : 120;

    if (particlesRef.current.length === 0) {
      particlesRef.current = Array.from({ length: particleCount }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.8,
        speedX: (Math.random() * 2 - 1) * speedFactor,
        speedY: (Math.random() * 2 - 1) * speedFactor,
        opacity: Math.random() * 0.5 + 0.2,
      }));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dark = document.documentElement.classList.contains("dark");

      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        // ✅ Theme-based colors (WORKING)
        const particleColor = dark
          ? `rgba(255,255,255,${p.opacity})`
          : `rgba(0,0,0,${p.opacity})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = dx * dx + dy * dy;

          if (dist < maxDistance * maxDistance) {
            const opacity = 1 - dist / (maxDistance * maxDistance);

            const lineColor = dark
              ? `rgba(255,255,255,${opacity})`
              : `rgba(0,0,0,${opacity})`;

            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 w-full h-full pointer-events-none bg-linear-to-r from-slate-200 via-slate-100 to-slate-200 dark:from-black dark:via-gray-950 dark:to-black"
      />

      <ThemeProvider attribute="class" enableSystem defaultTheme="system">
        <div className="relative z-10 min-h-screen">{children}</div>
      </ThemeProvider>
    </>
  );
};

export default Provider;
