import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Loader = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
        const tl = gsap.timeline()

        tl.from(".image",{
          y:30,
          stagger:{
            amount:0.1
          },
          opacity:0,
          duration:1
        })

        tl.to(".side-image",{
            clipPath: "inset(0 100% 0 0)",
            stagger:{
                amount:0.5,
                from:"right"
            },
            ease: "expo.inOut",
        })

        tl.to(".main-image",{
            scale:2.7,
            duration:1,
            ease:"expo.inOut"
        })
        
        tl.to(".loader",{
            yPercent:-100,
            ease:"expo.inOut",
            duration:1
        })
        
    })
  return (
    <div>
        <div className='loader h-screen w-full bg-white absolute  z-50'>
      <div className='flex items-center justify-center gap-25 h-full'>
        <img className='side-image image h-[20vh] w-[10vw] object-cover' src="https://images.unsplash.com/photo-1589085278607-c12dc87ddb1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyYXBoaWMlMjBhcnR8ZW58MHx8MHx8fDA%3D" alt="" />
        <img className='side-image image h-[20vh] w-[10vw] object-cover' src="https://images.unsplash.com/photo-1612487528505-d2338264c821?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhcGhpYyUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <div className='h-[20vh] w-[10vw]'></div>
        <img className='side-image image h-[20vh] w-[10vw] object-cover' src="https://images.unsplash.com/photo-1529432337323-223e988a90fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhcGhpYyUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <img className='side-image image h-[20vh] w-[10vw] object-cover' src="https://images.unsplash.com/photo-1550532422-378e93ec379c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhcGhpYyUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>
    </div>
    <img 
      className="main-image image h-[20vh] w-[10vw] absolute z-999 object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      src="https://aladesign.cz/wp-content/uploads/2025/05/preloader3-scaled.jpg"
      alt=""
    />
    </div>
  )
}

export default Loader