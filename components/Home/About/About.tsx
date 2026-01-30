"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const countersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll animations
      gsap.from(imgRef.current, {
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

      gsap.from(textRef.current, {
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

      gsap.from(statsRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Counter animation
      countersRef.current.forEach((counter) => {
        const target = Number(counter.dataset.target);

        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: "power1.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              once: true,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-20 backdrop-blur-sm bg-white/0 dark:bg-black/10 rounded-lg"
    >
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 ">
        {/* Left Column - Image */}
        <div ref={imgRef}>
          <Image
            className="rounded-lg"
            alt="img"
            src={"/images/about1.png"}
            width={600}
            height={500}
          />
        </div>

        {/* Right Column - Text Content */}
        <div ref={textRef}>
          <h1 className="text-2xl font-medium mb-6 text-pink-500 dark:text-pink-500">
            About Us
          </h1>
          <h1 className="text-slate-800 sm:text-4xl md:text-4xl lg:text-6xl dark:text-gray-200 mt-2 ">
            We are a the leader in web Design
          </h1>
          <p className="text-slate-700 dark:text-gray-400 mt-6 leading-relaxed">
            At SheesJc Technologies, we are passionate about crafting
            exceptional digital experiences that empower businesses to thrive in
            the digital landscape.
          </p>

          {/* stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-3 gap-8 mt-10 place-items-center bg-gray-300 dark:bg-gray-800 p-6 rounded-lg"
          >
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100">
                <span
                  ref={(el) => {
                    if (el) countersRef.current[0] = el;
                  }}
                  data-target="50"
                >
                  0
                </span>
                +
              </h1>
              <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-600 dark:text-gray-300 mt-2">
                Projects Completed
              </p>
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100">
                <span
                  ref={(el) => {
                    if (el) countersRef.current[1] = el;
                  }}
                  data-target="98"
                >
                  0
                </span>
                %
              </h1>
              <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-600 dark:text-gray-300 mt-2">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100">
                <span
                  ref={(el) => {
                    if (el) countersRef.current[2] = el;
                  }}
                  data-target="24"
                >
                  0
                </span>
                /7
              </h1>
              <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-600 dark:text-gray-300 mt-2">
                Ai Support Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
