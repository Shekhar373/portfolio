import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Text1 = () => {
    gsap.registerPlugin(ScrollTrigger)
    
    useGSAP(()=> {
        gsap.from(".hometext h1",{
            y: 120,
            opacity: 0,
            
            stagger:0.1,
            scrollTrigger:{
               trigger: ".hometext",
            //    markers: true,
               start: "top 70%",
            //    end: "bottom 70%",
               
            }
        })
    })
    return (
        <div>
            <div  className=' hometext lg:h-[60vh] sm:h-[30vh] bg-black font-light leading-tight text-white lg:p-10 max-sm:pt-10 max-sm:p-3 max-sm:text-3xl text-[4vw]    '>
                <h1 className=' border-0 overflow-hidden'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We turn founders visions into remarkable </h1>
                    <h1 >brands by combining strategy, design, and</h1>
                    <h1 >performance marketing, all under one roof.   Explore</h1>
                    <h1 > our services.</h1>
            </div>
            
        </div>
    )
}

export default Text1
