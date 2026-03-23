import React, { useRef, useEffect } from "react"
import gsap from "gsap"

const NUM_PANELS = 20

const NewPageTransition = ({ onMid, onComplete }) => {
    const panelsRef = useRef([])

    useEffect(() => {
        const tl = gsap.timeline({
          onComplete
        })
    
        // IN (cover screen)
        tl.to(panelsRef.current, {
          clipPath: "inset(0% 0% 0% 0%)",
          stagger: 0.03,
          duration: 0.5,
          ease: "power3.inOut"
        })
    
        // 🔥 SWITCH PAGE EXACTLY HERE
        tl.call(() => {
          onMid && onMid()
        })
    
        // OUT (reveal new page)
        tl.to(panelsRef.current, {
          clipPath: "inset(0% 0% 0% 100%)",
          stagger:0.03,
          duration: 0.45,
          ease: "power3.inOut"
        })
      }, [])

    return (
        <div className="fixed top-0 left-0 z-50 pointer-events-none w-full h-screen flex">
            {[...Array(NUM_PANELS)].map((_, i) => (
                <div
                    key={i}
                    ref={el => panelsRef.current[i] = el}
                    className="page-transition-panel h-full"
                    style={{
                        width: `calc(${100 / NUM_PANELS}% + 1px)`,
                        marginLeft: "-1px",
                        background: "#ECFAE5",
                        clipPath: "inset(0% 100% 0% 0%)"
                    }}
                />
            ))}
        </div>
    )
}

export default NewPageTransition