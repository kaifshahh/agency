"use client";

import Link from "next/link";
import { GiSparkles } from "react-icons/gi";
import { TypeAnimation } from "react-type-animation";
import { LuArrowUpFromDot } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(
        [badgeRef.current, headingRef.current, textRef.current, btnRef.current],
        {
          opacity: 0,
          y: 80,
          scale: 0.95,
          duration: 1.2,
          stagger: 0.25,
          ease: "power4.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 75%",
            once: true,
          },
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl text-center sm:px-6 lg:px-8 px-4">
        <div ref={badgeRef}>
          <div className="inline-flex items-center space-x-2 bg-black/5 dark:bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
            <GiSparkles className="h-5 w-5 text-yellow-400" />
            <span className="text-slate-800/80 dark:text-white/80 font-medium text-xl">
              Welcome to SheesJc Technologies
            </span>
          </div>
        </div>

        <h1
          ref={headingRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-white/80 mb-6"
        >
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

        <p
          ref={textRef}
          className="text-base sm:text-xl text-slate-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed "
        >
          We build innovative digital solutions that transform ideas into
          reality.
        </p>

        <div
          ref={btnRef}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center space-x-2 bg-slate-800/80 dark:bg-white/80 text-white dark:text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span>Get Started</span>
            <BsArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center space-x-2 border-2 border-black/50 dark:border-white/50 text-slate-900/80 dark:text-white/80 font-semibold px-8 py-4 rounded-full dark:hover:bg-white/80  dark:hover:text-black  hover:bg-yellow-400/50 hover:text-black transition-all duration-300 transform hover:scale-105 hover:border-black dark:hover:border-white"
          >
            <span>Learn More</span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <LuArrowUpFromDot className="h-10 w-10 text-gray-800 dark:text-white/80" />
      </div>
    </div>
  );
};

export default Hero;
