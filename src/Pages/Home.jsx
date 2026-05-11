import React from "react";
import NewHero from "../components/HomeComp/NewHero";
import Text1 from "../components/HomeComp/Text1";
import Text2 from "../components/HomeComp/Text2";
import Video from "../components/HomeComp/Video";
import KnowUs from "../components/HomeComp/KnowUs";
import NewFooter from "../components/common/NewFooter";
import ParallexImg from "../components/HomeComp/ParallexImg";
import HomeServices from "../components/HomeComp/HomeServices";
import PinProject from "../components/HomeComp/PinProject";

const Home = () => {
  return (
    <div className="bg-[#EBEAE4] overflow-x-hidden">
      <NewHero />
      <div className="bg-black">
        <Text1 />
        <ParallexImg />
        <HomeServices />
      </div>
      <PinProject />
      <Text2 />
      <Video />
      <KnowUs />
      <NewFooter />
    </div>
  );
};

export default Home;
