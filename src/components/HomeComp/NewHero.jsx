import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const NewHero = () => {

    gsap.registerPlugin(SplitText)

    useGSAP(()=>{
        const split = SplitText.create(".split",{
            type:"words",
            mask:"words"
        })

        gsap.from(split.words,{
            y:250,
            stagger:0.1,
            duration:1,
            ease: "power4.out",
            delay:3.6
        })
    })
  return (
    <div className='h-screen w-full flex justify-center items-end bg-black text-white'>
        <div className='split text-[18vw] text-center leading-[15vw]'>
            <h1>NEW HUE STUDIO</h1>
        </div>
    </div>
  )
}

export default NewHero