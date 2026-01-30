"use client";

import React, { useEffect, useRef } from "react";
import ServicesCard from "./ServicesCard";
import { services } from "@/constant/constant";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Minimal fade for heading
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Minimal fade for cards
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.22,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-20 dark:bg-black/10 backdrop-blur-sm">
      <div ref={headingRef}>
        <h1 className="text-red-500 dark:text-red-300 text-xl font-bold text-center">
          Our Services
        </h1>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-slate-800 dark:text-gray-100 mt-4 font-bold tracking-wider ">
          Provided Features
        </h1>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
          >
            <ServicesCard
              title={service.title}
              icon={service.icon}
              heading={service.heading}
              points={service.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
