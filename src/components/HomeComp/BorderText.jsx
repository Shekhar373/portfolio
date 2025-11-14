import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const BorderText = () => {

  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=> {
    gsap.from("#secondtext",{
            y: 120,
            opacity: 0,
           
            scrollTrigger:{
               trigger: ".textmain",
              //  markers: true,
               start: "top 80%",
            }
    })
  })
  return (
    <div className=' textmain lg:h-[90vh] md:h-[40vh] bg-black max-sm:h-[60vh] w-full font-light lg:p-10 max-sm:p-3 text-white flex lg:text-3xl max-sm:text-2xl'>
      <div id='secondtext' className=' w-1/2 pt-10  border-t-1' >
        <h1 className=' '>Tomorrow’s <br /> brands, today.</h1>
      </div>
      <div id='secondtext' className='w-1/2 pt-10 font-light border-t-1 flex flex-col gap-10 max-sm:leading-snug max-sm:text-2xl' >
        <h1 className=' '>Since 2013, we have been recognized globally for helping founders build market-defining brands.</h1>
        <h1 className=''>We partner with five clients a year to give each one the focus and care they deserve.</h1>
      </div>
    </div>
  )
}

export default BorderText
