import React from 'react'
import BorderText2 from './Bordertext2'


const Text2 = () => {
  return (
    <div className='lg:h-screen max-sm:h-[70vh] w-full bg-white text-black'>
      <div className='lg:text-[3vw] sm:text-2xl lg:p-8 max-sm:p-3 font-light '>
        <h1>Our approach.</h1>
      </div>
      <div >
        <BorderText2 />
        <BorderText2 />
      </div>
    </div>
  )
}

export default Text2
