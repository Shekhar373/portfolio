import React, { useEffect } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
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



const App = () => {

  gsap.registerPlugin(ScrollSmoother)

  useEffect(() => {

    const mm = gsap.matchMedia()

    mm.add("(min-width: 769px)", () => {
      let smoother = ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
        normalizeScroll: true
      });
    })

    mm.add("(max-width: 768px)", () => {
      let smoother = ScrollSmoother.create({
        smooth: 1.1,
        effects: true,
        normalizeScroll: true
      });
    })

  })

  return (
    <>
      <nav>
        <Loader />
        <Fixed />
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
              <Route path='/about' element={<About />} />
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
