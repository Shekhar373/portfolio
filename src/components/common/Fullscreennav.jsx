import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const Fullscreennav = () => {
  const [open, setOpen] = useState(false);

  const container = useRef();
  const nav = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      const split = SplitText.create(".fullscreen-nav-link a", {
        type: "words",
        mask: "words",
      });

      tl.current = gsap.timeline({ paused: true });

      tl.current
        .to(nav.current, {
          autoAlpha: 1,
          duration: 0.3,
        })
        .from(split.words, {
          y: -100,
          stagger: 0.05,
          duration: 0.7,
          ease: "expo.Out",
        });
    },
    { scope: container },
  );

  const toggleMenu = () => {
    const newState = !open;
    setOpen(newState);

    if (!tl.current) return;

    newState ? tl.current.play() : tl.current.reverse();
  };

  // Function to handle link click - reverse the timeline if open
  const handleLinkClick = () => {
    if (tl.current && open) {
      tl.current.reverse();
      setOpen(false);
    }
  };

  return (
    <div ref={container} className="lg:hidden">
      <Hamburger toggled={open} toggle={toggleMenu} />

      {/* Menu stays mounted */}
      <div
        ref={nav}
        className="fullnav fixed top-0 left-0 w-screen h-[90vh] bg-[#3D271A] text-[#D7CBBE] flex flex-col justify-between py-0 px-5"
        style={{ visibility: "hidden", opacity: 0 }}
      >
        <header className="fixed right-5 top-1">
          <Hamburger toggled={open} toggle={toggleMenu} />
        </header>

        <div className="pt-5 font-bold text-md md:text-2xl">
          <h1>NEW HUE STUDIO</h1>
        </div>

        <div className="fullscreen-nav-link text-5xl sm:text-6xl md:text-8xl leading-[16vw] md:leading-[9vw]">
          <Link
            className="inline-block border-t w-full"
            to="/"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <br />
          <Link
            className="inline-block border-t w-full"
            to="/work"
            onClick={handleLinkClick}
          >
            Work
          </Link>
          <br />
          <Link
            className="inline-block border-t w-full"
            to="/about"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <br />
          <Link
            className="inline-block border-t w-full"
            to="/services"
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <br />
          <Link
            className="inline-block border-y w-full"
            to="/contact"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>

        <div className="flex gap-4 py-5 w-full items-center ">
          <a href="#">
            <img
              className=" h-10 w-10"
              src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%226%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%222%22%3E%3C%2Frect%3E%0A%20%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%225%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%222%22%3E%3C%2Fcircle%3E%0A%20%20%3Ccircle%20cx%3D%2217%22%20cy%3D%227%22%20r%3D%221.5%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fcircle%3E%0A%3C%2Fsvg%3E"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="h-10 w-10 "
              src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M389.2%2048h70.6L312.6%20215.6%20480%20464H347.4L241.6%20318.6%20110.6%20464H40l157.8-181.2L32%2048h136.6l96.2%20132.2L389.2%2048z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="h-10 w-10 "
              src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20448%20512%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M100.28%20448H7.4V148.9h92.88zm-46.44-340C24.1%20108%200%2083.9%200%2053.84A53.84%2053.84%200%200%201%2053.84%200C83.9%200%20108%2024.1%20108%2053.84c0%2030.06-24.1%2054.16-54.16%2054.16zM447.9%20448h-92.4V302.4c0-34.7-.7-79.3-48.3-79.3c-48.3%200-55.7%2037.7-55.7%2076.7V448h-92.4V148.9h88.7v40.8h1.3c12.4-23.5%2042.7-48.3%2087.8-48.3c93.9%200%20111.2%2061.8%20111.2%20142.3V448z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className=" h-10 w-10 "
              src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20512%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M279.14%20288l14.22-92.66h-88.91V127.69c0-25.35%2012.42-50.06%2052.24-50.06H293V6.26S259.43%200%20225.36%200C141.09%200%2089.09%2054.42%2089.09%20153.12v42.22H0V288h89.09v224h107.36V288z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fullscreennav;
