import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'


const Video = () => {
  const scale = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.to(scale.current,{
      scale: 1.3,
      scrollTrigger: {
         trigger: scale.current,
        //  markers: true,
         scrub:1,
         start: "top 90%",
        //  end: "top 90%"
      }

    })
  })
  return (
    <div className=' lg:h-[110vh] max-sm:h-[40vh] w-full bg-white flex justify-center items-center'>
      <video ref={scale} autoPlay loop muted
        className='lg:h-[80vh] max-sm:h-[40vh] w-[80vw]'
        src="https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2BbT5bqstJ98kk6_REJOUICE-PORTFOLIO-LOOP-PROJECTS.mp4"></video>
    </div>
  )
}

export default Video
