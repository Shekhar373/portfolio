import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Video = () => {
  const scale = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(scale.current, {
      scale: 1.25,
      scrollTrigger: {
        trigger: scale.current,
        //  markers: true,
        scrub: 1,
        start: "top 90%",
        end: "top 10%",
      },
    });
  });
  return (
    <div className=" lg:h-[110vh] h-[40vh] w-full flex justify-center items-center">
      <video
        ref={scale}
        autoPlay
        loop
        muted
        className="lg:h-[80vh] h-[40vh] w-[80vw]"
        src="/video/service-video.mp4"
      ></video>
    </div>
  );
};

export default Video;
