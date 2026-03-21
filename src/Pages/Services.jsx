import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import NewServiceCard from '../components/ServicesComp/NewServiceCard'
import NewFooter from '../components/common/NewFooter'
import Testimonials from '../components/ServicesComp/Testimonials'


const Services = () => {

  gsap.registerPlugin(SplitText)

  useGSAP(() => {
    const split = SplitText.create(".service-header h1", {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit: ((split) => {
        return gsap.from(split.lines, {
          rotation:3,
          opacity: 0,
          delay: 0.2,
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
   
      <div className='overflow-x-hidden bg-black'>
        {/* <WorkNav /> */}
      
        {/* <ServiceHead />
        <ServiceCard />
        <NewFooter /> */}
        <div className='service-header h-[80vh] bg-black tracking-tighter text-white w-full text-[4vw] lg:text-[2.5vw] flex items-end p-5 lg:p-10 pb-[10vh] leading-[3.5vw]'>
          <h1> <span className='pl-[10vw]'>Explore</span> New Hue Studio's full range of creative services: graphic design, video editing, motion graphics, social media content, performance marketing on TikTok & Meta, content shoots, and 3D website design.</h1>

        </div>
        <NewServiceCard />
        <Testimonials />
        <NewFooter />
       
      </div>
     
  


  )
}

export default Services
