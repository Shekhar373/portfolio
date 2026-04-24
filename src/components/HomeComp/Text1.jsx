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
          // opacity: 0,
          // yPercent: 120,
          clipPath: "inset(0% 0% 100% 0%)",
          stagger: {
            amount: 0.4,
          },
          ease: "power2.out",

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
        className="first-text text-[7.5vw] md:text-[5vw] lg:text-[3.5vw] leading-[9.5vw] md:leading-[6.6vw] lg:leading-[4.5vw] pt-[5vh] lg:pt-[10vh] h-[60vh] lg:h-screen w-full  text-white flex p-5 lg:p-10"
      >
        <h1>
          New Hue Studio is a full-service creative agency offering graphic
          design, video editing, motion graphics, social media marketing,
          performance advertising, and 3D websites. We mix creativity to build
          brands that stand out
        </h1>
      </div>
      <div>
      
      </div>
    </>
  );
};

export default Text1;
