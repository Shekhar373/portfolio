import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { Link } from 'react-router-dom'

const WorkNav = () => {

    

    useGSAP(() => {
        gsap.from(".worknav", {
            opacity: 0,
            delay: 0.3,
            duration: 0.6,

        })
    })

    return (

        <div>
            <div className='worknav flex justify-between font-medium md:p-10 lg:p-10 max-sm:p-3 text-black'>
                <div className='cursor-pointer'>
                    <Link to="/">The Growth Accelerator</Link>

                </div>
                <div className='flex gap-3 lg:flex  max-sm:hidden '>
                    <Link className='border-animate-black' to="/">Home</Link>
                    <Link className='border-animate-black' to="/work">Work</Link>
                    <Link className='border-animate-black' to="/about">About</Link>
                    <Link className='border-animate-black' to="/services">Services</Link>
                    <Link className='border-animate-black' to="/contact">Contact</Link>
                    
                </div>
                <div  className='cursor-pointer'>
                    <Link className='border-animate-black' to="/contact">Let's Talk</Link>
                </div>

            </div>
        </div>

    )
}

export default WorkNav
