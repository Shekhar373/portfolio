import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Fullscreennav = () => {

    useGSAP(() => {
        gsap.from(".full-elem h1 span", {
            y: 100,
            stagger: 0.05,
            duration: 0.3,
            // delay: 1,

        })
    })
    return (
        <div className='h-screen w-full bg-black  flex flex-col justify-center '>
            <div className='full-elem lg:text-[8vw] max-sm:text-7xl md:text-6xl text-gray-600 lg:leading-24 max-sm:leading-20  pl-5'>
                <h1 className='hover:text-white w-fit   border-0 overflow-hidden '>
                    <span>H</span>
                    <span>O</span>
                    <span>M</span>
                    <span>E</span>

                </h1>
                <h1 className='hover:text-white w-fit   border-0 overflow-hidden'>
                    <span>W</span>
                    <span>O</span>
                    <span>R</span>
                    <span>K</span>
                </h1>
                <h1 className='hover:text-white w-fit   border-0 overflow-hidden'>
                    <span>A</span>
                    <span>B</span>
                    <span>O</span>
                    <span>U</span>
                    <span>T</span>
                </h1>
                <h1 className='hover:text-white w-fit   border-0 overflow-hidden'>
                    <span>S</span>
                    <span>E</span>
                    <span>R</span>
                    <span>V</span>
                    <span>I</span>
                    <span>C</span>
                    <span>E</span>
                    <span>S</span>
                </h1>
                <h1 className='hover:text-white w-fit   border-0 overflow-hidden'>
                    <span>C</span>
                    <span>O</span>
                    <span>N</span>
                    <span>T</span>
                    <span>A</span>
                    <span>C</span>
                    <span>T</span>
                </h1>
            </div>
        </div>
    )
}

export default Fullscreennav

