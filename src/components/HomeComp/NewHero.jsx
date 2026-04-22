import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";

const NewHero = () => {
  const herovideoRef = useRef();
  const heroParentRef = useRef();

  gsap.registerPlugin(ScrollTrigger, SplitText);

  useGSAP(() => {
    const split = SplitText.create(".hero-text", {
      type: "chars",
      mask: "chars",
    });
    const splitt = SplitText.create(".sub-heading h1", {
      type: "chars",
      mask: "chars",
    });

    const introTl = gsap.timeline();

    introTl.from(split.chars, {
      y: 300,
      duration: 1,
      delay: 2.85,
      ease: "expo.out",
    });

    introTl.to(split.chars, {
      clipPath: "inset(0% 0% 0% 100%)",
      stagger: {
        amount: 0.1,
      },
    });
    introTl.to(split.chars, {
      clipPath: "inset(0% 100% 0% 0%)",
      duration: 0.001,
    });
    introTl.to(split.chars, {
      clipPath: "inset(0% 0% 0% 0%)",
      stagger: {
        amount: 0.1,
      },
    });
    introTl.to(".hero-text-container", {
      yPercent: window.innerWidth >= 1900 ? -30 : -50,
      duration: 1,
      ease: "expo.inOut",
    });

    introTl.from(herovideoRef.current, {
      clipPath: "inset(0 0 100% 0)",
      duration: 1,
      ease: "expo.out",
    });

    introTl.from(".hero-video video", {
      clipPath: "inset(0 0 100% 0)",
      duration: 1,
      ease: "expo.out",
    },"<");

    introTl.from(
      splitt.chars,
      {
        y: -100,
        duration: 1.5,
        ease: "expo.out",
      },
      "<",
    );

    gsap.matchMedia().add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroParentRef.current,
          start: "top top",
          end: "bottom -10%",
          scrub: 1, // Increase scrub value to make the animation slower
          pin: true,
          pinSpacing: true,
          // markers: true,
        },
      });

      // text animation
      tl.from(
        [".visual-text", ".design-text"],
        {
          xPercent: (i) => (i === 0 ? -400 : 530),
        },
        0,
      );

      // video animation (sync with same timeline)
      tl.from(
        herovideoRef.current,
        {
          scale: 0.35,
          yPercent: -150,
        },
        0,
      );
    });
  });

  return (
    <div id="hero" className="lg:h-[270vh] h-[100vh]  w-full bg-[#EBEAE4]">
      <div
        className="hero-parent h-[80vh] w-full relative font-[tall-font] "
        ref={heroParentRef}
      >
        <div className="h-screen absolute flex justify-center pt-[40vh] lg:items-center uppercase lg:pt-[5vh] w-full text-center">
          <div className="hero-text-container">
            <div className="hero-text text-[30vw] max-md:tracking-wide lg:text-[22vw] flex flex-col lg:gap-[5vw] lg:flex-row leading-[26vw] lg:leading-[25vw] w-full">
              <h1>NEW HUE</h1>
              <h1>STUDIO</h1>
            </div>
          </div>
        </div>
        <div className="h-[40vh] w-full"></div>
        <div className="hero-video visible lg:hidden px-5">
        <video
          autoPlay
          loop
          muted 
          className=" object-cover h-[40vh] w-full "
          src="/video/hero_video.mp4"
        ></video>
        </div>
        <div className="sub-heading h-[20vh] lg:h-[40vh]  w-full flex lg:pt-[20vh] gap-2 text-[13vw] lg:text-[4vw] justify-center lg:justify-center lg:items-center">
          <h1 className="visual-text">A VISUAL</h1>
          <h1 className="design-text">DESIGN </h1>
        </div>
      </div>
      <div className=" h-[100vh] w-full relative hidden lg:flex justify-center items-center">
        <video
          ref={herovideoRef}
          autoPlay
          loop
          muted
          className=" object-cover h-[100vh] w-full "
          src="/video/hero_video.mp4"
        ></video>
      </div>
    </div>
  );
};

export default NewHero;
