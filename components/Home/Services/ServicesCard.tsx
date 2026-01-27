"use client";
import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Tilt from "react-parallax-tilt";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type props = {
  title: string;
  icon: string;
};

const ServicesCard = ({ icon, title }: props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      },
    );
  }, []);

  return (
    <Tilt
      className="relative group backdrop-blur-md bg-white/3 rounded-lg p-5 
      border border-white/20 transition-all duration-300 hover:shadow-[0_0_18px_rgba(59,130,246,0.6)]"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable={true}
      glareMaxOpacity={0.15}
      scale={1.04}
      transitionSpeed={300}
    >
      {/* Glow Layer */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-40 transition duration-300 blur-lg bg-blue-500/30"></div>

      <div ref={cardRef} className="relative z-10">
        {/* Icon */}
        <div
          className="w-20 h-20 bg-blue-100 rounded-full mx-auto mt-2 shadow-md flex items-center justify-center 
        transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_#3b82f6]"
        >
          <img src={icon} alt="Service Icon" width={40} height={40} />
        </div>

        <h1 className="text-center mt-4 text-lg text-white dark:text-gray-100 font-semibold">
          {title}
        </h1>

        <p className="text-center text-sm mt-2 leading-6 text-white dark:text-gray-300 px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div
          className="text-center flex items-center justify-center space-x-1 mt-4 font-semibold cursor-pointer 
        text-gray-400 dark:text-gray-100 transition-all duration-300 group-hover:text-pink-500"
        >
          <span>Learn More</span>
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Tilt>
  );
};

export default ServicesCard;
