import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Swiper = () => {
  gsap.registerPlugin(ScrollTrigger);

  const swiperref = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.to(swiperref.current, {
        transform: "translateX(-75%)",
        scrollTrigger: {
          trigger: swiperref.current,
          start: "top 0%",
          end: "top -250%",
          pin: true,
          scrub: 0.5,
        },
      });
    });
  });

  return (
    <div
      ref={swiperref}
      className="h-screen w-full relative hidden lg:flex flex-col lg:flex-row lg:w-[400vw] overflow-hidden"
    >
      {/* Slide 1 */}
      <div className="relative h-screen w-[100vw] flex-shrink-0">
        <img
          className="h-[70vh] w-full object-cover max-md:h-[40vh] max-sm:h-[30vh]"
          src="/images/pin-img-1.webp"
          alt=""
        />
        <div className="absolute bottom-0 left-0 h-[30vh] w-full bg-[#415030] max-md:h-[15vh] max-sm:h-[10vh]"></div>
      </div>
      {/* Slide 2 */}
      <div className="relative h-screen w-[100vw] flex-shrink-0">
        <img
          className="h-full lg:h-[70vh] w-full object-cover max-md:h-[40vh] max-sm:h-[30vh]"
          src="/images/pin-img-2.webp"
          alt=""
        />
        <div className="absolute bottom-0 left-0 h-[30vh] w-full bg-[#2e3d50] max-md:h-[15vh] max-sm:h-[10vh]"></div>
      </div>
      {/* Slide 3 */}
      <div className="relative h-screen w-[100vw] flex-shrink-0">
        <img
          className="h-full lg:h-[70vh] w-full object-cover max-md:h-[40vh] max-sm:h-[30vh]"
          src="/images/pin-img-3.webp"
          alt=""
        />
        <div className="absolute bottom-0 left-0 h-[30vh] w-full bg-amber-50 max-md:h-[15vh] max-sm:h-[10vh]"></div>
      </div>
      {/* Slide 4: Text Section */}
      <div className="h-screen w-[100vw] flex flex-col flex-shrink-0 justify-center">
        <div className="h-[50vh] w-full flex items-end text-[8vw] mt-10 pl-4 max-md:text-[10vw] max-sm:text-[12vw]">
          <h1>Projects</h1>
        </div>
        <div className="h-[50vh] w-full flex items-start px-4 pt-4 lg:text-4xl sm:text-2xl max-md:text-xl max-sm:text-base">
          <h1>
            These are not just projects, they are stories of our clients, our
            work, and the impact we made.{" "}
            <Link className="uppercase font-medium underline" to="/work">
              See More
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Swiper;
