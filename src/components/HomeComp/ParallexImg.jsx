import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const ParallexImg = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            gsap.utils.toArray(".ParaImg-Container").forEach((section) => {
                const img = section.querySelector(".ParallexImg");
                // Parallax + scale effect only on laptop and above
                gsap.fromTo(
                    img,
                    { scale: 1.06, yPercent: -20 },
                    {
                        scale: 1,
                        yPercent: 20,
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );
            });
        });

        // Cleanup matchMedia on unmount
        return () => mm.revert();
    });
    
    return (
        <div className='para-main h-[140vh] lg:h-[200vh] pt-[10vh] lg:pt-0 w-full bg-black p-5 lg:p-10'>
            <section className='ParaImg-Container relative h-[40vh] lg:h-[90vh] w-full  overflow-hidden'>
                <img className='ParallexImg absolute h-full w-full object-cover '
                    src="/images/8.webp" alt="" />
            </section>
            <div className='flex lg:flex-row flex-col gap-5 mt-5'>
                <section className='ParaImg-Container relative h-[40vh] lg:h-[90vh] lg:w-[50vw] w-full overflow-hidden'>
                    <img className='ParallexImg absolute h-full w-full object-cover '
                        src="/images/home-img.webp" alt="" />
                </section>
                <section className='ParaImg-Container overflow-hidden relative h-[40vh] lg:h-[90vh] lg:w-[50vw] w-full'>
                    <img className='ParallexImg absolute h-full w-full object-cover '
                        src="/images/home-image-2.jpg" alt="" />
                </section>
            </div>
        </div>
    )
}

export default ParallexImg