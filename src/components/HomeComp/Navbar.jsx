import React from 'react'
import Fixed from './Fixed'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {
  const tl = gsap.timeline()
  useGSAP(() => {
    tl.from(".rejouice h1 span", {

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

        <div className=' rejouice text-[23vw] border-0 overflow-hidden whitespace-nowrap absolute top-20 text-white text-center lg:-mt-28 '>
          <h1 className='font-sans '>
            <span>R</span>
            <span>E</span>
            <span>J</span>
            <span>O</span>
            <span>U</span>
            <span>I</span>
            <span>C</span>
            <span>E</span>
          </h1>
        </div>
      </div>
      <div className=' text-white flex gap-20 absolute bottom-0  lg:p-10 max-sm:p-3 mt-12'>
        <h3 className='navfoot '>Strategy,Design, <br />Performence</h3>
        <h3 className='navfoot'>Global Creative <br />And Creative Agency</h3>
      </div>

    </div>
  )
}

export default Navbar
