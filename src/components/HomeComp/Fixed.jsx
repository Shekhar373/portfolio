import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { Link } from 'react-router-dom'


const Fixed = () => {
    useGSAP(()=> {
        gsap.from(".nav",{
            opacity: 0,
            delay:1,
            duration:0.6,
            
        })
    })
  return (
    <div>
      <div className='nav relative flex justify-between lg:p-10 max-sm:p-3 text-white'>
          <div className='cursor-pointer z-50'>
            <Link className='hover:border-b-1 transition-all' to="/">The Growth Accelerator</Link>

          </div>
          <div className='flex gap-3 lg:flex relative z-50 cursor-pointer max-sm:hidden '>
            <Link className='hover:border-b-1 transition-all' to="/">Home</Link>
            <Link className='hover:border-b-1 transition-all' to="/work">Work</Link>
            <Link className='hover:border-b-1 transition-all' to="/about">About</Link>
            <Link className='hover:border-b-1 transition-all' to="/services">Services</Link>
            <Link className='hover:border-b-1 transition-all' to="/contact">Contact</Link>
          </div>
          <div className='cursor-pointer z-50' >
            <Link className='hover:border-b-1 transition-all' to="/contact">Let's Talk</Link>
          </div>

        </div>
    </div>
  )
}

export default Fixed
