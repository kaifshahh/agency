"use client";

import React, { useEffect, useRef } from "react";
import { FaHammer, FaRocket } from "react-icons/fa6";
import Carousel from "./Carousel";
import { BiSupport } from "react-icons/bi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left section animation
      gsap.from(leftRef.current, {
        opacity: 0,
        x: -80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Right section animation
      gsap.from(rightRef.current, {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Feature items stagger animation
      gsap.from(itemsRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-20 backdrop-blur-sm bg-white/0 dark:bg-black/10"
    >
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div ref={leftRef}>
          <h2 className=" font-medium">
            <span className="text-red-500">Why</span>
            <span className="text-indigo-500 ml-1 italic">Us</span>
          </h2>
          <h1 className=" text-2xl md:text-4xl  lg:text-5xl font-bold  leading-8 md:leading-12 lg:leading-14 text-slate-800 dark:text-gray-100 mt-4 tracking-wider  ">
            We Provide Best Digital Solutions
          </h1>
          <p className=" text-slate-700 dark:text-gray-300  leading-7 ">
            We create modern websites, AI-driven tools, and automation systems
            that simplify workflows and accelerate business growth.
          </p>

          <div className="mt-8">
            {[
              {
                title: "Fast & Reliable",
                icon: (
                  <FaRocket className=" text-white dark:text-black w-6 h-6" />
                ),
                desc: "We deliver high-performance digital solutions optimized for speed, stability, and seamless user experience across all devices.",
              },
              {
                title: "Dedicated Team",
                icon: (
                  <FaHammer className=" text-white dark:text-black w-6 h-6" />
                ),
                desc: "Our experienced developers and designers work closely with you to understand your goals and build solutions that truly fit your business.",
              },
              {
                title: "24/7 Support",
                icon: (
                  <BiSupport className=" text-white dark:text-black w-6 h-6" />
                ),
                desc: "We provide continuous support and maintenance to ensure your website and systems run smoothly without interruptions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) itemsRef.current[i] = el;
                }}
                className="flex items-center space-x-6 mb-10"
              >
                <div className="flex items-center justify-center flex-col w-18 h-18 rounded-full bg-gray-900 dark:bg-red-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h1 className="text-xl font-semibold text-slate-800 dark:text-gray-100">
                    {item.title}
                  </h1>
                  <p className=" text-slate-700 dark:text-gray-300  leading-6 lg:w-[85%] ">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div
          ref={rightRef}
          className="flex flex-col items-center justify-center"
        >
          <h2 className=" text-xl md:text-2xl  lg:text-3xl font-bold  leading-8 md:leading-12 lg:leading-14 text-slate-800 dark:text-gray-100 mb-8 pt-8  ">
            Empowering businesses with AI-driven automation, smart workflows,
            and digital transformation.
          </h2>

          {/* Carousel */}
          <div style={{ height: "300px", position: "relative" }}>
            <Carousel
              baseWidth={320}
              autoplay
              autoplayDelay={3000}
              pauseOnHover
              loop
              round={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
