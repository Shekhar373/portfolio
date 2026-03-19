import React, { useRef } from 'react'
import NewFooter from '../components/common/NewFooter'
import NewProjectCard from '../components/WorkComp/NewProjectCard'
import WorkHeader from '../components/WorkComp/WorkHeader'


const Work = () => {
 
  return (
    <div className='bg-black text-white'>
      <WorkHeader />
      <NewProjectCard />
      <NewFooter />
    </div>
  )
}

export default Work
