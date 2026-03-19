import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import PageTransition from "./PageTransition"


const Layout = ({ children }) => {

    const location = useLocation()
    const [displayLocation, setDisplayLocation] = useState(location)
    const [transitionStage, setTransitionStage] = useState(false)

    useEffect(() => {

        if (location !== displayLocation) {

            setTransitionStage(true)

            setTimeout(() => {
                setDisplayLocation(location)
            }, 800)

            setTimeout(() => {
                setTransitionStage(false)
            }, 1600)

        }

    }, [location])

    return (
        <>
            {transitionStage && <PageTransition />}

            <div key={displayLocation.pathname}>
                {children}
            </div>
        </>
    )
}

export default Layout