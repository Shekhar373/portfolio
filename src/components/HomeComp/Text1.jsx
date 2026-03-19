import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React, { useRef } from 'react'

const Text1 = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText)

  const firsttext = useRef(null)

  // useGSAP(() => {
  //   var split = SplitText.create(".firsttext h1", {
  //     type: "chars",
  //     mask: "chars"
  //   })

  //   gsap.from(split.chars, {
  //     opacity: 0,
  //     yPercent: 120,
  //     ease: "power",
  //     stagger: {
  //       amount: 0.1
  //     },

  //     scrollTrigger: {
  //       trigger: firsttext.current,
  //       // markers:true,
  //       start: "top 50%",
  //      toggleActions: "play none none reverse"
  //     }
  //   })
  // })

  return (

    <div ref={firsttext} className='text-2xl md:text-[2.5vw] h-[40vh] lg:h-[60vh] w-full bg-black text-white flex items-center p-5 lg:p-10'>
      <h1> New Hue Studio is a full-service creative agency offering graphic design, video editing, motion graphics, social media marketing, performance advertising, and 3D websites. We mix creativity to build brands that stand out</h1>
    </div>


  )
}

export default Text1
