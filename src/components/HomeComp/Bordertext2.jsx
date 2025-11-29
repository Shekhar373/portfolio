import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React, { useRef } from 'react'

const BorderText2 = () => {
  const bottomtext = useRef(null)
  // gsap.registerPlugin(ScrollTrigger,SplitText)

 

  
  return (
    <div ref={bottomtext} className='lg:h-[30vh]  sm:h-[50vh]  w-full font-light lg:p-10 max-sm:p-3 text-black flex lg:text-2xl max-sm:text-l'>
      <div className='w-1/2 pt-10  border-t-1' >
        <h1 className='overflow-clip'>Tomorrow’s <br /> brands, today.</h1>
      </div>
      <div className='w-1/2 pt-10 font-light border-t-1 flex flex-col gap-10 max-sm:leading-snug' >
        <h1 className='overflow-clip'>
          We partner with five clients a year to deliver unmatched focus, and impact. Every detail is carefully crafted, every decision strategic, and every outcome transformative.</h1>

      </div>
    </div>
  )
}

export default BorderText2