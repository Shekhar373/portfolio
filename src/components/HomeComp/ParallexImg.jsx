import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const ParallexImg = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.utils.toArray(".ParaImg-Container").forEach((section) => {

            const img = section.querySelector(".ParallexImg")
            // Parallax + scale
            gsap.fromTo(
                img,
                { scale: 1.06, yPercent: -40 },
                {
                    scale: 1,
                    yPercent: 40,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            )

        });

        gsap.to(".para-main", {
            backgroundColor: "white",
            scrollTrigger: {
                trigger: ".para-main", // typo fix: was "trigegr"
                // markers: true,
                start: "top -150%",      // "top 0%" is not a valid value, use "top top" (when .para-main's top hits viewport top)
                end: "top -200%",       // This is a rare value; if you want to animate as user scrolls past, you can use e.g. "bottom top" or adjust accordingly
                scrub: true
            }
        })
    })
    return (
        <div className='para-main h-[170vh] lg:h-[300vh] pt-[20vh] lg:pt-0 w-full bg-black p-5 lg:p-10'>
            <section className='ParaImg-Container relative h-[60vh] md:h-[90vh] w-[94.5vw] lg:w-[92.5vw]  overflow-hidden'>
                <img className='ParallexImg absolute h-full w-full object-cover '
                    src="/images/8.jpg" alt="" />
            </section>
            <div className='flex gap-5 lg:gap-10 mt-10 lg:mt-10'>
                <section className='ParaImg-Container relative h-[60vh] lg:h-[90vh] w-[45vw] overflow-hidden'>
                    <img className='ParallexImg absolute h-full w-full object-cover '
                        src="/images/1.jpg" alt="" />
                </section>
                <section className='ParaImg-Container overflow-hidden relative h-[60vh] lg:h-[90vh] w-[45vw]'>
                    <img className='ParallexImg absolute h-full w-full object-cover '
                        src="/images/6.jpg" alt="" />
                </section>
            </div>
        </div>
    )
}

export default ParallexImg