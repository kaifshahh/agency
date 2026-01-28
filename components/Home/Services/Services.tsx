import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="py-20  dark:bg-black/10 backdrop-blur-sm">
      <div>
        <h1 className="text-red-500 dark:text-red-300 text-xl font-bold text-center">
          Our Services
        </h1>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-white dark:text-gray-100 mt-4 font-bold tracking-wider ">
          Provided Features
        </h1>
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {/* Service Cards */}
        <div>
          <ServicesCard title="Web Development" icon="/images/s1.png" />
        </div>
        <div>
          <ServicesCard title="Web Development" icon="/images/s2.png" />
        </div>
        <div>
          <ServicesCard title="Web Development" icon="/images/s3.png" />
        </div>
        <div>
          <ServicesCard title="Web Development" icon="/images/s4.png" />
        </div>
        <div>
          <ServicesCard title="Web Development" icon="/images/s5.png" />
        </div>
        <div>
          <ServicesCard title="Web Development" icon="/images/s6.png" />
        </div>
      </div>
    </div>
  );
};

export default Services;
