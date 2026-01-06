import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const ServiceHead = () => {

  const servicevideoref = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.from(".service h1 span", {
      y: 200,
      opacity: 0,
      stagger: 0.05,

    })

    gsap.to(servicevideoref.current,{
      scale:1.14,
      scrollTrigger:{
        trigger:servicevideoref.current,
        // markers:true,
        start:"top 50%",
        end:"top -20%",
        scrub:1
      }

    })
  })


  return (
    <div>
      <div className=' service lg:text-[10vw] max-sm:text-[15vw] md:text-[13vw] md:p-10 border-0 overflow-hidden font-medium lg:px-10 max-sm:px-3'>
        <h1>
          <span>S</span>
          <span>E</span>
          <span>R</span>
          <span>V</span>
          <span>I</span>
          <span>C</span>
          <span>E</span>
          <span>S</span>
        </h1>
      </div>
      <div className=' service-video h-[100vh]  w-screen flex items-center justify-center '>
        <video ref={servicevideoref}
          className='h-[80%] w-[85vw] object-cover r'
          autoPlay loop muted src="https://www.dzinr.in/video/dzinr-Old.mp4"></video>
      </div>
    </div>
  )
}

export default ServiceHead
