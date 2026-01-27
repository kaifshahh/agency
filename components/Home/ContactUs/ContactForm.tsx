"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="w-full flex items-center justify-center bg-black/90 pb-10">
      <div className="w-[90%] max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[65vh]">
        {/* LEFT FORM */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]">
          <h2 className="text-2xl font-semibold mb-6 text-white">
            Send us a message
          </h2>

          <form className="space-y-5">
            <div>
              <label className="text-sm text-white/80">Full Name</label>
              <input
                type="text"
                placeholder="Write your name here"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label className="text-sm text-white/80">Phone Number</label>
              <input
                type="text"
                placeholder="Write your phone here"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label className="text-sm text-white/80">Email</label>
              <input
                type="email"
                placeholder="Write your email here"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition-all duration-300  hover:shadow-[0_0_15px_rgba(99,102,241,0.7)]"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>

        {/* RIGHT INFO CARDS */}
        <div className="flex flex-col gap-6">
          {/* Email Card */}
          <div className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-indigo-500/20 text-indigo-400">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-white/70 text-sm">xxx@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:shadow-[0_0_50px_rgba(99,102,241,0.25)] hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-indigo-500/20 text-indigo-400">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-white/70 text-sm">+91 9028525688</p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:shadow-[0_0_50px_rgba(99,102,241,0.25)] hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-indigo-500/20 text-indigo-400">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Mumbai</h3>
                <p className="text-white/70 text-sm"> thane-west Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
