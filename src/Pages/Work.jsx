import React from 'react'
import WorkNav from '../components/WorkComp/WorkNav'
import WorkCard from '../components/WorkComp/WorkCard'
import Footer from '../components/HomeComp/Footer'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Work = () => {

  return (
    <div>
      <div >
        <WorkNav />
      </div>
      <div className=''>
        <h1 className='text-[14vw] pt-32 font-medium px-5'>PROJECTS</h1>
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
