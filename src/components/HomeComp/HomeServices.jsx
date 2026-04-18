import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const HomeServices = () => {
  const cardRef = useRef(null);

  const service = [
    {
      heading: "Logo Design",
      svg: "",
      text: "We make logos that feel right. Not just good-looking but meaningful, memorable and built to last for your brand.",
    },
    {
      heading: "Brand Identity Development",
      svg: "",
      text: "A brand is more than a logo. We help you show up the same way everywhere - Online, offline and everything between.",
    },
    {
      heading: "Packaging Design ",
      svg: "",
      text: "Good packaging tells a story before anyone reads a word. We design packs that stand out, feel great and connect.",
    },
    {
      heading: "Website Design & Development",
      svg: "",
      text: "Your website should work hard and look good. We design sites that are easy to use and built to grow with you.",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".home-service-parent",
          start: "top 0%",
          end: "top -500%",
          //  markers: true,
          scrub: true,
          pin: true,
        },
      });

      tl.from(".home-service-card", {
        yPercent: 150,
        ease: "elastic.out(1,0.3)",
        stagger: {amount:0.1},
      });

      // tl.to(".home-service-card", {
      //   yPercent: -150,
      //   ease: "expo.inOut",
      //   stagger: 0.1,
      // });

      // Cleanup function to remove ScrollTrigger and timeline if the query changes
      return () => {
        tl.scrollTrigger && tl.scrollTrigger.kill();
        tl.kill();
      };
    });

    // Cleanup matchMedia listeners on component unmount
    return () => mm.kill();
  });

  return (
    <div>
      <div className="h-[20vh] lg:h-[40vh] w-full bg-black text-white flex justify-between p-5 lg:p-10 leading-[10vw] lg:leading-[8vw]">
        <h1 className="text-[10vw] lg:text-[8vw]">
          Services <br /> We Provide
        </h1>
        <div className="hidden lg:flex gap-10 pt-5">
          <h1 className="">Summary:</h1>
          <div className="leading-[2vw] text-zinc-600 pt-10">
            <h1 className="hover:text-white transition-all cursor-pointer">Branding</h1>
            <h1 className="hover:text-white transition-all cursor-pointer">UI/UX Design</h1>
            <h1 className="hover:text-white transition-all cursor-pointer">Development</h1>
            <h1 className="hover:text-white transition-all cursor-pointer">Packaging</h1>
          </div>
        </div>
   
      </div>
      <div className="home-service-parent h-[220vh] w-full lg:h-screen flex flex-col lg:flex-row  text-white justify-center bg-black items-center p-10 gap-5">
        {service.map((card, idx) => {
          return (
            <div
              key={idx}
              ref={cardRef}
              className="home-service-card h-[50vh] w-[100vw] lg:h-[60vh] lg:w-[25vw] flex flex-col justify-between p-5 rounded-3xl bg-[#101010] border-1 border-zinc-700"
            >
              <img
                className="h-[20vh] w-[10vw] bg-zinc-900"
                src="null"
                alt=""
              />
              <h1 className="text-3xl lg:text-2xl">{card.heading}</h1>
              <h3 className="text-md lg:text-sm text-zinc-500">{card.text}</h3>
            </div>
          );
        })}
      </div>

      <div className="h-[40vh] w-full bg-black"></div>
    </div>
  );
};

export default HomeServices;
