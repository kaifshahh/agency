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
      className=" relative group backdrop-blur-3xl bg-white/3 rounded-lg p-5 h-full
      border border-white/30 transition-all duration-300 hover:shadow-[0_0_18px_rgba(59,130,246,0.6)]"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable={true}
      glareMaxOpacity={0.15}
      scale={1.04}
      transitionSpeed={300}
    >
      {/* Glow Layer */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-40 transition duration-300 blur-lg bg-blue-500/30"></div>

      <div className="relative z-10 ">
        {/* Icon */}
        <div
          className="w-20 h-20 bg-blue-100  mb-3 sm:mb-5 rounded-full mx-auto mt-2 shadow-md flex items-center justify-center 
        transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_#3b82f6]"
        >
          <img src={icon} alt="Service Icon" width={40} height={40} />
        </div>

        <h3 className="tracking-tight text-lg sm:text-xl font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-white/60">{heading}</p>

        <ul className="class=space-y-1.5 sm:space-y-2">
          {points.map((desc, index) => (
            <li
              key={index}
              className="flex items-center text-xs sm:text-sm text-white/50 group-hover:text-white/80 transition-colors"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 mr-3"></div>
              {desc}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="text-center flex items-center justify-center space-x-1 mt-4 font-semibold cursor-pointer 
        text-gray-400 dark:text-gray-100 transition-all duration-300 group-hover:text-pink-500"
        >
          <span>Learn More</span>
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </Tilt>
  );
};

export default ServicesCard;
