import React from "react";
import "./marque.css";

const companies = [
  "https://www.dzinr.in/client/logo/superyou.svg",
  "https://www.dzinr.in/client/logo/superyou.svg",
  "https://www.dzinr.in/client/logo/superyou.svg",
  "https://www.dzinr.in/client/logo/superyou.svg",
  "https://www.dzinr.in/client/logo/superyou.svg",
];

const Marquee = () => {
  return (
    <div className="marquee-wrapper h-[60vh]">
      <div className="marquee">
        {[...companies, ...companies].map((company, index) => (
          <div className="marquee-item h-[20vh] w-[20vw] flex justify-center items-center rounded-sm" key={index}>
            <img src={company} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;