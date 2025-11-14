import React from 'react'
import Loader from "../components/HomeComp/Loader"
import Navbar from '../components/HomeComp/Navbar'
import Reel from '../components/HomeComp/Reel'
import Text1 from '../components/HomeComp/Text1'
import BorderText from '../components/HomeComp/BorderText'
import Hightlight from '../components/HomeComp/Hightlight'
import Comp from '../components/HomeComp/Comp'
import Swiper from '../components/HomeComp/Swiper'
import Text2 from '../components/HomeComp/Text2'
import Video from '../components/HomeComp/Video'
import KnowUs from '../components/HomeComp/KnowUs'
import Footer from '../components/HomeComp/Footer'


const Home = () => {
  return (
    <div data-scroll-container className='bg-white overflow-x-hidden'>
        {/* <Loader /> */}
        <Navbar />
        <Reel />
        <Text1 />
        <BorderText />
        <Hightlight />
        <Comp />
        <Swiper />
        <Text2 />
        <Video />
        <KnowUs />
        <Footer />
    </div>
  )
}

export default Home
