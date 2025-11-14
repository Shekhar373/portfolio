import React from 'react'
import WorkNav from '../components/WorkComp/WorkNav'
import ServiceHead from '../components/ServicesComp/ServiceHead'
import ServiceCard from '../components/ServicesComp/ServiceCard'

const Services = () => {
  return (
    <div>
      <div>
        <WorkNav />

      </div>
      <div className=''>
        <ServiceHead />
        <ServiceCard />
       
      </div>
      <div className='h-[80vh]'>

      </div>
    </div>


  )
}

export default Services
