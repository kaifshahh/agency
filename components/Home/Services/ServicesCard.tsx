"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Tilt from "react-parallax-tilt";

type props = {
  title: string;
  icon: string;
  heading: string;
  points: string[];
};

const ServicesCard = ({ icon, title, heading, points }: props) => {
  return (
    <Tilt
      className=" relative group backdrop-blur-3xl bg-black/8 dark:bg-white/3 rounded-lg p-5 h-full 
      border border-black/50 dark:border-white/30 transition-all duration-300 hover:shadow-[0_0_18px_#000000] dark:hover:shadow-[0_0_18px_rgba(59,130,246,0.8)"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable={true}
      glareMaxOpacity={0.15}
      scale={1.04}
      transitionSpeed={300}
    >
      {/* Glow Layer */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-40 transition duration-300 blur-lg  dark:bg-blue-500/30 "></div>

      <div className="relative z-10 ">
        {/* Icon */}
        <div
          className="w-20 h-20 bg-slate-500 dark:bg-blue-100  mb-3 sm:mb-5 rounded-full mx-auto mt-2 shadow-md flex items-center justify-center 
        transition-all duration-300 
        group-hover:bg-slate-400
        dark:group-hover:bg-blue-100
        group-hover:scale-110 group-hover:shadow-[0_0_15px_#000000] dark:group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]"
        >
          <img src={icon} alt="Service Icon" width={40} height={40} />
        </div>

        <h3 className="tracking-tight text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-slate-900 dark:text-white/60">
          {heading}
        </p>

        <ul className="class=space-y-1.5 sm:space-y-2">
          {points.map((desc, index) => (
            <li
              key={index}
              className="flex items-center text-xs sm:text-sm text-slate-800 dark:text-white/50
              group-hover:text-pink-700 dark:group-hover:text-white/90 transition-colors"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-slate-800 mr-3"></div>
              {desc}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="text-center flex items-center justify-center space-x-1 mt-4 font-semibold cursor-pointer 
        text-gray-900 dark:text-gray-100 transition-all duration-300 group-hover:text-pink-600"
        >
          <span>Learn More</span>
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </Tilt>
  );
};

export default ServicesCard;
