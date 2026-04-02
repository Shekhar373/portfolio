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

        // Only enable this animation on screens >= 1024px using gsap.matchMedia
        gsap.matchMedia().add("(min-width: 1024px)", () => {
            gsap.to(".para-main", {
                backgroundColor: "#EBEAE4",
                scrollTrigger: {
                    trigger: ".para-main",
                    // markers: true,
                    start: "top -170%",
                    end: "top -200%",
                    scrub: true
                }
            });
        });
    })
    return (
        <div className='para-main h-[170vh] lg:h-[300vh] pt-[20vh] lg:pt-0 w-full bg-black p-5 lg:p-10'>
            <section className='ParaImg-Container relative h-[40vh] lg:h-[90vh] w-full  overflow-hidden'>
                <img className='ParallexImg absolute h-full w-full object-cover '
                    src="/images/8.jpg" alt="" />
            </section>
            <div className='flex lg:flex-row flex-col gap-5 lg:gap-10 mt-10 lg:mt-10'>
                <section className='ParaImg-Container relative h-[40vh] lg:h-[90vh] lg:w-[50vw] w-full overflow-hidden'>
                    <img className='ParallexImg absolute h-full w-full object-cover '
                        src="/images/1.jpg" alt="" />
                </section>
                <section className='ParaImg-Container overflow-hidden relative h-[40vh] lg:h-[90vh] lg:w-[50vw] w-full'>
                    <img className='ParallexImg absolute h-full w-full object-cover '
                        src="/images/6.jpg" alt="" />
                </section>
            </div>
        </div>
    )
}

export default ParallexImg