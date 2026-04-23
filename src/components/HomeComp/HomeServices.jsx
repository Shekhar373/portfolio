import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase, ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const HomeServices = () => {
  const cardRef = useRef(null);

  const service = [
    {
      heading: "Logo Design",
      svg: "/SVG/Logo.svg",
      text: "We make logos that feel right. Not just good-looking but meaningful, memorable and built to last for your brand.",
    },
    {
      heading: "Brand Identity Development",
      svg: "/SVG/Brand.svg",
      text: "A brand is more than a logo. We help you show up the same way everywhere - Online, offline and everything between.",
    },
    {
      heading: "Packaging Design ",
      svg: "/SVG/packaging.svg",
      text: "Good packaging tells a story before anyone reads a word. We design packs that stand out, feel great and connect.",
    },
    {
      heading: "Website Design & Development",
      svg: "/SVG/WebDesign.svg",
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
        // ease: "elastic.out(1,0.4)",
        ease: CustomEase.create("custom", "M0,0 C0,0 0.023,0.156 0.031,0.226 0.048,0.373 0.078,0.719 0.094,0.867 0.102,0.941 0.114,1.055 0.123,1.115 0.13,1.162 0.145,1.254 0.154,1.293 0.158,1.31 0.164,1.33 0.169,1.341 0.173,1.349 0.18,1.365 0.186,1.369 0.19,1.372 0.199,1.372 0.204,1.369 0.212,1.365 0.222,1.344 0.227,1.334 0.234,1.319 0.243,1.29 0.251,1.265 0.273,1.198 0.314,1.03 0.338,0.965 0.348,0.94 0.363,0.91 0.372,0.896 0.376,0.889 0.383,0.882 0.387,0.879 0.391,0.875 0.4,0.87 0.405,0.869 0.41,0.867 0.419,0.868 0.423,0.869 0.429,0.871 0.437,0.874 0.445,0.881 0.473,0.905 0.529,0.986 0.556,1.012 0.567,1.021 0.58,1.031 0.588,1.035 0.596,1.039 0.612,1.045 0.621,1.046 0.631,1.047 0.651,1.044 0.664,1.041 0.69,1.034 0.748,1.003 0.774,0.995 0.791,0.99 0.814,0.984 0.834,0.983 0.882,0.981 0.992,1.003 1.045,1.005 1.099,1.007 1.208,0.998 1.261,0.998 1.309,0.997 1,1 1,1 "),
        stagger: { amount: 0.1 },
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
            <h1 className="hover:text-white transition-all cursor-pointer">
              Branding
            </h1>
            <h1 className="hover:text-white transition-all cursor-pointer">
              UI/UX Design
            </h1>
            <h1 className="hover:text-white transition-all cursor-pointer">
              Development
            </h1>
            <h1 className="hover:text-white transition-all cursor-pointer">
              Packaging
            </h1>
          </div>
        </div>
      </div>
      <div
        className="home-service-parent w-full flex flex-col lg:flex-row text-white justify-center bg-black items-center p-4 md:p-8 lg:p-10 gap-5
        min-h-[120vh] sm:min-h-[150vh] md:min-h-[180vh] lg:min-h-0 lg:h-screen"
      >
        {service.map((card, idx) => {
          return (
            <div
              key={idx}
              ref={cardRef}
              className="home-service-card flex flex-col justify-between
                w-full sm:w-[80vw] md:w-[60vw] lg:w-[25vw]
                h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh]
                p-4 md:p-6 lg:p-5 rounded-3xl bg-[#101010] border border-zinc-700 transition-shadow
                shadow-lg hover:shadow-xl"
            >
              <img
                className="w-[20vw] h-[15vh] sm:w-[17vw] sm:h-[18vh] md:w-[13vw] md:h-[20vh] lg:w-[7vw] lg:h-[17vh] object-contain rounded-xl mb-3"
                src={card.svg ?? "null"}
                alt={card.heading}
              />
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold mb-2">
                {card.heading}
              </h1>
              <h3 className="text-xs sm:text-sm md:text-md lg:text-sm text-zinc-500">
                {card.text}
              </h3>
            </div>
          );
        })}
      </div>

      <div className="h-[5vh] lg:h-[40vh] w-full bg-black"></div>
    </div>
  );
};

export default HomeServices;
