import { NAVLINKS } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";
type props = {
  showNav: boolean;
  closeNav: () => void;
};
const MobileNav = ({ showNav, closeNav }: props) => {
  const sideBarOpenClose = showNav ? "translate-x-0" : "translate-x-[-105%]";
  return (
    <>
      {/* dark */}
      <div
        className={`fixed ${sideBarOpenClose} inset-0 transform transition-all duration-500 z-40 bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* navlinks */}
      <div
        className={`fixed text-black dark:text-white ${sideBarOpenClose} justify-center flex flex-col h-screen transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-white/5 backdrop-blur-md space-y-6 z-50 p-8`}
      >
        {NAVLINKS.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.url}
              onClick={closeNav}
              className="text-black dark:text-white w-full text-[20px] ml-12 border-b-[1.5px pb-1 border-white]"
            >
              <p>{link.label}</p>
            </Link>
          );
        })}
        {/* close icon */}
        <CgClose
          onClick={closeNav}
          className={`absolute top-4 right-4 text-black dark:text-white cursor-pointer sm:w-8 sm:h-8 w-6 h-6`}
        />
      </div>
    </>
  );
};

export default MobileNav;
