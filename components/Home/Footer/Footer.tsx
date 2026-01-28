// components/Footer.tsx
"use client";
import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full bg-white/3 backdrop-blur-md text-gray-300 overflow-hidden">
      {/* Background Glow */}

      <div className="max-w-7xl mx-auto px-6 py-15 grid grid-cols-1 md:grid-cols-3 gap-30">
        {/* Brand Section */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              S
            </div>
            <h2 className="text-2xl font-semibold text-white">SheesJc</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            We design stunning digital experiences that inspire people and grow
            brands globally.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-6">
          <h3 className="text-white font-semibold text-lg">Explore</h3>
          <ul className="grid grid-cols-2 gap-y-3 gap-x-15 text-sm">
            {[
              { id: 1, name: "Home", Url: "/" },
              { id: 2, name: "About", Url: "/about" },
              { id: 3, name: "Services", Url: "/services" },
              { id: 4, name: "Pricing", Url: "/pricing" },
              { id: 5, name: "Work", Url: "/work" },
              { id: 6, name: "Contact", Url: "/contact" },
            ].map((item) => (
              <li
                key={item.id}
                className="hover:text-white transition-all duration-200 cursor-pointer hover:translate-x-1"
              >
                <Link href={item.Url}>{item.name}</Link>
              </li>
            ))}
            21`<wbr></wbr>`
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="space-y-6">
          <h3 className="text-white font-semibold text-lg">Get in Touch</h3>
          <div className="text-sm text-gray-400 space-y-2">
            <p>📍Thane, Mumbai, India</p>
            <p>📧 contact@gmail.com</p>
            <p>📞 +91 9028525688</p>
          </div>
          {/* Social Icons */}
          <div className="flex gap-5 text-gray-400 text-xl">
            <FaTwitter className="hover:text-white transition cursor-pointer" />
            <FaLinkedin className="hover:text-white transition cursor-pointer" />
            <FaFacebook className="hover:text-white transition cursor-pointer" />
            <FaGithub className="hover:text-white transition cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-300 dark:text-gray-500 text-center md:text-left">
            © 2026 SheesJc. All rights reserved.
          </p>

          <div className="flex gap-5  dark:text-gray-400 text-xl">
            <a
              href="#"
              className="text-sm text-gray-300 dark:text-gray-500 text-center md:text-left hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 dark:text-gray-500 text-center md:text-left hover:underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
