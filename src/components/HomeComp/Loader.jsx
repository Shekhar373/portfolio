import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Loader = () => {
    // const loader = useRef()
    const tl = gsap.timeline()
    useGSAP(()=> {
        tl.from(".loader h3",{
            x: 50,
            opacity: 0,
            duration:1,
            stagger:0.2
        })
        tl.to(".loader h3",{
            x: -40,
            opacity: 0,
            duration:1,
            stagger:0.2
        })
        tl.to(".loader",{
            //  opacity: 0,
             duration:0.7,
             ease: "power2.out",
             y: -700,
             display:"none",
                            
         })
    

    })
  return (
    <div  className=' absolute overflow-hidden z-50 loader h-screen w-full bg-black text-white flex justify-center items-center gap-2 text-3xl font-medium'>
        <h3>Tomorrow's</h3>
        <h3>Brand,</h3>
        <h3>Today</h3>
    </div>
  )
}

export default Loader
