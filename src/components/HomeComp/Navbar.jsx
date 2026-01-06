import React from 'react'
import Fixed from './Fixed'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const Navbar = () => {
  const tl = gsap.timeline()
  gsap.registerPlugin(SplitText)
  useGSAP(() => {



    tl.from(".rejoice h1", {

      duration: 0.3,
      y: 200,
      opacity: 0,
      stagger: 0.1,
      delay: 2.5
    })
    tl.from(".navfoot", {
      y: -30,
      opacity: 0,
      duration: 0.5

    })
  })
  return (
    <div className='h-[89vh] flex relative flex-col bg-black justify-between'>
      <Fixed />
      <div>

        <div data-speed="0.7" className=' rejouice text-[23.7vw] overflow-hidden whitespace-nowrap absolute flex justify-center top-10  lg:-mt-28 '>
          <h1 className='font-sans bg-linear-to-b from-gray-300 to-gray-900 bg-clip-text text-transparent '>
            NEWHUE
          </h1>
        </div>
      </div>
      <div className=' text-white flex gap-20 md:p-10 absolute bottom-0  lg:p-10 max-sm:p-3 mt-12'>
        <h3 className='navfoot '>Strategy,Design, <br />Performence</h3>
        <h3 className='navfoot'>Global Creative <br />And Creative Agency</h3>
      </div>

    </div>
  )
}

export default Navbar
