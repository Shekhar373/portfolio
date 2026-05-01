import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React, { useRef } from 'react'

const WorkHeader = () => {

  gsap.registerPlugin(SplitText)

  useGSAP(() => {
    const split = SplitText.create(".project-header h1", {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit: ((split) => {
        return gsap.from(split.lines, {
          opacity: 0,
          delay: 1.5,
          yPercent: 120,
          ease: "power",
          stagger: {
            amount: 0.1
          },
        })
      }),
      onComplete: () => split.revert()
    })
  })
  return (
    <div className='project-header h-[70vh] lg:h-[90vh] w-full text-[5vw] lg:text-[2.5vw] flex items-end p-5 lg:p-10 pb-[5vh] leading-[6vw] lg:leading-[3.5vw]'>
      <h1><span className='pl-[15vw]'>Browse</span> New Hue Studio Portfolio – Branding, Design & 3D Web
      Showcasing identity design, motion graphics, video, social media creatives, and 3D web experiences that help brands stand out.</h1>
    </div>
  )
}

export default WorkHeader