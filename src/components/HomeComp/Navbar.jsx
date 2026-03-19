import React, { useRef, useLayoutEffect, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

const Navbar = () => {




  gsap.registerPlugin(ScrollTrigger)
  

  gsap.registerPlugin(SplitText)

  useGSAP(() => {
  
    const split = SplitText.create(".hero-text-main", {
      type: "chars",
      mask: "chars"
    });
    const splitt = SplitText.create(".hero-text-bottom", {
      type: "chars",
      mask: "chars"
    });
  
    const tl = gsap.timeline();
  
    tl.from(split.chars, {
      y: 350,
      delay: 2.6,
      stagger: 0.04,
      ease: "expo.out",
      duration: 2
    },"same");

    tl.from(splitt.chars, {
      y: 350,
      delay: 2.6,
      stagger: 0.04,
      ease: "expo.out",
      duration: 2
    },"same");
  
    tl.from(".hero-text", {
      y: 250,
      stagger: 0.2,
      delay:2.5,
      ease: "expo.out",
      duration: 1
    },"same");
  });

  return (
    <div className='h-screen w-full flex relative flex-col bg-black justify-between'>
      <div>
        <div
          data-speed='0.6'
          className=' text-white text-[21vw] tracking-tighter mt-[20vh] overflow-hidden text-center  leading-[15vw]'
        >
          <h1 className='hero-text-main font-[heading-font] font-normal'>
            NEWHUE
          </h1>
          <h1 className='hero-text-bottom text-white font-[heading-font] text-3xl tracking-[10vw] lg:tracking-[16vw] -mr-[10vw] lg:-mr-[16vw] mt-10 text-center'>
            STUDIO
          </h1>
        </div>
      </div>

      <div className='text-white hero-text text-xl w-full overflow-hidden flex justify-between p-5 md:p-10 absolute bottom-0 lg:p-10 max-sm:p-3 mt-12'>
        <h1>Design</h1>
        <h1>Branding</h1>
        <h1>Motion</h1>
        <h1>Digital</h1>
      </div>
    </div>
  )
}

export default Navbar