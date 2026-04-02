import React from 'react'

import Navbar from '../components/HomeComp/Navbar'
import NewHero from '../components/HomeComp/NewHero'
import Reel from '../components/HomeComp/Reel'
import Text1 from '../components/HomeComp/Text1'
import BorderText from '../components/HomeComp/BorderText'
import Swiper from '../components/HomeComp/Swiper'
import Text2 from '../components/HomeComp/Text2'
import Video from '../components/HomeComp/Video'
import KnowUs from '../components/HomeComp/KnowUs'
import NewFooter from '../components/common/NewFooter'
import ParallexImg from '../components/HomeComp/ParallexImg'


const Home = () => {
  return (
    <div data-scroll-container className='bg-[#EBEAE4] overflow-x-hidden'>

       
        {/* <Navbar /> */}
        <NewHero />
        {/* <Reel /> */}
        <Text1 />
        <Text1 />
        <BorderText />
        <ParallexImg />
        <Swiper />
        <Text2 />
        <Video />
        <KnowUs />
        <NewFooter />
    </div>
  )
}

export default Home
