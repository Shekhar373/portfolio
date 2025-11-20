import React, { useEffect } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Lenis from 'lenis'
import { Route, Routes } from 'react-router-dom'
import Work from './Pages/Work'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Loader from './components/HomeComp/Loader'


const App = () => {
  useEffect(()=> {
    // Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
  })
  return (
    <div>
     
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/work' element={<Work />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
      
    </div>
    
  )
}

export default App
