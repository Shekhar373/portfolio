import React, { useRef } from 'react'
import Image from './Image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hightlight = () => {
    const image = useRef(null)
    const video = useRef(null)
    
    

    return (
        <div className='flex flex-col gap-3 bg-black'>
            <div className='lg:h-[110vh] max-sm:h-[40vh] w-full flex flex-col justify-center items-center'>
                <div className='text-white flex  w-full px-10 mb-14 justify-between items-center  '>
                    <h1>Hightlight</h1>
                    <h1>See the work</h1>
                </div>
                <div  className='h-[90vh] w-[95vw] flex justify-center items-center relative  object-cover'>
                    <img 
                        className='relative   transition-all z-20' src="https://images.prismic.io/rejouice-2024/Z1r5Y5bqstJ98aaF_rivian.jpg?auto=format,compress&w=2418&h=1390&fm=avif" alt="" />
                    <video ref={video} autoPlay loop muted
                        className='h-[50vh] w-[40vw] hover:z-30 transition-all absolute z-10'
                        src="https://www.rejouice.com/static/reel-short.mp4"></video>
                </div>
            </div>
            <div className='lg:h-[130vh] max-sm:h-[50vh] flex gap-7 m-8  bg-black'>
                <Image />
                <Image />
            </div>
        </div>
    )
}

export default Hightlight
