"use client";
import { ThemeProvider } from "next-themes";

import React, { useEffect, useRef } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];
    const particleCount = window.innerWidth < 640 ? 40 : 100;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    function animate() {
      if (!context || !canvas) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        context.fill();
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      requestAnimationFrame(animate);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            context.strokeStyle = `rgba(255,255,255,${1 - distance / 120})`;
            context.lineWidth = 0.5;
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.stroke();
          }
        }
      }
    }
    animate();
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
