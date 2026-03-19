import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useState, useRef } from "react"
import { Link } from "react-router-dom"
import { Cross as Hamburger } from "hamburger-react"
import { SplitText } from "gsap/all"

gsap.registerPlugin(SplitText)

const Fullscreennav = () => {

  const [open, setOpen] = useState(false)

  const container = useRef()
  const nav = useRef()
  const tl = useRef()

  useGSAP(() => {

    const split = SplitText.create(".fullscreen-nav-link a", {
      type: "words",
      mask: "words"
    })

    tl.current = gsap.timeline({ paused: true })

    tl.current
      .to(nav.current, {
        autoAlpha: 1,
        duration: 0.3
      })
      .from(split.words, {
        y: -200,
        duration: 1,
        stagger: 0.08,
        ease: "power4.out"
      })

  }, { scope: container })


  const toggleMenu = () => {

    const newState = !open
    setOpen(newState)

    if (!tl.current) return

    newState ? tl.current.play() : tl.current.reverse()
  }

  // Function to handle link click - reverse the timeline if open
  const handleLinkClick = () => {
    if (tl.current && open) {
      tl.current.reverse()
      setOpen(false)
    }
  }

  return (

    <div ref={container} className="md:hidden">

      <Hamburger
        toggled={open}
        toggle={toggleMenu}
      />

      {/* Menu stays mounted */}
      <div
        ref={nav}
        className="fullnav fixed top-0 left-0 w-screen h-screen bg-white text-black flex flex-col justify-between py-0 px-5"
        style={{ visibility: "hidden", opacity: 0 }}
      >

        <header className="fixed right-5 top-3">
          <Hamburger
            toggled={open}
            toggle={toggleMenu}
          />
        </header>

        <div className="pt-10 text-2xl">
          <h1>NEWHUE STUDIO</h1>
        </div>

        <div className="fullscreen-nav-link text-7xl leading-18">
          <Link className="inline-block" to="/" onClick={handleLinkClick}>Home</Link><br />
          <Link className="inline-block" to="/work" onClick={handleLinkClick}>Work</Link><br />
          <Link className="inline-block" to="/about" onClick={handleLinkClick}>About</Link><br />
          <Link className="inline-block" to="/services" onClick={handleLinkClick}>Services</Link><br />
          <Link className="inline-block" to="/contact" onClick={handleLinkClick}>Contact</Link>
        </div>

        <div className="flex gap-5 pb-10">
          <h1>INSTAGRAM</h1>
          <h1>TWITTER</h1>
        </div>

      </div>

    </div>
  )
}

export default Fullscreennav