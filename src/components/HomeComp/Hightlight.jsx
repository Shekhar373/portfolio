import React, { useRef } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'



const Hightlight = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        gsap.to(".left-move img", {
            x: -80,
            scrollTrigger: {
                trigger: ".move-parent",
                //    markers:true,
                start: "top 30%",

                scrub: 1
            }
        })
        gsap.to(".left-move video", {
            x: -100,
            scrollTrigger: {
                trigger: ".move-parent",
                //    markers:true,
                start: "top 60%",

                scrub: 1
            }
        })
        gsap.to(".right-move img", {
            x: 100,
            scrollTrigger: {
                trigger: ".move-parent",
                //    markers:true,
                start: "top 60%",

                scrub: 1
            }
        })
        gsap.to(".right-move video", {
            x: 100,
            scrollTrigger: {
                trigger: ".move-parent",
                //    markers:true,
                start: "top 30%",

                scrub: 1
            }
        })
    })


    return (
        <div className='move-parent max-sm:h-screen lg:h-[150vh] relative w-full bg-black'>
            <div className=' flex h-[130vh] '>
                <div className='h-screen absolute w-full flex justify-center items-center'>
                    <img className='lg:h-[80vh] h-[50vh] md:h-[70vh] lg:w-[30vw] md:w-[40vh] w-[50vw] object-cover '
                        src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/440x752/filters:quality(90)" alt="" />
                </div>

                <div className=' left-move h-full w-1/2  absolute'>
                    <video muted loop autoPlay className='h-[27vh] w-[33vw] absolute lg:top-56 top-48 lg:left-48 left-20'
                        src="/video/video2.mp4" alt="" />

                    <img className='lg:h-[30vh] h-[20vh] lg:w-[25vw] w-[35vw] object-fit absolute lg:bottom-96 bottom-20  lg:left-40 left-20'
                        src="/images/8.jpg" alt="" />
                </div>
                <div className=' right-move h-full w-1/2  absolute right-0'>
                    <img className='lg:h-[30vh] h-[20vh] lg:w-[25vw] w-[35vw] object-cover absolute lg:top-20 top-40 lg:left-32 right-20'
                        src="/images/1.jpg" alt="" />

                    <video muted loop autoPlay playsInline className='h-[27vh] w-[33vw] absolute lg:bottom-96 top-96 lg:left-20 right-15'
                        src="/video/video1.mp4"  />
                </div>
            </div>

        </div>
    )
}

export default Hightlight
