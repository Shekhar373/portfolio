import React, { useEffect } from 'react'
import { projects } from "../../data/projects"
import { Link } from "react-router-dom"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

const NewProjectCard = () => {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        gsap.utils.toArray(".workcard-main").forEach((section) => {

            const img = section.querySelector(".workcard-img")
            const clip = section.querySelector(".clip-wrapper")
            // Parallax + scale
            gsap.fromTo(
                img,
                { scale: 1, yPercent: -30 },
                {
                    scale: 1,
                    yPercent: 30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            )

        })

    }, [])


    return (
        <div className='flex flex-col'>
            {projects.map((project) => (
                <Link to={`/work/${project.slug}`} key={project.slug}>
                    <div className="h-screen w-full workcard-main overflow-hidden relative">

                        <div className="clip-wrapper h-full w-full">
                            <img
                                className="workcard-img h-[120%] w-full object-cover"
                                src={project.cover}
                                alt=""
                            />
                        </div>
                        <h1 data-speed='0.3' className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold pointer-events-none z-10 text-center drop-shadow-lg">
                            {project.title}
                        </h1>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default NewProjectCard