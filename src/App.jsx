import React, { useEffect } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Lenis from 'lenis'
import { Route, Routes } from 'react-router-dom'
import Work from './Pages/Work'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Loader from './components/HomeComp/Loader'
import { ScrollSmoother } from 'gsap/all'
import gsap from 'gsap'


const App = () => {

  gsap.registerPlugin(ScrollSmoother)

  useEffect(() => {
    let smoother = ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      normalizeScroll: true
    });
  })

  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>
         <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/work' element={<Work />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
      </div>
     </div>
    
  )
}

export default App
