import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React, { useRef } from 'react'

const Text1 = () => {
    gsap.registerPlugin(ScrollTrigger,SplitText)

    const firsttext = useRef(null)
    
    useGSAP(()=>{
      var split = SplitText.create(".firsttext h1",{
        type:"lines"
      })

      gsap.from(split.lines,{
        y:150,
        stagger:{
            amount:0.2,
           

        },
        scrollTrigger:{
            trigger:firsttext.current,
            // markers:true,
            start:"top 50%"
        }
      })
    })
    
    return (
        <div>
            <div ref={firsttext}  className='firsttext lg:h-[60vh] sm:h-[30vh] bg-black font-light leading-tight text-white lg:p-10 max-sm:pt-10 max-sm:p-3 max-sm:text-3xl text-[4vw]    '>
                <h1 className=' border-0 overflow-clip'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We turn founders visions into remarkable </h1>
                    <h1 className='overflow-clip' >brands by combining strategy, design, and</h1>
                    <h1 className='overflow-clip'>performance marketing, all under one roof.   Explore</h1>
                    <h1 className='overflow-clip'> our services.</h1>
            </div>
            
        </div>
    )
}

export default Text1
