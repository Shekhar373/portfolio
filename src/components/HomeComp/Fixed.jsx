import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Fixed = () => {
    
  return (
    <div>
      <div className='nav relative flex justify-between lg:p-10 max-sm:p-3 text-white'>
          <div className='cursor-pointer fixed mix-blend-difference z-40'>
            <Link className=' transition-all' to="/">The Growth Accelerator</Link>

          </div>
          <div className='flex gap-3 lg:flex fixed right-72 z-40 mix-blend-difference cursor-pointer max-sm:hidden '>
            <Link className='hover:border-b-1  transition-all' to="/">Home</Link>
            <Link className='hover:border-b-1 transition-all' to="/work">Work</Link>
            <Link className='hover:border-b-1 transition-all' to="/about">About</Link>
            <Link className='hover:border-b-1 transition-all' to="/services">Services</Link>
            <Link className='hover:border-b-1 transition-all' to="/contact">Contact</Link>
          </div>
          <div className='cursor-pointer z-40 mix-blend-difference fixed right-5' >
            <Link className='hover:border-b-1 transition-all' to="/contact">Let's Talk</Link>
          </div>

        </div>
    </div>
  )
}

export default Fixed
