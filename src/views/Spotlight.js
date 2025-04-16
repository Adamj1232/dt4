import React, { useEffect, useRef } from 'react'

const Spotlight = () => {
  const spotlightRef = useRef(null)
  let initSpotlightSize = 'transparent 0px, rgba(0, 0, 0, 1) 1px)'
  let spotlightSize = 'transparent 90px, rgba(0, 0, 0, 1) 120px)'
  let initUpdate = 0

  const updateSpotlight = e => {
    if (spotlightRef.current) {
      spotlightRef.current.style.backgroundImage = `radial-gradient(circle at ${
        (e.pageX / window.innerWidth) * 100
      }% ${(e.pageY / window.innerHeight) * 100}%, ${
        initUpdate < 2 ? initSpotlightSize : spotlightSize
      }`
      initUpdate += 1
    }
  }

  useEffect(() => {
    const handleMouseMove = e => updateSpotlight(e)
    const handleMouseUp = e => {
      spotlightSize = 'transparent 130px, rgba(0, 0, 0, 1) 160px)'
      updateSpotlight(e)
    }
    const handleMouseDown = e => {
      spotlightSize = 'transparent 150px, rgba(0, 0, 0, 0.9) 180px)'
      updateSpotlight(e)
    }

    // Create a mock event object
    const mockEvent = {
      pageX: window.innerWidth / 2,
      pageY: window.innerHeight / 2
    }

    // Call updateSpotlight with the mock event
    updateSpotlight(mockEvent)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, []) // Empty dependency array means this effect runs once on mount and clean up on unmount

  return <div className="spotlight" ref={spotlightRef} />
}

export default Spotlight
