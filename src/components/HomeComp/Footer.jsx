import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {

        gsap.from(".foot-nav", {
            x: 50,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".foot-main",
                // markers: true,
                start: "top 50%"
            }
        })

        gsap.from(".foot-mid", {
            x: 50,
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: ".foot-main",
                // markers: true,
                start: "top 30%",


            }
        })

        gsap.from(".rejoice-foot", {
            x: 50,
            duration: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: ".foot-main",

                start: "top 10%",


            }
        })



    })
    return (
        <div className=' foot-main h-screen w-full text-white bg-black relative overflow-hidden'>
            <div className=' foot-nav h-[18%]  flex justify-between items-center lg:p-10 max-sm:p-3'>
                <div className='lg:text-[3.5vw] max-sm:text-xl'>
                    <h1>Do it once. Do it right.</h1>
                </div>
                <div className='flex gap-3 lg:flex max-sm:hidden '>
                    <Link className='hover:border-b-1 transition-all' to="/">Home</Link>
                    <Link className='hover:border-b-1 transition-all' to="/work">Work</Link>
                    <Link className='hover:border-b-1 transition-all' to="/about">About</Link>
                    <Link className='hover:border-b-1 transition-all' to="/services">Services</Link>
                    <Link className='hover:border-b-1 transition-all' to="/contact">Contact</Link>
                </div>
                <div>
                    <h2>Instagram</h2>
                    <h2>Twitter</h2>
                </div>
            </div>
            <div className=' foot-mid mt-7 lg:p-10 max-sm:p-3 flex flex-col gap-9'>
                <div>
                    <h2>New Business</h2>
                    <h2>hello@rejoice.com</h2>
                </div>
                <div>
                    <input
                        className='border-b-2 lg:w-[20%] max-sm:w-[90%] p-2'
                        type="text" placeholder='Email' />
                </div>
            </div>
            <div className=' rejoice-foot text-[22vw] text-center ml-5 text-white absolute bottom-0 lg:mt-16 '>
                <h1 className='font-sans'>REJOUICE</h1>
            </div>

        </div>
    )
}

export default Footer
