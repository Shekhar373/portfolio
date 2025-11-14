import React from 'react'
import WorkNav from '../components/WorkComp/WorkNav'
import WorkCard from '../components/WorkComp/WorkCard'
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
       {/* <div className='-lg:mt-20  lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero mb-42 h-[300px] flex gap-2 flex-col '>
            <WorkCard image1={elem.image1} image2={elem.image2} />
          </div>
        })} */}

      {/* </div > */}

      <div>
        <WorkCard />
      </div>
      
      
    </div>
  )
}

export default Work
