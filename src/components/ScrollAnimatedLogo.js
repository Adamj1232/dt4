import React, { useEffect, useRef } from 'react'

export default function ScrollAnimatedLogo({ children }) {
  const logoRef = useRef(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      return undefined
    }

    let animationFrame = null

    const handleScroll = () => {
      if (animationFrame) return

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = null
        if (!logoRef.current) return

        const scrollPercent = Math.min(window.scrollY / (window.innerHeight * 0.5), 1)

        const scale = Math.max(1 - scrollPercent * 0.6, 0.4)
        const rotateY = scrollPercent * 180
        const translateZ = -scrollPercent * 200
        const opacity = Math.max(1 - scrollPercent * 1.5, 0)

        logoRef.current.style.transform = `
        scale(${scale})
        rotateY(${rotateY}deg)
        translateZ(${translateZ}px)
      `
        logoRef.current.style.opacity = opacity
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  return (
    <div
      ref={logoRef}
      className="scroll-animated-logo"
      style={{
        transition: 'transform 0.15s ease-out, opacity 0.2s ease-out',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  )
}
