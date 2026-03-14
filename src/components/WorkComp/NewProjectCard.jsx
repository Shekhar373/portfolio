import React, { useEffect } from 'react'
import { projects } from "../../data/projects"
import { Link } from "react-router-dom"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const NewProjectCard = () => {

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        const panels = gsap.utils.toArray(".panel")

        gsap.set(panels.slice(1), {
            clipPath: "inset(100% 0% 0% 0%)"
          })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".projects-container",
                markers: true,
                start: "top top",
                end: `+=${panels.length * 100}%`,
                scrub: 1,
                pin: true
            }
        })

        panels.forEach((panel, i) => {
            if (i === 0) return

            tl.to(panel, {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1
            })
        })
        // gsap.to(".panel img", {
        //     scale: 1.1,
        //     scrollTrigger: {
        //         trigger: ".projects-container",
        //         start: "top top",
        //         end: "bottom top",
        //         scrub: true
        //     }
        // })

    }, [])



    return (
        <div className='h-[400vh]'>
            <div className="projects-container h-screen w-full sticky top-0 overflow-hidden">

                {projects.map((project) => (

                    <div className="panel absolute inset-0">
                        <Link to={`/work/${project.slug}`} key={project.slug}>
                            <img
                                src={project.cover}
                                className="w-full h-full object-cover"
                            />

                            <h1 className="absolute bottom-20 left-20 text-white text-6xl">
                                {project.title}
                            </h1>
                        </Link>
                    </div>

                ))}

            </div>

        </div>
    )
}

export default NewProjectCard