import React from 'react'
import { useParams } from "react-router-dom"
import { projects } from "../../data/projects"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const ProjectDetails = () => {

    const container = useRef()
    gsap.registerPlugin(ScrollTrigger)

    const { slug } = useParams()

    const project = projects.find(p => p.slug === slug)

    if (!project) return <h1>Project not found</h1>



    useEffect(() => {

        const ctx = gsap.context(() => {

            // HERO TITLE
            gsap.from(".hero-title", {
                y: 120,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            })

            // PROJECT INFO
            gsap.from(".project-info", {
                y: 60,
                opacity: 0,
                delay: 0.4,
                duration: 1,
                stagger: 0.1
            })

            // DESCRIPTION
            gsap.from(".description", {
                scrollTrigger: {
                    trigger: ".description",
                    start: "top 80%"
                },
                y: 80,
                opacity: 0,
                duration: 1
            })

            // IMAGE REVEAL
            gsap.utils.toArray(".reveal-img").forEach((img) => {
                gsap.from(img, {
                    scrollTrigger: {
                        trigger: img,
                        start: "top 85%"
                    },
                    clipPath: "inset(0 0 100% 0)",
                    duration: 1.4,
                    ease: "power4.out"
                })
            })

            // PARALLAX
            gsap.utils.toArray(".parallax").forEach((img) => {
                gsap.to(img, {
                    yPercent: 50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img,
                        scrub: true
                    }
                })
            })

        }, container)

        return () => ctx.revert()

    }, [])
    return (
        <div ref={container} className="bg-black text-white">

            {/* HERO */}
            <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">

                <img
                    src={project.cover}
                    className="absolute w-full h-full object-cover parallax"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative h-full flex flex-col justify-end px-6 md:px-16 pb-16">

                    <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-semibold mb-8">
                        La Vella Restaurant
                    </h1>

                    <div className="flex gap-12 text-xs md:text-sm uppercase tracking-widest">

                        <div className="project-info">
                            <p className="opacity-50">Client</p>
                            <p>La Vella</p>
                        </div>

                        <div className="project-info">
                            <p className="opacity-50">Year</p>
                            <p>2025</p>
                        </div>

                        <div className="project-info">
                            <p className="opacity-50">Services</p>
                            <p>Branding / Web Design</p>
                        </div>

                    </div>
                </div>

            </section>


            {/* DESCRIPTION */}
            <section className="max-w-5xl mx-auto py-20 px-6 md:px-12">

                <p className="description text-xl md:text-3xl leading-relaxed font-light">
                    La Vella is a premium Italian restaurant located in Milan. We crafted
                    a visual identity and digital experience that captures the elegance
                    and authenticity of Italian cuisine.
                </p>

            </section>


            {/* FULL IMAGE */}
            <section className="overflow-hidden">

                <img
                    src="https://images.unsplash.com/photo-1679746556827-a4722297a613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsdWJ8ZW58MHx8MHx8fDA%3D"
                    className="reveal-img w-full h-[70vh] md:h-[90vh] object-cover"
                />

            </section>


            {/* GRID */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-16">

                <img
                    src="https://plus.unsplash.com/premium_photo-1708589338373-d53b81eb6092?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsdWJ8ZW58MHx8MHx8fDA%3D"
                    className="reveal-img w-full h-[60vh] object-cover"
                />

                <img
                    src="https://images.unsplash.com/photo-1626553202550-992f4f500d4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsdWJ8ZW58MHx8MHx8fDA%3D"
                    className="reveal-img w-full h-[60vh] object-cover"
                />

                <img
                    src="https://images.unsplash.com/photo-1556035511-3168381ea4d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsdWJ8ZW58MHx8MHx8fDA%3D"
                    className="reveal-img w-full h-[70vh] object-cover md:col-span-2"
                />

            </section>

        </div>
    )
}

export default ProjectDetails