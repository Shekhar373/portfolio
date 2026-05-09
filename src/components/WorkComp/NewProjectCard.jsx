import React, { useEffect } from "react";
import { projects } from "../../data/projects";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const NewProjectCard = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.utils.toArray(".workcard-main").forEach((section) => {
      const img = section.querySelector(".workcard-img");
      const clip = section.querySelector(".clip-wrapper");
      const mm = gsap.matchMedia();

    //   mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          img,
          { scale: 1, yPercent: window.innerWidth >= 1024 ? -30 : -10  },
          {
            scale: 1,
            yPercent: window.innerWidth >= 1024 ? 30 : 10 ,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    // });
  }, []);

  return (
    <div className="flex flex-col">
      {projects.map((project) => (
        <Link to={`/work/${project.slug}`} key={project.slug}>
          <div className="h-[40vh] lg:h-screen w-full workcard-main overflow-hidden relative">
            <div className="clip-wrapper h-full w-full">
              <img
                className="workcard-img h-[120%] w-full object-cover"
                src={project.cover}
                alt=""
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewProjectCard;
