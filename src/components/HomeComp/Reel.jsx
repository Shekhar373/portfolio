import React from 'react'

const Reel = () => {
  return (
    <div  className='h-[100vh] w-full relative flex justify-center items-center'>
      <video  autoPlay loop muted
      className=' object-cover h-[100vh] w-full '
      src="https://www.rejouice.com/static/reel-short.mp4">
      </video>
       <h1 className='absolute text-white text-[6vw] border-b-4'>SHOW REEL</h1>
       
    </div>
  )
}

export default Reel
