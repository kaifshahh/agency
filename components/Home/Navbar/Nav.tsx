"use client";
import Logo from "@/components/Helper/Logo";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import { NAVLINKS } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
type props = {
  openNav: () => void;
};
const Nav = ({ openNav }: props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-all duration-200 h-[12vh] z-20 fixed w-full ${navBg ? "dark:bg-gray-900/50 backdrop-blur-sm bg-blue-950/50 shadow-md" : "bg-fixed"}`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo Section */}
        <Logo />
        {/* Nav Links Section */}
        <div className="hidden lg:flex items-center space-x-10">
          {NAVLINKS.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="text-white hover:text-yellow-200 font-semibold transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* buttons */}
        <div className="flex items-center  space-x-5">
          <a
            href="#"
            className="px-6 py-2 border border-white text-white rounded-full hover:bg-yellow-200 hover:border-yellow-200 hover:text-black transition-all duration-200 font-semibold"
          >
            <span className="mr-2">Sign In</span>
          </a>
          <div>
            <ThemeToggler />
          </div>
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
