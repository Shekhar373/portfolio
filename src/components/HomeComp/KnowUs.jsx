import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React, { useRef } from 'react'

const KnowUs = () => {

  const horiscroll = useRef(null)
  gsap.registerPlugin(ScrollTrigger, SplitText)
  useGSAP(() => {

    const split = SplitText.create(".horizontal-text", {
      type: "chars, words"
    })

    const scrollTween = gsap.to(horiscroll.current, {
      // transform: "translateX(-150%)",
      xPercent: -150,

      scrollTrigger: {
        trigger: horiscroll.current,
        // markers: true,
        start: "top 0%",
        end: "top -150%",
       
        pin: true,
        scrub: 3
      }
    })

    split.chars.forEach((char) => {
        gsap.from(char, {
          yPercent: "random(-200, 200)",
          rotation: "random(-50, 50)",
          opacity:0,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: char,
            containerAnimation: scrollTween,
            // markers:true,
           start: "left 150%",
           end: "left 90%",
            scrub: 1
          }
        });
      });
  })
  return (



    <div ref={horiscroll} className=' horizontal-text h-screen tracking-[2.5vw] font-bold bg-white pl-[250vw]  whitespace-nowrap  flex justify-center items-center text-black text-[14vw]'>
      <h1>SO ARE YOU READY TO STAND OUT?</h1>
    </div>

  )
}

export default KnowUs
