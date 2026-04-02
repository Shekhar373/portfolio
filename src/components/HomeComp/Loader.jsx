import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Loader = () => {
    // const loader = useRef()
    const tl = gsap.timeline()
    useGSAP(() => {
        tl.from(".loader h3", {
            x: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2
        })
        tl.to(".loader h3", {
            x: -40,
            opacity: 0,
            duration: 1,
            stagger: 0.2
        })
        tl.to(".loader", {
            //  opacity: 0,
            yPercent:-100,
            duration: 1,
            ease: "power4.out",
            display: "none",

        })


    })
    return (
        <div className=' fixed z-50 loader h-screen w-full bg-[#090909] text-[#EBEAE4] flex justify-center items-center gap-2 text-2xl md:text-3xl font-medium font-[heading-font]'>
            <h3>Think</h3>
            <h3>Beyond</h3>
            <h3>Odinary</h3>
        </div>
    )
}

export default Loader
