import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const KnowUs = () => {

  const horiscroll = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=> {
      gsap.to(horiscroll.current,{
        transform: "translateX(-150%)",
        
        scrollTrigger: {
          trigger: horiscroll.current,
          // markers: true,
          start: "top 0%",
          end: "top -150%",
          pin: true,
          scrub:3
        }
       
      })
  })
  return (
  

    
    <div ref={horiscroll} className='h-screen tracking-[2.5vw] font-bold bg-white pl-[250vw]  whitespace-nowrap  flex justify-center items-center text-black text-[14vw]'>
      <h1>SO ARE YOU READY TO STAND OUT?</h1>
    </div>
   
  )
}

export default KnowUs
