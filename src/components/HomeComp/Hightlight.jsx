import React, { useRef } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'



const Hightlight = () => {
  gsap.registerPlugin(ScrollTrigger)
      useGSAP(()=>{
        gsap.to(".left-move img",{
            x:-80,
            scrollTrigger:{
               trigger:".move-parent",
            //    markers:true,
               start:"top 30%",
        
               scrub:1
            }
        })
        gsap.to(".left-move video",{
            x:-100,
            scrollTrigger:{
               trigger:".move-parent",
            //    markers:true,
               start:"top 60%",
        
               scrub:1
            }
        })
        gsap.to(".right-move img",{
            x:100,
            scrollTrigger:{
               trigger:".move-parent",
            //    markers:true,
               start:"top 60%",
        
               scrub:1
            }
        })
        gsap.to(".right-move video",{
            x:100,
            scrollTrigger:{
               trigger:".move-parent",
            //    markers:true,
               start:"top 30%",
        
               scrub:1
            }
        })
      })


    return (
        <div className='move-parent max-sm:h-screen lg:h-[150vh] relative w-full bg-black'>
            <div className=' flex h-[130vh] '>
                <div className='h-screen absolute w-full flex justify-center items-center'>
                    <img className='lg:h-[80vh] max-sm:h-[50vh] lg:w-[30vw] max-sm:w-[50vw] object-cover '
                        src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/440x752/filters:quality(90)" alt="" />
                </div>

                <div className=' left-move h-full w-1/2  absolute'>
                    <video muted loop autoPlay className='h-[27vh] w-[33vw] absolute lg:top-56 max-sm:top-48 lg:left-48 max-sm:left-20'
                        src="https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2BbT5bqstJ98kk6_REJOUICE-PORTFOLIO-LOOP-PROJECTS.mp4" alt="" />

                    <img className='lg:h-[30vh] max-sm:h-[10vh] lg:w-[25vw] max-sm:w-[35vw] object-fit absolute bottom-60  lg:left-40 max-sm:left-20'
                        src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" alt="" />
                </div>
                <div className=' right-move h-full w-1/2  absolute right-0'>
                    <img className='lg:h-[30vh] max-sm:h-[10vh] lg:w-[25vw] max-sm:w-[35vw] object-cover absolute max-sm:top-40 lg:left-32 max-sm:right-20'
                        src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/700x994/filters:quality(90)" alt="" />

                    <video muted loop autoPlay className='h-[27vh] w-[33vw] absolute lg:bottom-96 max-sm:top-96 lg:left-20 max-sm:right-15'
                        src="https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2BbT5bqstJ98kk6_REJOUICE-PORTFOLIO-LOOP-PROJECTS.mp4" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Hightlight
