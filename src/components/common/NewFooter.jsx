import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  return (
    <div className="min-h-[60vh] md:h-[90vh] w-full relative flex justify-center items-center mt-[10vh] md:mt-[20vh]">
      <footer className="min-h-[48vh] md:h-[80vh] w-[98%] sm:w-[95%] rounded-xl bg-[#090909] text-[#EBEAE4] text-2xl sm:text-4xl md:text-5xl sticky bottom-0 flex flex-col justify-between py-6 md:py-0">
        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row h-full md:h-[60%] w-full">
          {/* Left Side */}
          <div className="w-full md:w-1/2 px-5 py-5 md:p-10 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-semibold">
              DO IT ONCE, DO IT RIGHT
            </h1>
            <div className="text-base w-fit sm:text-lg lg:text-xl mt-6 md:mt-10">
              <h3>
                New Business <br />
               <a className="border-animate" href="mailto:newhuestudio@gmail.com">newhuestudio25@gmail.com</a>
              </h3>
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl mt-6 md:mt-10 border-animate w-fit">
              <a href="tel:+\919718698074">+91 97186 98074</a>
            </h3>
          </div>
          {/* Right Side */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row">
            {/* Menu Links */}
            <div className="flex flex-row md:flex-col w-full md:w-1/2 text-base sm:text-lg lg:text-xl gap-3 md:gap-0 px-5 py-4 md:px-10 md:py-30 items-center md:items-start justify-center md:justify-normal">
              <Link to="/">
                <h3 className="border-animate inline-block w-fit cursor-pointer">
                  Home
                </h3>
              </Link>
              <Link to='/work'>
                <h3 className="border-animate inline-block w-fit cursor-pointer">
                  Work
                </h3>
              </Link>
              <Link to='/services'>
                <h3 className="border-animate inline-block w-fit cursor-pointer">
                  Services
                </h3>
              </Link>
              <Link to='/contact'>
                <h3 className="border-animate inline-block w-fit cursor-pointer">
                  Contact
                </h3>
              </Link>
            </div>
            {/* Socials */}
            <div className="flex gap-2 sm:gap-3 py-4 md:py-12 justify-center w-full md:w-1/2 items-center ">
              <a href="https://www.instagram.com/newhuestudio.in/">
                <img
                  className=" h-8 w-8 hover:scale-120 transition-all"
                  src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%226%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%222%22%3E%3C%2Frect%3E%0A%20%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%225%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%222%22%3E%3C%2Fcircle%3E%0A%20%20%3Ccircle%20cx%3D%2217%22%20cy%3D%227%22%20r%3D%221.5%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fcircle%3E%0A%3C%2Fsvg%3E"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className=" h-7 w-7 hover:scale-120 transition-all"
                  src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20512%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M279.14%20288l14.22-92.66h-88.91V127.69c0-25.35%2012.42-50.06%2052.24-50.06H293V6.26S259.43%200%20225.36%200C141.09%200%2089.09%2054.42%2089.09%20153.12v42.22H0V288h89.09v224h107.36V288z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
                  alt=""
                />
              </a>
              <a href="https://x.com/newhuestudio">
                <img
                  className="h-8 w-8 hover:scale-120 transition-all"
                  src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M389.2%2048h70.6L312.6%20215.6%20480%20464H347.4L241.6%20318.6%20110.6%20464H40l157.8-181.2L32%2048h136.6l96.2%20132.2L389.2%2048z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
                  alt=""
                />
              </a>
              <a href="https://www.linkedin.com/in/new-hue-studio-8017b43b6">
                <img
                  className="h-8 w-8 hover:scale-120 transition-all"
                  src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20448%20512%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M100.28%20448H7.4V148.9h92.88zm-46.44-340C24.1%20108%200%2083.9%200%2053.84A53.84%2053.84%200%200%201%2053.84%200C83.9%200%20108%2024.1%20108%2053.84c0%2030.06-24.1%2054.16-54.16%2054.16zM447.9%20448h-92.4V302.4c0-34.7-.7-79.3-48.3-79.3c-48.3%200-55.7%2037.7-55.7%2076.7V448h-92.4V148.9h88.7v40.8h1.3c12.4-23.5%2042.7-48.3%2087.8-48.3c93.9%200%20111.2%2061.8%20111.2%20142.3V448z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Title */}
        <div className="h-[16vh] md:h-[40%] px-5 w-full flex  justify-center items-end ">
          <h1 className="text-[17vw] whitespace-nowrap mb-2 sm:mb-3 md:mb-5 text-center">
            NEW HUE
          </h1>
        </div>
      </footer>
    </div>
  );
}
