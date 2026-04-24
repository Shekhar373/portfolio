import React from "react";
import NewHero from "../components/HomeComp/NewHero";
import Text1 from "../components/HomeComp/Text1";
import Swiper from "../components/HomeComp/Swiper";
import Text2 from "../components/HomeComp/Text2";
import Video from "../components/HomeComp/Video";
import KnowUs from "../components/HomeComp/KnowUs";
import NewFooter from "../components/common/NewFooter";
import ParallexImg from "../components/HomeComp/ParallexImg";
import HomeServices from "../components/HomeComp/HomeServices";

const Home = () => {
  return (
    <div className="bg-[#EBEAE4] overflow-x-hidden">
      <NewHero />
      <div className="bg-black">
      <Text1 />
      <ParallexImg />
      <HomeServices />
      </div>
      <Swiper />
      <Text2 />
      <Video />
      <KnowUs />
      <NewFooter />
    </div>
  );
};

export default Home;
