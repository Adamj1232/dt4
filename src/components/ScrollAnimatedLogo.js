import React, { useEffect, useRef } from 'react'

export default function ScrollAnimatedLogo({ children }) {
  const logoRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!logoRef.current) return

      const scrollPercent = Math.min(window.scrollY / (window.innerHeight * 0.5), 1)
      
      // Calculate transforms based on scroll position
      const scale = Math.max(1 - scrollPercent * 0.6, 0.4) // Scale between 1 and 0.4
      const rotateY = scrollPercent * 180 // Rotate up to 180 degrees
      const translateZ = -scrollPercent * 200 // Move back in 3D space
      const opacity = Math.max(1 - scrollPercent * 1.5, 0) // Fade out

      // Apply transforms with adjusted easing
      logoRef.current.style.transform = `
        scale(${scale})
        rotateY(${rotateY}deg)
        translateZ(${translateZ}px)
      `
      logoRef.current.style.opacity = opacity
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={logoRef} style={{ 
      transition: 'transform 0.15s ease-out, opacity 0.2s ease-out', // Slightly faster transition
      transformStyle: 'preserve-3d',
      willChange: 'transform, opacity'
    }}>
      {children}
    </div>
  )
} 