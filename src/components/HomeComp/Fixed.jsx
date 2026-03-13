import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Fullscreennav from '../common/Fullscreennav'


const Fixed = () => {
    
  return (
    <div>
      <div className='nav relative flex justify-between p-5 lg:p-10 max-sm:p-3 md:p-10 text-white'>
          <div className='cursor-pointer fixed mix-blend-difference z-40 '>
            <Link className=' transition-all' to="/">NEW HUE STUDIO</Link>

          </div>
          <div className='md:flex gap-3 lg:flex fixed lg:right-72 md:right-40 z-40 mix-blend-difference cursor-pointer hidden sm:hidden'>
            <Link className='border-animate' to="/">Home</Link>
            <Link className='border-animate' to="/work">Work</Link>
            <Link className='border-animate' to="/about">About</Link>
            <Link className='border-animate' to="/services">Services</Link>
            <Link className='border-animate' to="/contact">Contact</Link>
          </div>
          <div className='cursor-pointer z-40 mix-blend-difference fixed right-5 hidden md:visible' >
            <Link className='border-animate' to="/contact">Let's Talk</Link>
          </div>

          <div className='fixed right-5 z-40'>
            <Fullscreennav />
          </div>

        </div>
    </div>
  )
}

export default Fixed
