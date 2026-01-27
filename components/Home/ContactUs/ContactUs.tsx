import React from "react";
import Earth from "./Earth";
import { Sparkles } from "./Particles";
import ContactForm from "./ContactForm";

function index() {
  return (
    <>
      <div className="h-screen overflow-hidden bg-black/90 text-white">
        <article className="grid gap-4 text-center relative z-10 pt-10">
          <span className="inline-block text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]">
            Connect With Us
          </span>
          <h1 className="text-4xl  font-semibold bg-linear-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter">
            Join Our Workplaces Around The World!
            <br />
            Ready to Transform Your Business?
          </h1>
          <Earth />
        </article>

        <div
          className="relative -mt-32 h-80 w-screen overflow-hidden mask-[radial-gradient(50%_50%_at_center,white,transparent)]
 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%] after:border-t after:border-[#163474] after:bg-[#08132b]"
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
          <div className="absolute inset-0 flex items-center  justify-center pt-35 text-sm lg:text-2xl font-bold text-white z-20 text-center px-20">
            Lets discuss how AI automation can drive growth for your company.
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}

export default index;
