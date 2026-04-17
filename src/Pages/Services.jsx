import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import NewServiceCard from "../components/ServicesComp/NewServiceCard";
import NewFooter from "../components/common/NewFooter";
import Testimonials from "../components/ServicesComp/Testimonials";
import ServiceCard from "../components/ServicesComp/ServiceCard";

const Services = () => {
  gsap.registerPlugin(SplitText);

  return (
    <div className="overflow-x-hidden bg-[#EBEAE4] text-[#090909]">
      <div className="h-[200vh] w-full bg-black">
        <div className="h-[60vh] w-full flex items-end p-5 lg:p-10">
           <h1 className="text-[10vw] leading-[6vw] text-white">Services</h1>
        </div>
        <div className="h-screen w-full px-5 lg:px-10">
          <video 
          className="h-full w-full object-cover"
          loop muted autoPlay
           src="/video/hero_video.mp4"></video>
        </div>
      </div>
      <ServiceCard />
      <Testimonials />
      <NewFooter />
    </div>
  );
};

export default Services;
