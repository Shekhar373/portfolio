import React from 'react'

const HomeServices = () => {

    const service = [
        {
           heading:"Logo Design",
           svg:"",
           text:"We make logos that feel right. Not just good-looking but meaningful, memorable and built to last for your brand."
    },
        {
           heading:"Brand Identity Development",
           svg:"",
           text:"A brand is more than a logo. We help you show up the same way everywhere - Online, offline and everything between."
    },
        {
           heading:"Packaging Design ",
           svg:"",
           text:"Good packaging tells a story before anyone reads a word. We design packs that stand out, feel great and connect."
    },
        {
           heading:"Website Design & Development",
           svg:"",
           text:"Your website should work hard and look good. We design sites that are easy to use and built to grow with you."
    },
]

  return (
    <div className='h-[200vh] flex text-white justify-center bg-black items-center p-10 gap-5 w-full'>
       {service.map((card)=>{
        return <div className='h-[60vh] w-[25vw] flex flex-col justify-between p-5 rounded-3xl bg-[#101010] border-1 border-zinc-700'>
           <img className='h-[20vh] w-[10vw] bg-zinc-900' src="" alt="" />
           <h1 className='text-2xl'>{card.heading}</h1>
           <h3 className='text-sm text-zinc-500'>{card.text}</h3>
        </div>
       })}
    </div>
  )
}

export default HomeServices