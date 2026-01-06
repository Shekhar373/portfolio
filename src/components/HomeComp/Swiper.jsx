import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'


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
    <div ref={swiperref} className=' h-screen w-[360vw] relative flex'>
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

        <div className='h-[100vh] w-[100vw] flex    flex-col '>
            <div className='h-[50%] w-screen text-[10vw] mt-20 pl-10'>
              <h1>Projects</h1>
            </div>
            <div className='h-[50%] w-screen lg:text-6xl sm:text-2xl  px-10'>
              <h1>These are not just projects, they are stories of our clients, our work, and the impact we made. <Link className='uppercase font-medium ' to="/work">See More</Link></h1>
              
            </div>
        </div>
    </div>
  )
}

export default Swiper
