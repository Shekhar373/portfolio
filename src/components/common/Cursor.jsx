import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const mouseMoveHandler = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 25,
        y: e.clientY - 25,
        duration: 0.5,
        // ease: "expo.out",
        ease:"power4.out"
      });
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className='fixed pointer-events-none z-50 h-15 w-15 rounded-full border border-zinc-500 mix-blend-difference'
      style={{left: 0, top: 0}}
    ></div>
  )
}

export default Cursor