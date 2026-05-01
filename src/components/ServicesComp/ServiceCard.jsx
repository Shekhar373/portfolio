import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const ServiceCard = () => {
  const serviceCard = [
    {
      title: "LOGO DESIGN",
      img: "/Service-image/Logo.jpg",
      number: "01",
      description:
        "We design logos that are clear, distinctive, and built to last. Every mark is crafted through a thoughtful process that translates your brand’s essence into a strong, versatile identity—ready to perform across digital and physical touchpoints.",
    },
    {
      title: "BRAND IDENTITY DEVELOPMENT",
      img: "/Service-image/Brand-Identity.jpg",
      number: "02",
      description:
        "A brand is more than a logo—it’s a complete visual system. We create cohesive identities using color, typography, and design elements that ensure your brand feels consistent, recognizable, and confidently positioned everywhere it appears.",
    },
    {
      title: "PACKAGING DESIGN",
      img: "/Service-image/Packaging.jpg",
      number: "03",
      description:
        "Packaging is your first impression—and it needs to stand out. We design visually striking and brand-aligned packaging that captures attention, enhances product appeal, and creates a memorable experience both on shelves and online.",
    },
    {
      title: "WEB DESIGN & DEVELOPMENT",
      img: "/Service-image/Web.jpg",
      number: "04",
      description:
        "We design and develop high-performing websites that are fast, responsive, and visually refined. Along with seamless user experiences, we specialize in 3D web development, crafting immersive digital environments that set your brand apart.",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const cards = document.querySelectorAll(".service-card");

    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  });
  return (
    <div className="h-auto w-full bg-black">
      {serviceCard.map((card, idx) => {
        return (
          <div
            key={idx}
            className="service-card min-h-screen h-auto w-full flex flex-col lg:flex-row gap-6 lg:gap-10 bg-black text-white p-5 lg:p-10 pt-20 lg:pt-15 overflow-hidden"
          >
            {/* Left block: Service number */}
            <div className="flex justify-start lg:justify-center items-start lg:items-start w-full lg:w-auto mb-4 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl">{card.number}</h1>
            </div>
            {/* Center left block: Labels (hidden on mobile) */}
            <div className="hidden md:flex flex-col justify-start w-full lg:w-auto gap-1">
              <h1 className="text-base lg:text-md">LOGO DESIGN</h1>
              <h1 className="text-base lg:text-md">BRAND IDENTITY</h1>
              <h1 className="text-base lg:text-md">DEVELOPMENT</h1>
              <h1 className="text-base lg:text-md">PACKAGING DESIGN</h1>
              <h1 className="text-base lg:text-md">WEBSITE DESIGN & DEV</h1>
                     </div>
            {/* Main content block */}
            <div className="flex flex-col gap-5 lg:gap-5 w-full lg:w-[40vw]">
              <h1 className="text-3xl md:text-4xl lg:text-[4.5vw] leading-tight lg:leading-[5vw]">
                {card.title}
              </h1>
              <h1 className="text-base md:text-lg lg:text-md">
                {card.description}
              </h1>
              <img
                className="h-[220px] md:h-[250px] lg:h-[35vh] w-full object-cover rounded-md"
                src={card.img}
                alt=""
              />
            </div>
            {/* Features/Details block */}
            <div className="text-xs md:text-sm hidden lg:flex flex-col gap-2 md:gap-3 text-zinc-600 justify-end mt-4 lg:mt-0 w-full lg:w-auto">
              <h1 className="pt-2 md:pt-3">DISCOVER AND BRAND ALIGNMENT</h1>
              <h1 className="border-t pt-2 md:pt-3">
                MOODBOARD AND CREATIVE DIRECTION
              </h1>
              <h1 className="border-t pt-2 md:pt-3">
                TYPOGRAPHY AND SYMBOL DESIGN
              </h1>
              <h1 className="border-t pt-2 md:pt-3">
                ICON AND WORDMARK VARIENTS
              </h1>
              <h1 className="border-t pt-2 md:pt-3">
                USAGE GUIDELINE AND FILE EXPORT
              </h1>
            </div>
          </div>
        );
      })}
      <div className="h-screen w-full bg-black"></div>
    </div>
  );
};

export default ServiceCard;
