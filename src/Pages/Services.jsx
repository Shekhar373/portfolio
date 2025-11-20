import React from 'react'
import WorkNav from '../components/WorkComp/WorkNav'
import ServiceHead from '../components/ServicesComp/ServiceHead'
import ServiceCard from '../components/ServicesComp/ServiceCard'
import Footer from '../components/HomeComp/Footer'

const Services = () => {
  return (
   
      <div className='overflow-x-hidden'>
        <WorkNav />
      
        <ServiceHead />
        <ServiceCard />
        <Footer />
       
      </div>
     
  


  )
}

export default Services
