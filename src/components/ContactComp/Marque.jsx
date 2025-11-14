import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

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
            <div  className=' move lg:h-[25vh] max-sm:h-[12vh]  font-medium bg-[#D9FF06] flex gap-32'>
                <div className='marque  bg-[#D9FF06] text-black gap-5 flex items-center '>
                    <h1 className='text-6xl'>SHEKHAR24102004@GMAIL.COM</h1>
                    <img
                        className='lg:h-[17vh] max-sm:h-[10vh] bg-[#D9FF06]'
                        src="https://static.thenounproject.com/png/1053750-200.png" alt=""></img>
                </div>
                <div className='marque   bg-[#D9FF06] text-black gap-5 flex items-center'>
                    <h1 className='text-6xl'>SHEKHAR24102004@GMAIL.COM</h1>
                    <img
                        className='lg:h-[17vh] max-sm:h-[10vh] bg-[#D9FF06]'
                        src="https://static.thenounproject.com/png/1053750-200.png" alt=""></img>
                </div>
                <div className='marque  bg-[#D9FF06] text-black gap-5 flex items-center'>
                    <h1 className='text-6xl'>SHEKHAR24102004@GMAIL.COM</h1>
                    <img
                        className='lg:h-[17vh] max-sm:h-[10vh] bg-[#D9FF06]'
                        src="https://static.thenounproject.com/png/1053750-200.png" alt=""></img>
                </div>
                <div className=' marque  bg-[#D9FF06] text-black gap-5 flex items-center'>
                    <h1 className='text-6xl'>SHEKHAR24102004@GMAIL.COM</h1>
                    <img
                        className='lg:h-[17vh] max-sm:h-[10vh] bg-[#D9FF06]'
                        src="https://static.thenounproject.com/png/1053750-200.png" alt=""></img>
                </div>
                <div className=' marque  bg-[#D9FF06] text-black gap-5 flex items-center'>
                    <h1 className='text-6xl'>SHEKHAR24102004@GMAIL.COM</h1>
                    <img
                        className='lg:h-[17vh] max-sm:h-[10vh] bg-[#D9FF06]'
                        src="https://static.thenounproject.com/png/1053750-200.png" alt=""></img>
                </div>
            </div>

        </div>
    )
}

export default Marque
