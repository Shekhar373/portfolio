import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React, { useRef } from 'react'

const BorderText2 = () => {
  const bottomtext = useRef(null)
  gsap.registerPlugin(ScrollTrigger,SplitText)

  useGSAP(()=>{
    let spl = SplitText.create(".bordertext-2 h1",{
      type:"lines",
      mask:"lines",
      autoSplit:true
    })

    gsap.from(spl.lines,{
      y: 150,
      stagger: {
        amount:0.5,
      },
      scrollTrigger: {
        trigger: bottomtext.current,
        // markers: true,
        start: "top 60%"
      }
    })
  })
 

  
  return (
    <div ref={bottomtext} className='  lg:h-[30vh]  sm:h-[50vh]  w-full font-light lg:p-10 max-sm:p-3 text-black flex lg:text-2xl max-sm:text-l'>
      <div className='bordertext-2 w-1/2 pt-10  border-t-1' >
        <h1 >Tomorrow’s <br /> brands, today.</h1>
      </div>
      <div className='bordertext-2 w-1/2 pt-10 font-light border-t-1 flex flex-col gap-10 max-sm:leading-snug' >
        <h1 >
          We partner with five clients a year to deliver unmatched focus, and impact. Every detail is carefully crafted, every decision strategic, and every outcome transformative.</h1>

      </div>
    </div>
  )
}

export default BorderText2