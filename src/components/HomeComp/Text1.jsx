import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React, { useRef } from "react";

const Text1 = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const firsttext = useRef(null);

  useGSAP(() => {
    let split = SplitText.create(".first-text h1", {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit: (split) => {
        return gsap.from(split.lines, {
          opacity: 0,
          yPercent: 120,
          ease: "power",
          stagger: {
            amount: 0.8,
          },

          scrollTrigger: {
            trigger: firsttext.current,
            // markers: true,
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
        });
      },
      onComplete: () => split.revert(),
    });
  });

  return (
    <>
      <div
        ref={firsttext}
        className="first-text  pt-[5vh] lg:pt-[10vh] h-screen lg:h-[160vh] w-full flex flex-col gap-[10vh] lg:gap-[25vh] text-white p-5 lg:p-10"
      >
        <div className="flex flex-col gap-10">
          <h1 className="text-sm lg:text-xl text-zinc-500">
            [ ! ] Be the brand they never stop talking about
          </h1>
          <h1 className="text-[6vw] md:text-[5vw] lg:text-[3.5vw] leading-[8vw] md:leading-[6.6vw] lg:leading-[4.5vw]">
            We don't just design brands. We make them impossible to forget. New
            Hue Studio is where branding, visual design, motion, and 3D web
            experiences come together — built to turn heads and hold attention
            long after the first glance.
          </h1>
        </div>
        <div className="text-sm lg:text-2xl flex text-zinc-500 border-t pt-5 lg:pt-10">
          <div className="w-1/2 pr-5">
            <h1>Designing Iconic Brands</h1>
          </div>
          <div className="w-1/2">
            <h1>
              Your brand has a story. We make sure it's seen, felt and
              remembered. We design logos, build brands and create moments that
              turn attention into action.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Text1;
