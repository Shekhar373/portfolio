import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const Navbar = () => {

  gsap.registerPlugin(SplitText)
  useGSAP(() => {
    const tl = gsap.timeline()


    // tl.from(".rejoice h1", {
    //   duration: 0.3,
    //   y: 200,
    //   opacity: 0,
    //   stagger: 0.1,
    //   delay: 3.5
    // })
    tl.from(".navfoot", {
      y: -30,
      opacity: 0,
      duration: 0.5

    })
  })
  return (
    <div className='h-[89vh] flex relative flex-col bg-black justify-between'>

      <div>

        <div data-speed="0.5" className=' rejouice text-[23.7vw] overflow-hidden text-center leading-[20vw]'>
          <h1 className='font-sans font-normal text-white'>
            NEWHUE
          </h1>
        </div>
      </div>
      <div className=' text-white text-xl w-full flex justify-around p-5 md:p-10 absolute bottom-0  lg:p-10 max-sm:p-3 mt-12'>
        <h2>Design</h2>
        <h2>Branding</h2>
        <h2>Motion</h2>
        <h2>Digital</h2>
      </div>

    </div>
  )
}

export default Navbar
