"use client";

import React, { useEffect, useRef } from "react";
import Earth from "./Earth";
import { Sparkles } from "./Particles";
import ContactForm from "./ContactForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ContacUS() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Top text minimal fade
      gsap.from(textRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Bottom text minimal fade
      gsap.from(bottomTextRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Contact form minimal fade
      gsap.from(formRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="h-screen overflow-hidden bg-black/8
         dark:bg-black/60 text-white pt-14"
      >
        <article
          ref={textRef}
          className="grid gap-4 text-center relative z-10 pt-10"
        >
          <span className="inline-block text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]">
            Connect With Us
          </span>

          <h1
            className="text-4xl font-semibold  bg-linear-to-b from-[#575968] to-[#121417]
        dark:bg-linear-to-b dark:from-[#5864bc] dark:to-[#7b9cda]  bg-clip-text text-transparent leading-[100%] tracking-tighter"
          >
            Join Our Workplaces Around The World!
            <br />
            Ready to Transform Your Business?
          </h1>

          <Earth />
        </article>

        <div
          className="relative -mt-32 h-80 w-screen overflow-hidden mask-[radial-gradient(50%_50%_at_center,white,transparent)]
          before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40
          after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%] after:border-t after:border-[#163474] after:bg-blue-950"
        >
          <Sparkles
            density={800}
            speed={1.2}
            size={1.2}
            direction="top"
            opacitySpeed={2}
            color="#32A7FF"
            className="absolute inset-x-0 bottom-0 h-full w-full "
          />

          <div
            ref={bottomTextRef}
            className="absolute inset-0 flex items-center justify-center pt-25 text-sm lg:text-2xl font-bold text-white z-20 text-center px-20"
          >
            Lets discuss here
          </div>
        </div>
      </div>

      <div ref={formRef}>
        <ContactForm />
      </div>
    </>
  );
}

export default ContacUS;
