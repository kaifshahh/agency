import React from "react";
import { FaHammer, FaRocket } from "react-icons/fa6";
import Carousel from "./Carousel";
import { BiSupport } from "react-icons/bi";

const WhyUs = () => {
  return (
    <div className="py-20 backdrop-blur-xs bg-white/5 dark:bg-gray-900/5">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className=" font-medium text-red-500 dark:text-red-300">
            Why Us
          </h2>
          <h1 className=" text-2xl md:text-4xl  lg:text-5xl font-bold  leading-8 md:leading-12 lg:leading-14 text-gray-200 dark:text-gray-100 mt-4 tracking-wider  ">
            We Provide Best Digital Solutions
          </h1>
          <p className=" text-gray-300 dark:text-gray-300  leading-7 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-6 mb-10">
              <div className="flex items-center justify-center flex-col w-18 h-18 rounded-full bg-gray-900 dark:bg-red-300">
                <FaRocket className=" text-white dark:text-black w-6 h-6" />
              </div>
              <div className="flex-1">
                <h1 className="text-xl font-semibold text-gray-200 dark:text-gray-100">
                  Fast & Reliable
                </h1>
                <p className=" text-gray-300 dark:text-gray-300  leading-6 lg:w-[85%] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6 mb-10">
              <div className="flex items-center justify-center flex-col w-18 h-18 rounded-full bg-gray-900 dark:bg-red-300">
                <FaHammer className=" text-white dark:text-black w-6 h-6" />
              </div>
              <div className="flex-1">
                <h1 className="text-xl font-semibold text-gray-200 dark:text-gray-100">
                  Dedicated Team
                </h1>
                <p className=" text-gray-300 dark:text-gray-300  leading-6 lg:w-[85%] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6 mb-10">
              <div className="flex items-center justify-center flex-col w-18 h-18 rounded-full bg-gray-900 dark:bg-red-300">
                <BiSupport className=" text-white dark:text-black w-6 h-6" />
              </div>
              <div className="flex-1">
                <h1 className="text-xl font-semibold text-gray-200 dark:text-gray-100">
                  24/7 Support
                </h1>
                <p className=" text-gray-300 dark:text-gray-300  leading-6 lg:w-[85%] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className=" text-xl md:text-2xl  lg:text-3xl font-bold  leading-8 md:leading-12 lg:leading-14 text-gray-200 dark:text-gray-100 mb-8 pt-8  ">
            Empowering businesses with AI-driven automation, smart workflows,
            and digital transformation.
          </h2>
          {/* Carausal Component */}
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
