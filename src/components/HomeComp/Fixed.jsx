import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Fullscreennav from '../common/Fullscreennav'


const Fixed = () => {
    
  return (
    <div>
      <div className='nav relative w-full font-[heading-font] text-sm flex p-5 lg:py-5 lg:px-10 text-white'>
          <div className='cursor-pointer fixed mix-blend-difference z-40 pt-3 md:pt-0 '>
            <Link className=' transition-all' to="/">NEW HUE STUDIO</Link>

          </div>
          <div className='gap-2 lg:flex fixed lg:right-10 md:right-40 z-40 mix-blend-difference cursor-pointer hidden lg:visible'>
            <Link className='border-animate' to="/">Home</Link>
            <Link className='border-animate' to="/work">Work</Link>
            <Link className='border-animate' to="/about">About</Link>
            <Link className='border-animate' to="/services">Services</Link>
            <Link className='border-animate' to="/contact">Contact</Link>
          </div>
          

          <div className='fixed right-5 z-40 lg:hidden'>
            <Fullscreennav />
          </div>

        </div>
    </div>
  )
}

export default Fixed
