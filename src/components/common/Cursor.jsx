import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const mouseMoveHandler = (e) => {
        gsap.to(cursorRef.current, {
          x: e.clientX - 25,
          y: e.clientY - 25,
          duration: 1,
          // ease: "expo.out",
          ease: "power4.out",
        });
      };

      window.addEventListener("mousemove", mouseMoveHandler);

      return () => {
        window.removeEventListener("mousemove", mouseMoveHandler);
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed max-md:hidden pointer-events-none z-50 h-15 w-15 rounded-full border border-zinc-500"
      style={{ left: 0, top: 0 }}
    ></div>
  );
};

export default Cursor;
