"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
import { GiSparkles } from "react-icons/gi";
import { TypeAnimation } from "react-type-animation";
import { CiDesktopMouse2 } from "react-icons/ci";

const Hero = () => {
  // const canvasRef = useRef<HTMLCanvasElement>(null);
  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;
  //   const context = canvas.getContext("2d");
  //   if (!context) return;
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   const particles: Array<{
  //     x: number;
  //     y: number;
  //     size: number;
  //     speedX: number;
  //     speedY: number;
  //     opacity: number;
  //   }> = [];
  //   for (let i = 0; i < 100; i++) {
  //     particles.push({
  //       x: Math.random() * canvas.width,
  //       y: Math.random() * canvas.height,
  //       size: Math.random() * 3 + 1,
  //       speedX: Math.random() * 2 - 1,
  //       speedY: Math.random() * 2 - 1,
  //       opacity: Math.random() * 0.5 + 0.2,
  //     });
  //   }
  //   function animate() {
  //     if (!context || !canvas) return;
  //     context.clearRect(0, 0, canvas.width, canvas.height);
  //     particles.forEach((particle) => {
  //       context.beginPath();
  //       context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
  //       context.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
  //       context.fill();
  //       particle.x += particle.speedX;
  //       particle.y += particle.speedY;
  //       if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
  //       if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
  //     });
  //     requestAnimationFrame(animate);
  //     for (let i = 0; i < particles.length; i++) {
  //       for (let j = i + 1; j < particles.length; j++) {
  //         const dx = particles[i].x - particles[j].x;
  //         const dy = particles[i].y - particles[j].y;
  //         const distance = Math.sqrt(dx * dx + dy * dy);

  //         if (distance < 120) {
  //           context.strokeStyle = `rgba(255,255,255,${1 - distance / 120})`;
  //           context.lineWidth = 0.5;
  //           context.beginPath();
  //           context.moveTo(particles[i].x, particles[i].y);
  //           context.lineTo(particles[j].x, particles[j].y);
  //           context.stroke();
  //         }
  //       }
  //     }
  //   }
  //   animate();
  //   const handleResize = () => {
  //     if (canvas) {
  //       canvas.width = window.innerWidth;
  //       canvas.height = window.innerHeight;
  //     }
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* <canvas
        ref={canvasRef}
        className="absolute inset-0 bg-linear-to-br from-blue-900 via-purple-900 to-pink-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800"
      /> */}

      <div className="relative z-10 max-w-7xl text-center sm:px-6 lg:px-8 px-4">
        <div>
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
            <GiSparkles className="h-5 w-5 text-yellow-400" />
            <span className="text-white/80 font-medium text-xl">
              Welcome to SheesJc Technologies
            </span>
          </div>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white/80 mb-6">
          <TypeAnimation
            sequence={[
              "We Create Magic.",
              2000,
              "We Build Dreams.",
              2000,
              "We Design Future.",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </h1>
        <p className="text-base sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed ">
          We build innovative digital solutions that transform ideas into
          reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#projects"
            className=" group inline-flex items-center justify-center space-x-2 bg-white/80 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-500  hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span>Get Started</span>
            <BsArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center justify-center space-x-2 border-2 border-white/50 text-white/80 font-semibold px-8 py-4 rounded-full hover:bg-white/80 hover:text-black transition-all duration-300 transform hover:scale-105 hover:border-white"
          >
            <span>Learn More</span>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <CiDesktopMouse2 className="h-10 w-10 text-white/80" />
      </div>
    </div>
  );
};

export default Hero;
