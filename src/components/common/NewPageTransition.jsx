import React, { useRef, useEffect } from "react"
import gsap from "gsap"
import { useLocation } from "react-router-dom"


const NewPageTransition = (props) => {
  const panelsRef = useRef([])
  const pageRef = useRef(null)
  const NUM_PANELS = 20
  const currentPath = useLocation()

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(panelsRef.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      stagger: 0.03,
      duration: 0.3,
      ease: "power3.inOut"
    })

    tl.to(panelsRef.current, {
      clipPath: "inset(0% 0% 0% 100%)",
      stagger: 0.03,
      duration: 0.3,
      ease: "power3.inOut"
    })

    gsap.from(pageRef.current,{
      opacity:0,
      delay:1
    })
  }, [currentPath])

  return (
    <div>
      <div className="fixed top-0 left-0 z-50 pointer-events-none w-full h-screen flex">
        {[...Array(NUM_PANELS)].map((_, i) => (
          <div
            key={i}
            ref={el => panelsRef.current[i] = el}
            className="page-transition-panel h-full"
            style={{
              width: `calc(${100 / NUM_PANELS}% + 1px)`,
              marginLeft: "-1px",
              background: "#090909",
              clipPath: "inset(0% 100% 0% 0%)"
            }}
          />
        ))}
      </div>
      <div ref={pageRef}>
        {props.children}
      </div>
    </div>
  )
}

export default NewPageTransition