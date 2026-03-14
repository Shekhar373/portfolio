import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const Navbar = () => {

  gsap.registerPlugin(SplitText)
  useGSAP(() => {
    const tl = gsap.timeline()
    const split = SplitText.create(".hero-text-main h1",{
      type:"chars",
      mask:"chars"
    })

    gsap.from(split.chars,{
      y:250,
      delay:2.7,
      stagger:{
        amount:0.8,
        from:"right",
      },
      ease:"expo.out",
      duration:2
    })

    gsap.from(".hero-text",{
      y:250,
      delay:3,
      stagger:0.1,
      ease:"expo.out",
      duration:1
    })
  })
  return (
    <div className='h-screen w-full flex relative flex-col bg-black justify-between'>

      <div>

        <div data-speed="0.5" className='hero-text-main text-white  text-[23.7vw] overflow-hidden text-center leading-[20vw]'>
          <h1 className=' font-sans font-normal'>
            NEWHUE
          </h1>
          <h1 className='text-white text-3xl tracking-[16vw] -mr-[16vw] mt-10 text-center'>STUDIO</h1>
        </div>
      </div>
      <div className=' text-white hero-text text-xl w-full overflow-hidden flex justify-between p-5 md:p-10 absolute bottom-0  lg:p-10 max-sm:p-3 mt-12'>
        <h1>Design</h1>
        <h1>Branding</h1>
        <h1>Motion</h1>
        <h1>Digital</h1>
      </div>

    </div>
  )
}

export default Navbar
