import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import NewFooter from "../components/common/NewFooter";
import Testimonials from "../components/ServicesComp/Testimonials";
import ServiceCard from "../components/ServicesComp/ServiceCard";

const Services = () => {
  gsap.registerPlugin(SplitText);

  return (
    <div className="overflow-x-hidden bg-[#EBEAE4] text-[#090909]">
      <div className="h-[105vh] lg:h-[200vh] w-full bg-black">
        <div className="h-[30vh] lg:h-[60vh] w-full flex items-end max-md:pb-10 p-5 lg:p-10">
           <h1 className="text-[14vw] lg:text-[6vw] leading-[6vw] text-white">Services</h1>
        </div>
        <div className="h-screen w-full lg:px-10">
          <video 
          className="h-[70vh] lg:h-full w-full object-cover"
          loop muted autoPlay playsInline
          src="/video/service-video.mp4"></video>
        </div>
      </div>
      <ServiceCard />
      <Testimonials />
      <NewFooter />
    </div>
  );
};

export default Services;
