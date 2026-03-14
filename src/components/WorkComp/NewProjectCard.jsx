import React, { useEffect } from 'react'
import { projects } from "../../data/projects"
import { Link } from "react-router-dom"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const NewProjectCard = () => {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
      gsap.utils.toArray(".work-card-main").forEach((workcard) => {
        gsap.from(workcard, {
            scaleY: 0.2,
            transformOrigin: "top",
            scrollTrigger: {
              trigger: workcard,
              start: "top 70%",
              end: "bottom 10%",
              scrub: true
            }
          })
      })
    }, [])

    return (
        <div className='grid grid-cols-2 grid-rows-2 gap-5 p-10'>

            {projects.slice(0, 4).map((project) => (
                <Link to={`/work/${project.slug}`} key={project.slug}>
                    <div className='work-card-main'>
                        <img src={project.cover} alt={project.title} />
                    </div>

                </Link>
            ))}
        </div>
    )
}

export default NewProjectCard