import React from 'react'

const NewServiceCard = () => {
    return (
        <div>
            <div className='flex w-full min-h-[180vh] px-10 pt-[10vh]'>
                <div className='w-[40vw] text-white text-2xl'>
                    <h1>Capabilities</h1>
                </div>
                <div className='flex flex-col gap-[20vh]'>
                    <div className=' w-[60vw] text-2xl bg-black text-white flex gap-[10vw]'>
                        <div className='w-1/3'>
                            (01) Strategy
                        </div>
                        <div className='w-1/3'>
                            <h1>Brand Audit</h1>
                            <h1>Brand Storytelling</h1>
                            <h1>Brand Architecture</h1>
                            <h1>Brand Audit</h1>
                            <h1>Brand Audit</h1>
                            <h1>Brand Audit</h1>
                        </div>
                    </div>
                    <div className=' w-[60vw] text-2xl bg-black text-white flex gap-[10vw]'>
                        <div className='w-1/3'>
                            (02) Design
                        </div> 
                        <div className='2/3'>
                            <h1>Brand Identity</h1>
                            <h1>Art Direction</h1>
                            <h1>Product Design</h1>
                            <h1>Brand Audit</h1>
                            <h1>Motion Design</h1>
                            <h1>Brand Audit</h1>
                        </div>
                    </div>
                    <div className=' w-[60vw] text-2xl bg-black text-white flex gap-[10vw]'>
                        <div className='w-1/3'>
                            (03) Development
                        </div>
                        <div className='2/3'>
                            <h1>Brand Audit</h1>
                            <h1>Brand Storytelling</h1>
                            <h1>Brand Architecture</h1>
                            <h1>Brand Audit</h1>
                            <h1>Brand Audit</h1>
                            <h1>Brand Audit</h1>
                        </div>
                    </div>
                    <div className=' w-[60vw] text-2xl bg-black text-white flex gap-[10vw]'>
                        <div className='w-1/3'>
                            (04) Growth
                        </div>
                        <div className='2/3'>
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