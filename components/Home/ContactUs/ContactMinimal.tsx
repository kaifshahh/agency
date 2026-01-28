"use client";

import React, { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactMinimal = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading minimal fade
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 25,
        duration: 0.5,
        delay: 0.25,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Form minimal fade
      gsap.from(formRef.current, {
        opacity: 0,
        y: 25,
        duration: 0.5,
        delay: 0.25,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
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
        className="grid gap-4 text-center relative z-10 py-10 bg-black/60 dark:text-white"
      >
        <h1 className="text-4xl font-semibold bg-linear-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter">
          Join Our Workplaces Around The World!
          <br />
          Ready to Transform Your Business?
        </h1>
      </div>

      <div ref={formRef}>
        <ContactForm />
      </div>
    </>
  );
};

export default ContactMinimal;
