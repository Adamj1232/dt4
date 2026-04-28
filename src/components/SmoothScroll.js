import { useEffect } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

export default function SmoothScroll({ children }) {
  const { scrollYProgress } = useScroll()
  const prefersReducedMotion = useReducedMotion()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const anchors = document.querySelectorAll('a[href^="#"]')
    const cleanup = []

    anchors.forEach(anchor => {
      const handleClick = function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: shouldReduceMotion ? 'auto' : 'smooth',
            block: 'start'
          })
        }
      }

      anchor.addEventListener('click', handleClick)
      cleanup.push(() => anchor.removeEventListener('click', handleClick))
    })

    return () => cleanup.forEach(removeListener => removeListener())
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 origin-left z-50"
        style={{ scaleX: prefersReducedMotion ? scrollYProgress : scaleX }}
      />
      {children}
    </>
  )
}
