import React, { useEffect } from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Work from './Pages/Work'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Loader from './components/HomeComp/Loader'
import { ScrollSmoother } from 'gsap/all'
import gsap from 'gsap'
import Fixed from './components/HomeComp/Fixed'
import ProjectDetails from './components/WorkComp/ProjectDetails'
import ScrollToTop from './components/common/ScrollToTop'
import NewPageTransition from './components/common/NewPageTransition'
import Cursor from './components/common/Cursor'



const App = () => {

  gsap.registerPlugin(ScrollSmoother)

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Only enable ScrollSmoother for screens wider than 1024px
    mm.add("(min-width: 1024px)", () => {
      let smoother = ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
        normalizeScroll: true
      });
    });

    // Optional: Remove or do nothing below 1024px
    // If you want to completely disable smoother below 1024px, you can register a cleanup:
    mm.add("(max-width: 1023px)", () => {
      if (ScrollSmoother.get()) {
        ScrollSmoother.get().kill();
      }
    });

    // Cleanup media query on unmount
    return () => mm.revert();
  }, []);

  return (
    <>
      <nav>
        <Loader />
        <Fixed />
        
        <Cursor />
      </nav>
      <div id='smooth-wrapper'>
        <div id='smooth-content'
        className='bg-[#EBEAE4]'
        >
          <ScrollToTop />
          <NewPageTransition>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/work' element={<Work />} />
              <Route path="/work/:slug" element={<ProjectDetails />} />
              <Route path='/services' element={<Services />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </NewPageTransition>
        </div>
      </div>
    </>

  )
}

export default App
