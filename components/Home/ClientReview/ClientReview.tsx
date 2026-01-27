"use client";

import { reviews } from "@/constant/constant";

export default function ClientReviews() {
  return (
    <section className="relative w-full py-15 bg-white/0 text-white overflow-hidden">
      <div>
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className=" text-red-500 sm:text-xl md:text-2xl font-medium">
            Client
            <span className="ml-2 text-indigo-500 font-heading italic">
              Reviews
            </span>
          </h2>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-200 leading-10 md:leading-14 ">
            Trusted by Indian Businesses
          </h1>
          <h1 className=" text-lg text-gray-400 md:text-xl font-bold  leading-10 md:leading-14 ">
            Real feedback from founders, doctors, investors, and enterprise
            leaders.
          </h1>
        </div>
      </div>

      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-linear-to-r dark:from-black dark:to-transparent z-10"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-linear-to-l dark:from-black dark:to-transparent z-10"></div>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div className="flex gap-6 marquee-track ">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className=" min-w-70 my-4 w-80 rounded-2xl border border-white bg-white/3 backdrop-blur-md p-6 
shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 cursor-pointer
hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(99,102,241,0.4),0_0_20px_rgba(236,72,153,0.15)]"
            >
              {/* ⭐ Rating */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.ratings }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-white/80 mb-4 leading-relaxed">
                “{review.text}”
              </p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={review.imgUrl}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />

                <div>
                  <h3 className="font-semibold text-sm">{review.name}</h3>
                  <p className="text-xs text-indigo-400">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
