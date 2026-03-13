import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Cross as Hamburger } from 'hamburger-react'
import { SplitText } from 'gsap/all'

const Fullscreennav = () => {

    const [Open, setOpen] = useState(false)

    gsap.registerPlugin(SplitText)

    const NavAnimate = ()=> {
        useGSAP(() => {
        const split = SplitText.create(".fullscreen-nav-link", {
            type: "words",
            mask: "words"
        })

        gsap.from(split.words, {
            y: -200,
            duration:1

        })
    })
    }



    return (

        <div className='md:hidden'>
            <Hamburger
                toggled={Open}
                toggle={setOpen}
                
            />
            {Open && <div className='fixed top-0 left-0 w-screen'>
                <header className='fixed right-5 top-3'>
                    <Hamburger
                        toggled={Open}
                        toggle={setOpen}

                    />
                </header>
                <div className='fullscreen-nav h-screen w-full bg-black text-white flex flex-col justify-between px-5'>
                    <div className='pt-10 text-2xl'>
                        <h1>NEWHUE STUDIO</h1>
                    </div>
                    <div className='fullscreen-nav-link text-7xl leading-18 text-gray-400'>
                        <Link className='inline-block' to="/">Home</Link> <br />
                        <Link className='inline-block' to="/work">Work</Link> <br />
                        <Link className='inline-block' to="/about">About</Link> <br />
                        <Link className='inline-block' to="/services">Services</Link><br />
                        <Link className='inline-block' to="/contact">Contact</Link>
                    </div>
                    <div className='flex gap-5 pb-10'>
                        <h1>INSTAGRAM</h1>
                        <h1>TWITTER</h1>
                    </div>
                </div>
            </div>
            }
        </div>

    )
}

export default Fullscreennav

