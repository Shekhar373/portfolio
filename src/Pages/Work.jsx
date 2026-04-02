import React, { useRef } from 'react'
import NewFooter from '../components/common/NewFooter'
import NewProjectCard from '../components/WorkComp/NewProjectCard'
import WorkHeader from '../components/WorkComp/WorkHeader'


const Work = () => {
 
  return (
    <div className='bg-[#EBEAE4] text-[#090909]'>
      <WorkHeader />
      <NewProjectCard />
      <NewFooter />
    </div>
  )
}

export default Work
