import React from 'react'

const Follow = () => {
  return (
    <div className='lg:h-[60vh] max-sm:h-[30vh] text-white flex flex-col items-center '>
      <div className='lg:text-4xl max-sm:text-2xl md:text-4xl tracking-widest lg:mt-20 md:mt-20 '>
        <h1>FOLLOW US</h1>
      </div>
      <div className='flex lg:text-8xl max-sm:text-4xl md:text-6xl mt-10 lg:gap-12 max-sm:gap-4 md:gap-10 '>
        <a className='border-2 px-4 py-1 hover:text-[#D9FF06] rounded-[45%]' href="#">FB</a>
        <a className='border-2 px-4 py-1 hover:text-[#D9FF06] rounded-[45%]' href="#">IG</a>
        <a className='border-2 px-4 py-1 hover:text-[#D9FF06] rounded-[45%]' href="#">IN</a>
        <a className='border-2 px-4 py-1 hover:text-[#D9FF06] rounded-[45%]' href="#">X</a>
      </div>
    </div>
  )
} 

export default Follow
