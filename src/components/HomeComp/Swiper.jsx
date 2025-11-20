import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Swiper = () => {
  gsap.registerPlugin(ScrollTrigger)

  const swiperref = useRef(null)

  useGSAP(()=> {
    gsap.to(swiperref.current,{
       transform: "translateX(-72.5%)",
       scrollTrigger:{
         trigger:swiperref.current,
         start:"top 0%",
         end:"top -150%",
         pin:true,
         scrub:2
       }
    })
  })
  return (
    <div ref={swiperref} className='h-screen w-[360vw] relative flex'>
        <div className='relative '>
          <img
          className='h-[70vh] w-[100vw] object-cover'
           src="https://www.dzinr.in/new-col/2.png" alt="" />

           <div className=' absolute h-[30vh] w-[100vw] bg-blue-950'>

           </div>

        </div>
        <div>
          <img className='h-[70vh] w-[80vw] object-cover'
           src="https://www.dzinr.in/new-col/carsdaily-v2.png" alt="" />
            <div className=' absolute h-[30vh] w-[80vw] bg-pink-950'>

           </div>
        </div>
        <div>

          <img className='h-[70vh] w-[80vw] object-cover'
           src="https://www.dzinr.in/new-col/4.png" alt="" />
            <div className=' absolute h-[30vh] w-[80vw] bg-red-950'>

           </div>
        </div>

        <div className='h-[100vh] w-[100vw] flex justify-center bg-amber-50 items-center text-[11vw] '>
            <h1>PROJECTS</h1>
        </div>
    </div>
  )
}

export default Swiper
