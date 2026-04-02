import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'

const NewHero = () => {
    const herovideoRef = useRef()
    const heroParentRef = useRef()

    gsap.registerPlugin(ScrollTrigger,SplitText)

    useGSAP(() => {

        const split = SplitText.create(".hero-text",{
            type:"chars",
            mask:"chars"
        })
        const splitt = SplitText.create(".sub-heading h1",{
            type:"chars",
            mask:"chars"
        })

        const introTl = gsap.timeline()

        introTl.from(split.chars,{
           y:300,
           duration:1,
           delay:2.85,
           ease:"expo.out"
        })

        introTl.to(".hero-text-container",{
           scale:1.23,
           yPercent:-50,
           duration:1,
           ease:"expo.inOut"
        })

        introTl.from(herovideoRef.current,{
            clipPath: "inset(0 0 100% 0)",
            duration: 1,
            ease: "expo.out",
        })

        introTl.from(splitt.chars,{
            y:-100,
            duration:1.5,
            ease:"expo.out"
        },"<")


        
            gsap.matchMedia().add("(min-width: 1024px)", () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: heroParentRef.current,
                        start: "top top",
                        end: "bottom -10%",
                        scrub: 1, // Increase scrub value to make the animation slower
                        pin: true,
                        pinSpacing: true,
                        // markers: true,
                    }
                });

                // text animation
                tl.from([".visual-text", ".design-text"], {
                    xPercent: (i) => (i === 0 ? -400 : 530),
                }, 0);

                // video animation (sync with same timeline)
                tl.from(herovideoRef.current, {
                    scale: 0.35,
                    yPercent: -150,
                }, 0);
            });
        }
    );

    return (
        <div className='h-[200vh]  w-full bg-[#EBEAE4]'>
            <div
                className='hero-parent h-[80vh] w-full relative font-[tall-font] '
                ref={heroParentRef}
            >
                <div className='h-screen absolute flex justify-center items-center uppercase pt-[5vh] w-full text-center'>
                    <div className='hero-text-container'>
                    <h1 className='hero-text text-[18vw] leading-[25vw] w-full'>
                        New Hue Studio
                    </h1>
                    </div>
                </div>
                <div className='h-[40vh] w-full'></div>
                <div className='sub-heading h-[40vh] w-full flex pt-[20vh] gap-2 text-[4vw] justify-center items-center'>
                    <h1 className='visual-text'>A VISUAL</h1>
                    <h1 className='design-text'>DESIGN </h1>
                </div>
            </div>
            <div className='h-[100vh] w-full relative flex justify-center items-center'>
                <video
                    ref={herovideoRef}
                    autoPlay loop muted
                    className=' object-cover h-[100vh] w-full '
                    src="https://www.rejouice.com/static/reel-short.mp4">
                </video>
                {/* <h1 className='absolute text-white text-[6vw] border-b-4'>SHOW REEL</h1> */}
            </div>
        </div>
    )
}

export default NewHero