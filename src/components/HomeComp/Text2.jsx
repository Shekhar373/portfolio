import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React from 'react'

const Text2 = () => {

  gsap.registerPlugin(SplitText)

  useGSAP(() => {
    let split = SplitText.create(".text-2 h1", {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit: (split) => {
        return gsap.from(split.lines, {
          // opacity: 0,
          // yPercent: 120,
          clipPath: "inset(0% 0% 100% 0%)",
          stagger: {
            amount: 0.5,
          },
          ease: "power2.out",

          scrollTrigger: {
            trigger: ".text-2",
            // markers: true,
            start: "top 30%",
            toggleActions: "play none none reverse",
          },
        });
      },
      onComplete: () => split.revert(),
    });
  });

  return (
    <div className='text-2 lg:h-screen max-sm:h-[60vh] pt-[10vh] w-full bg-[#EBEAE4] text-black'>
      <div className='text-3xl lg:text-6xl p-5 lg:p-10'>
        <h1>Our approach.</h1>
      </div>
      <div className='text-md lg:text-2xl px-5 lg:px-10'>
        <h1 className='border-t-2 pt-10'>We approach every project with a balance of creativity and strategy. By understanding the brand at its core, we create design solutions that are thoughtful, cohesive, and built to make a lasting impression.</h1>
      </div>
    </div>
  )
}

export default Text2
