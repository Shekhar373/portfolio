import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Rotate } from "hamburger-react";
import React from "react";

const ServiceCard = () => {
  const serviceCard = [
    {
      title: "LOGO DESIGN",
      img: "https://www.dzinr.in/shared/8.png",
      number: "01",
      description:
        "No matter the size of your brand, we design logos that are clear, unique and built to last. Our process is thoughtful and collaborative. We dive into your brand, understand what makes it special and turn that into a logo that looks great and feels right. We make sure it works across everything - your website, packaging, social media and more.",
    },
    {
      title: "BRAND IDENTITY DEVELOPMENT",
      img: "https://www.dzinr.in/caseStudies/1.png",
      number: "02",
      description:
        "A strong brand is the full picture. We create visual systems that bring your brand to life and make it easy to recognize everywhere. From colors and fonts to icons, layouts and rules for using everything right, we make sure your brand feels consistent, confident and true to who you are.",
    },
    {
      title: "PACKAGING DESIGN",
      img: "https://www.dzinr.in/caseStudies/2.png",
      number: "03",
      description:
        "Your packaging is often the first thing people notice, so it has to make a great impression. We design packaging that looks good, feels right and reflects your brand clearly. Whether it's for shelves, unboxing videos, or online stores, our focus is on creating designs that grab attention and stand out in a crowded market.",
    },
    {
      title: "WEB DESIGN & DEVELOPMENT",
      img: "https://www.dzinr.in/work/data-vidhya/img14.png",
      number: "04",
      description:
        "We build websites that not only look great but also work smoothly and load fast. Every site is designed to reflect your brand, feel good to use and help you reach your goals, whether that's getting more clicks or sales.",
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
            className="service-card h-screen w-full flex gap-10 bg-black text-white p-5 lg:p-10 lg:pt-20 overflow-hidden"
          >
            <div className="h-full w-auto">
              <h1 className="text-5xl">{card.number}</h1>
            </div>
            <div className="">
              <h1>LOGO DESIGN</h1>
              <h1>BRAND IDENTITY</h1>
              <h1>DEVELOPMENT</h1>
              <h1>PACKAGING DESIGN</h1>
              <h1>WEBSITE DESIGN & DEV</h1>
            </div>
            <div className="h-full w-full lg:w-[40vw] flex flex-col gap-10">
              <h1 className="text-[4.5vw] leading-[5vw]">{card.title}</h1>
              <h1 className="text-xl">{card.description}</h1>
              <img
                className="h-[35vh] w-full object-cover"
                src={card.img}
                alt=""
              />
            </div>
            <div className="text-sm flex flex-col gap-3 text-zinc-600 justify-end">
              <h1 className=" pt-3">DISCOVER AND BRAND ALIGNMENT</h1>
              <h1 className="border-t pt-3">
                MOODBOARD AND CREATIVE DIRECTION
              </h1>
              <h1 className="border-t pt-3">TYPOGRAPHY AND SYMBOL DESIGN</h1>
              <h1 className="border-t pt-3">ICON AND WORDMARK VARIENTS</h1>
              <h1 className="border-t pt-3">USAGE GUIDELINE AND FILE EXPORT</h1>
            </div>
          </div>
        );
      })}
      <div className="h-screen w-full bg-black"></div>
    </div>
  );
};

export default ServiceCard;
