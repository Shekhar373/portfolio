import React from 'react'

const ContactHead = () => {
    return (
        <div className='lg:mt-[20vh] lg:h-[70vh] md:h-[60vh] h-[40vh] flex justify-center lg:justify-between max-md:items-center px-10 text-white bg-black'>

            <div className='text-center hidden lg:flex flex-col font-medium justify-end'>
                <h1>Onscreen or in an office. <br />
                    Here. There. <br />
                    Anywhere.</h1>
            </div>
            <div className='text-[14vw] md:text-[12vw] lg:text-[9vw] max-md:pt-[10vh] text-center leading-[14vw] md:leading-[11vw] lg:leading-[8vw]'>
                <h1>TO TALK <br /> ABOUT  <br /> YOUR <br /> PROJECT</h1>
            </div>
            <div className='text-center hidden lg:flex font-medium flex-col justify-end'>
               <h1>Onscreen or in an office. <br />
                    Here. There. <br />
                    Anywhere.</h1>
            </div>

        </div>
    )
}

export default ContactHead