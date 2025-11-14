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
            <div className='worknav flex justify-between font-medium lg:p-10 max-sm:p-3 text-black'>
                <div className='cursor-pointer'>
                    <Link className='hover:border-b-1 transition-all' to="/">The Growth Accelerator</Link>

                </div>
                <div className='flex gap-3 lg:flex  max-sm:hidden '>
                    <Link className='hover:border-b-1 transition-all' to="/">Home</Link>
                    <Link className='hover:border-b-1 transition-all' to="/work">Work</Link>
                    <Link className='hover:border-b-1 transition-all' to="/about">About</Link>
                    <Link className='hover:border-b-1 transition-all' to="/services">Services</Link>
                    <Link className='hover:border-b-1 transition-all' to="/contact">Contact</Link>
                    
                </div>
                <div  className='cursor-pointer'>
                    <Link className='hover:border-b-1 transition-all' to="/contact">Let's Talk</Link>
                </div>

            </div>
        </div>

    )
}

export default WorkNav
