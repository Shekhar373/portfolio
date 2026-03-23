import React from 'react'

const NewServiceCard = () => {
    return (
        <div>
            <div className='flex-col lg:flex-row w-full gap-10 md:gap-0 h-screen lg:h-[180vh] px-5 md:px-10 md:pt-[10vh]'>
                <div className='w-full md:w-[40vw] text-white text-2xl'>
                    <h1>Capabilities</h1>
                </div>
                <div className='flex flex-col gap-[10vh] md:gap-[20vh] pt-[10vh] md:pt-0'>
                    <div className=' w-full md:w-[60vw] text-sm md:text-2xl bg-black text-white flex gap-[5vw] md:gap-[10vw]'>
                        <div className='w-1/3 md:w-1/2'>
                            (01) Strategy
                        </div>
                        <div className='w-2/3 md:w-1/2'>
                            <h1>Brand Audit</h1>
                            <h1>Brand Storytelling</h1>
                            <h1>Brand Architecture</h1>
                            <h1>Brand Audit</h1>
                            <h1>Brand Audit</h1>
                            <h1>Brand Audit</h1>
                        </div>
                    </div>
                    <div className=' w-full md:w-[60vw] text-sm md:text-2xl bg-black text-white flex gap-[5vw] md:gap-[10vw]'>
                        <div className='w-1/3 md:w-1/2'>
                            (02) Design
                        </div> 
                        <div className='w-2/3 md:w-1/2'>
                            <h1>Brand Identity</h1>
                            <h1>Art Direction</h1>
                            <h1>Product Design</h1>
                            <h1>Brand Audit</h1>
                            <h1>Motion Design</h1>
                            <h1>Brand Audit</h1>
                        </div>
                    </div>
                    <div className=' w-full md:w-[60vw] text-sm md:text-2xl bg-black text-white flex gap-[5vw] md:gap-[10vw]'>
                        <div className='w-1/3 md:w-1/2'>
                            (03) Development
                        </div>
                        <div className='w-2/3 md:w-1/2'>
                            <h1>Brand Audit</h1>
                            <h1>Brand Storytelling</h1>
                            <h1>Brand Architecture</h1>
                            <h1>Brand Audit</h1>
                            <h1>Brand Audit</h1>
                            <h1>Brand Audit</h1>
                        </div>
                    </div>
                    <div className=' w-full md:w-[60vw] text-sm md:text-2xl bg-black text-white flex gap-[5vw] md:gap-[10vw]'>
                        <div className='w-1/3  md:w-1/2'>
                            (04) Growth
                        </div>
                        <div className='w-2/3 md:w-1/2'>
                            <h1>Brand Audit</h1>
                            <h1>Brand Storytelling</h1>
                            <h1>Brand Architecture</h1>
                            <h1>Brand Audit</h1>
                            <h1>Brand Audit</h1>
                            <h1>Brand Audit</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewServiceCard