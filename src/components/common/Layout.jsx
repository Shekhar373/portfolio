import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import PageTransition from "./PageTransition"
import NewPageTransition from "./NewPageTransition"


const Layout = ({ children }) => {

    const location = useLocation()
    const [displayLocation, setDisplayLocation] = useState(location)
    const [transitionStage, setTransitionStage] = useState(false)

    useEffect(() => {
        if (location !== displayLocation) {
          setTransitionStage(true)
        }
      }, [location])

    return (
         <>
      {transitionStage && (
        <NewPageTransition
          onMid={() => setDisplayLocation(location)}   // switch page
          onComplete={() => setTransitionStage(false)} // remove transition
        />
      )}

      <div key={displayLocation.pathname}>
        {children}
      </div>
    </>
    )
}

export default Layout