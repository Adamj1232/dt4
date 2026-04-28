import { useCallback, useEffect, useState } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import { loadPolygonMaskPlugin } from 'tsparticles-plugin-polygon-mask'
import particlesOptions from '../particle_tunnel.json'
import useViewport from '../hooks/useViewport'

export default function ParticleBackground() {
  const { width } = useViewport()
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const particlesInit = useCallback(
    async main => {
      await loadFull(main)
      await loadPolygonMaskPlugin(main)
    },
    []
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)

    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  if (width < 800 || prefersReducedMotion) return null

  return (
    <Particles
      id="parts"
      init={particlesInit}
      canvasClassName="particle-canvas"
      options={particlesOptions}
      width="100vw"
    />
  )
}
