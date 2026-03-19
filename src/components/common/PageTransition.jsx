import { useRef, useEffect } from "react"
import gsap from "gsap"

const PageTransition = () => {

  const overlay = useRef()

  useEffect(() => {

    const tl = gsap.timeline()

    tl.fromTo(
      overlay.current,
      { y: "100%" },
      {
        y: "0%",
        duration: 0.6,
        ease: "power3.inOut"
      }
    ).to(overlay.current, {
      y: "-100%",
      duration: 0.6,
      ease: "power3.inOut"
    })

  }, [])

  return (
    <div
      ref={overlay}
      className="fixed top-0 left-0 h-screen w-full bg-white z-[9999]"
    />
  )
}

export default PageTransition