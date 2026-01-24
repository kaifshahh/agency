import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="py-20 backdrop-blur-xs bg-white/5 dark:bg-gray-900/10 rounded-lg">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* Left Column - Image */}

        <div>
          <Image
            className="rounded-lg"
            alt="img"
            src={"/images/about1.png"}
            width={500}
            height={500}
          />
        </div>
        {/* Right Column - Text Content */}
        <div>
          <h1 className="text-2xl font-medium mb-6 text-pink-500 dark:text-pink-500">
            About Us
          </h1>
          <h1 className="text-white sm:text-4xl md:text-4xl lg:text-6xl dark:text-gray-200 mt-2 ">
            We are a the leader in web Design
          </h1>
          <p className="text-white dark:text-gray-400 mt-6 leading-relaxed">
            At SheesJc Technologies, we are passionate about crafting
            exceptional digital experiences that empower businesses to thrive in
            the digital landscape.
          </p>
          {/* stats */}
          <div className="grid grid-cols-3 gap-8 mt-10 place-items-center bg-gray-300 dark:bg-gray-800 p-6 rounded-lg">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100">
                50+
              </h1>
              <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-600 dark:text-gray-300 mt-2">
                Projects Completed
              </p>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100">
                98%
              </h1>
              <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-600 dark:text-gray-300 mt-2">
                Client Satisfaction
              </p>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100">
                24/7
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
