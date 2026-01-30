"use client";

import React, { useEffect, useRef } from "react";
import PriceCard from "./PriceCard";
import { Plans } from "@/constant/constant";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Price = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Cards stagger animation
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
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
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white/0 dark:bg-black/10 text-slate-900 dark:text-white overflow-hidden"
    >
      <div className="w-[80%] mx-auto space-y-14">
        <div
          ref={headingRef}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className=" text-red-500 sm:text-4xl md:text-5xl font-medium">
            Our
            <span className="ml-2 text-indigo-500 font-heading italic">
              Plans
            </span>
          </h2>
          <h1 className=" text-xl md:text-2xl font-bold  leading-10 md:leading-14  tracking-wider ">
            Transparent pricing designed to scale with your business.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {Plans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
            >
              <PriceCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
