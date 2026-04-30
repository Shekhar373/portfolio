import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import { useRef } from "react";

const ProjectDetails = () => {
  const container = useRef();

  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <h1>Project not found</h1>;

  return (
    <div ref={container} className="bg-black text-white h-auto">
      {/* HERO */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] lg:min-h-screen w-full overflow-hidden">
        <img
          data-speed="0.5"
          src={project.cover}
          className="absolute w-full h-full object-cover parallax"
          alt={project.title || 'Project Cover'}
        />

        <div className="absolute inset-0 bg-black/40"></div>

        {/* TEXT AT BOTTOM OF IMAGE */}
        <div className="absolute bottom-0 left-0 w-full flex flex-col lg:justify-end px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 pb-8 sm:pb-12 md:pb-16 z-10">
          <h1
            className="
              hero-title
              text-2xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl
              font-semibold
              mb-4
              sm:mb-6
              md:mb-8
              leading-tight
              max-w-full
              break-words
            "
            style={{
              wordBreak: 'break-word',
              lineHeight: '1.125'
            }}
          >
            {project.title || 'Project Title'}
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-10 xl:gap-14 text-[13px] xs:text-sm md:text-base uppercase tracking-widest w-full">
            <div className="project-info flex-1 min-w-0">
              <p className="opacity-50 text-xs sm:text-sm md:text-base">Client</p>
              <p className="truncate">{project.title || "Client"}</p>
            </div>
            <div className="project-info flex-1 min-w-0">
              <p className="opacity-50 text-xs sm:text-sm md:text-base">Year</p>
              <p className="truncate">2025</p>
            </div>
            <div className="project-info flex-1 min-w-0">
              <p className="opacity-50 text-xs sm:text-sm md:text-base">Services</p>
              <p className="truncate">Branding / Web Design</p>
            </div>
          </div>
        </div>
      </section>



      {/* DESCRIPTION */}
      <section className="max-w-3xl md:max-w-5xl mx-auto py-10 md:py-20 px-4 sm:px-6 md:px-12">
        <p className="description text-base sm:text-xl md:text-3xl leading-relaxed font-light">
          {project.description ||
            "This is a creatively crafted project with a memorable digital identity."}
        </p>
      </section>

      {/* FULL IMAGE */}
      <section className="flex flex-col gap-5">
        {/* First Full width Image */}
        {project.image1 && (
          <section className="overflow-hidden w-full h-[60vh] md:h-screen aspect-[4/3] sm:aspect-[16/7] md:aspect-[16/7] px-2 sm:px-6 md:px-10">
            <img
              src={project.image1}
              className="reveal-img w-full h-full rounded-xl md:rounded-2xl object-cover"
              alt=""
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </section>
        )}
        {/* Next two images side by side on md+, stacked on mobile */}
        {(project.image2 || project.image3) && (
          <section className="w-full flex flex-col md:flex-row gap-3 md:gap-5 aspect-auto h-auto lg:h-screen px-2 sm:px-6 md:px-10">
            {project.image2 && (
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto">
                <img
                  src={project.image2}
                  className="w-full h-full rounded-xl md:rounded-2xl object-cover"
                  alt=""
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            )}
            {project.image3 && (
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto">
                <img
                  src={project.image3}
                  className="w-full h-full rounded-xl md:rounded-2xl object-cover"
                  alt=""
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            )}
          </section>
        )}
        {/* Next two images side by side if they exist */}
        {(project.image4 || project.image5) && (
          <section className="w-full flex flex-col md:flex-row gap-3 md:gap-5 aspect-auto h-auto lg:h-screen px-2 sm:px-6 md:px-10">
            {project.image4 && (
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto">
                <img
                  src={project.image4}
                  className="w-full h-full rounded-xl md:rounded-2xl object-cover"
                  alt=""
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            )}
            {project.image5 && (
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto">
                <img
                  src={project.image5}
                  className="w-full h-full rounded-xl md:rounded-2xl object-cover"
                  alt=""
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            )}
          </section>
        )}
        {/* Repeat main image again for effect if available */}
        {project.image1 && (
          <section className="overflow-hidden w-full h-[60vh] lg:h-screen aspect-[4/3] sm:aspect-[16/7] md:aspect-[16/7] px-2 sm:px-6 md:px-10">
            <img
              src={project.image8}
              className="reveal-img w-full h-full rounded-xl md:rounded-2xl object-cover"
              alt=""
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </section>
        )}
        {/* Final two images if available */}
        {(project.image6 || project.image7) && (
          <section className="w-full flex flex-col md:flex-row gap-3 md:gap-5 aspect-auto h-[60vh] lg:h-screen px-2 sm:px-6 md:px-10">
            {project.image6 && (
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto">
                <img
                  src={project.image6}
                  className="w-full h-full rounded-xl md:rounded-2xl object-cover"
                  alt=""
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            )}
            {project.image7 && (
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto">
                <img
                  src={project.image7}
                  className="w-full h-full rounded-xl md:rounded-2xl object-cover"
                  alt=""
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            )}
          </section>
        )}
      </section>
    </div>
  );
};

export default ProjectDetails;
