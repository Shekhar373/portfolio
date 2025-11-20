import React, { useRef } from 'react'
import WorkNav from '../components/WorkComp/WorkNav'
import WorkCard from '../components/WorkComp/WorkCard'
import Footer from '../components/HomeComp/Footer'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Work = () => {
     
  useGSAP(()=>{
    gsap.from(".work-text h1 span",{
      y:100,
      stagger:0.1,
      opacity:0,
      delay:0.5,
      duration: 0.5,
    })
  })
 
  return (
    <div className=''>
      <div >
        <WorkNav />
      </div>
      <div  className=' work-text border-0 overflow-hidden'>
        <h1 className='text-[14vw] pt-32 font-medium px-5'>
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>J</span>
          <span>E</span>
          <span>C</span>
          <span>T</span>
          <span>S</span>
        </h1>
      </div>
      <div>
        <WorkCard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Work
