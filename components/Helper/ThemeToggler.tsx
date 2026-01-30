"use client";
import { useTheme } from "next-themes";
import React, { use, useEffect } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeToggler = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  useEffect(() => {
    const mountCheck = () => {
      setMounted(true);
    };
    mountCheck();
  }, []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 transition w-10 h-10 cursor-pointer bg-gray-800/90  dark:bg-white rounded-full flex flex-col items-center justify-center"
    >
      {currentTheme === "dark" ? (
        <BiSun className=" text-white dark:text-black w-7 h-7 cursor-pointer" />
      ) : (
        <BiMoon className=" text-white dark:text-black w-7 h-7 cursor-pointer" />
      )}
    </button>
  );
};

export default ThemeToggler;
