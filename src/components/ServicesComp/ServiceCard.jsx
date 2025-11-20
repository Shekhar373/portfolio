import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect } from 'react'

const ServiceCard = () => {

    const arr = [
        "MOTION GRAPHICS",
        "GRAPHIC DESIGNING",
        "VIDEO EDITING",
        "WEB DESIGNING",
        "WEB DEVELOPMENT"
    ]

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.utils.toArray(".service-card").forEach(card => {
            gsap.to(card, {
                scale: 0.7,
                opacity: 0,
                scrollTrigger: {
                    trigger: card,
                    // markers: true,
                    start: "top 0",
                    end: "bottom 0",
                    scrub: 1
                }
            })
        })
    })




    return (

        <>

            {arr.map((arr, index) => {

                return <div id={index} className='service-card sticky top-0 bg-white '>
                    <div className=' h-screen w-full  '>
                        <div className='lg:h-[10%] max-sm:h-[5%] w-full border-b-2 '>

                        </div>
                        <div className='lg:h-[20%] max-sm:h-[10%] flex justify-center  lg:mb-[10vh] items-center   tracking-tighter font-medium'>
                            <h3 className=''>01</h3>
                            <h1 className='text-[10vw]'>{arr}</h1>
                        </div>
                        <div className='lg:h-[60%] max-sm:h-[55%] w-full lg:flex  '>
                            <div className='h-full lg:w-1/2 max-sm:w-full  px-10'>
                                <h1 className='lg:text-2xl max-sm:text-xl font-medium border-b-2 pb-5 leading-tight'>To understand, you have to grasp. That's why our process begins with a personalized discovery phase, where we delve deeply into your situation. We discuss goals and challenges, identify opportunities, lay the strategic foundation for our joint project – and set out with sound answers toward a better solution.</h1>
                                <div className='flex font-medium text-xl pt-7'>
                                    <div className='h-full w-1/2 leading-tight'>
                                        <h1>Research & Insights</h1>
                                        <h1>Digital Product Strategy</h1>
                                        <h1>Brand Architecture</h1>
                                        <h1>Brand Story</h1>
                                    </div>
                                    <div className='h-full w-1/2 leading-tight '>
                                        <h1>Brand Strategy & Consulting</h1>
                                        <h1>Customer Journey Mapping</h1>
                                        <h1>Brand Positioning</h1>
                                        <h1>Naming</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='h-full lg:w-1/2 max-sm:w-full '>
                                <div className='lg:pl-16 lg:pt-2 max-sm:ml-[5vw] max-sm:mt-12 '>
                                    <img
                                        className='lg:h-[50%] lg:w-[42vw] max-sm:h[90%] max-sm:w-[90%] object-cover'
                                        src="https://cdn.sanity.io/images/y7n60qgt/production/74fc7330a6ff90ade9ebb434088fbd6b16b7b602-1140x642.jpg?w=800&fm=webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}

        </>
    )
}

export default ServiceCard
