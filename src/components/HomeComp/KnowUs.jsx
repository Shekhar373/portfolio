import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React, { useRef } from "react";

const KnowUs = () => {
  const horiscroll = useRef(null);
  gsap.registerPlugin(ScrollTrigger, SplitText);
  useGSAP(() => {
    const split = SplitText.create(".horizontal-text", {
      type: "chars, words",
    });

    // Slow down by increasing the range of scroll (make end further)
    const scrollTween = gsap.to(horiscroll.current, {
      xPercent: -143,
      scrollTrigger: {
        trigger: horiscroll.current,
        // markers: true,
        start: "top 0%",
        end: "top -700%", // was -150%, now much longer scroll distance
        pin: true,
        scrub: 1, // was 3, you may increase even to 4 or 5, but with a longer scroll it's already much slower
      },
    });

    split.chars.forEach((char) => {
      gsap.from(char, {
        yPercent: "random(-200, 200)",
        rotation: "random(-50, 50)",
        opacity: 0,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: char,
          containerAnimation: scrollTween,
          // markers:true,
          start: "left 150%",
          end: "left 90%",
          scrub: 1,
        },
      });
    });
  });
  return (
    <div
      ref={horiscroll}
      className=" horizontal-text  font-[text-font] tracking-tight h-screen pl-[250vw]  whitespace-nowrap  flex justify-center items-center text-black text-[13vw]"
    >
      <h1>Ready to stand out, not blend in?</h1>
    </div>
  );
};

export default KnowUs;
