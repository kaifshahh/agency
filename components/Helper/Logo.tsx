import React from "react";
import { CgWebsite } from "react-icons/cg";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-col">
        <CgWebsite className="text-gray-800 dark:text-white w-6 h-6 cursor-pointer" />
      </div>
      <h1 className="text-xl hidden sm:block md:text-2xl from-red-500 to-indigo-500 bg-linear-to-r text-transparent bg-clip-text font-bold">
        SheesJc
      </h1>
    </div>
  );
};

export default Logo;
