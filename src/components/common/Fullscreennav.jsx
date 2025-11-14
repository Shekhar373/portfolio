import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import NavMarque from './NavMarque'


const Fullscreennav = () => {

    const navarr = [
        "WORK",
        "ABOUT",
        "SERVICES",
        "CONTACT",
    ]

    useGSAP(() => {
        gsap.to(".nav-marque", {
            transform: "translateX(-100%)",
            duration: 25,
            repeat: -1,
            ease: "none"
        })
    })

    return (
        <div className='h-screen w-full bg-black text-white relative overflow-x-hidden flex flex-col justify-center leading-24 items-center'>
            {navarr.map((navarr, index) => {
                return <div className='flex flex-col justify-center   items-center'>
                    <div className='w-[100vw] text-center text-[8vw] font-medium border hover:opacity-0 transition-all  relative z-20 bg-black'>
                        <h1>{navarr}</h1>

                    </div>
                    <div className=' nav-marque flex gap-38 items-center text-[8vw]  absolute z-10  bg-white text-black whitespace-nowrap '>
                        <NavMarque />
                        <NavMarque />
                        <NavMarque />
                        <NavMarque />
                        <NavMarque />
                        <NavMarque />
                        <NavMarque />
                    </div>
                </div>
            })}


            <div>
                <div className='flex lg:text-4xl absolute bottom-5 right-5  lg:gap-4 max-sm:gap-4 '>
                    <a className='border-2 px-4 py-1 hover:text-[#D9FF06] rounded-[45%]' href="#">FB</a>
                    <a className='border-2 px-4 py-1 hover:text-[#D9FF06] rounded-[45%]' href="#">IG</a>
                    <a className='border-2 px-4 py-1 hover:text-[#D9FF06] rounded-[45%]' href="#">IN</a>
                    <a className='border-2 px-4 py-1 hover:text-[#D9FF06] rounded-[45%]' href="#">BE</a>
                </div>
            </div>


        </div>
    )
}

export default Fullscreennav
