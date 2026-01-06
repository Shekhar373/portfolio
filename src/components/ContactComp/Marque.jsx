import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import MarqueComp from './MarqueComp'

const Marque = () => {

    // useGSAP(()=> {
    //     gsap.to(".move",{
    //         transform:"translateX(-100%)",
    //         duration:30,
    //         ease:"none",
    //         repeat: -1
    //     })
    // })

    useGSAP(()=> {
       window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
    gsap.to(".marque",{
        transform:"translateX(-100%)",
        duration: 3,
        repeat: -1,
        ease: "none"
    })

    gsap.to(".marque img", {
        rotate: 180
    })
    }
    else {
         gsap.to(".marque",{
        transform:"translateX(0%)",
        duration: 3,
        repeat: -1,
        ease: "none"
    })
     gsap.to(".marque img", {
        rotate: 0
    })
    }
})
    })
    return (
        <div className='lg:h-[40vh] max-sm:h-[30vh] text-white flex items-center'>
            <div  className=' move lg:h-[25vh] max-sm:h-[8vh] md:h-[15vh] items-center  font-medium bg-[#D9FF06] flex lg:gap-46 md:gap-28'>
                <div className='marque'> <MarqueComp /></div>
                <div className='marque'> <MarqueComp /></div>
                <div className='marque'> <MarqueComp /></div>
                <div className='marque'> <MarqueComp /></div>
                <div className='marque'> <MarqueComp /></div>
                <div className='marque'> <MarqueComp /></div>
               
                
                
            </div>

        </div>
    )
}

export default Marque
