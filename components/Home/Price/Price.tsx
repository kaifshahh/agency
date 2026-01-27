import React from "react";
import PriceCard from "./PriceCard";
import { Plans } from "@/constant/constant";

const Price = () => {
  return (
    <div className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white/0 dark:bg-black/10 text-white overflow-hidden">
      <div className="w-[80%] mx-auto space-y-14">
        <div className="text-center max-w-3xl mx-auto space-y-4">
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
            <PriceCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
