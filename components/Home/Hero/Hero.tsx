"use client";

import Link from "next/link";
import { GiSparkles } from "react-icons/gi";
import { TypeAnimation } from "react-type-animation";
import { LuArrowUpFromDot } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
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
        <LuArrowUpFromDot className="h-10 w-10 text-white/80" />
      </div>
    </div>
  );
};

export default Hero;
