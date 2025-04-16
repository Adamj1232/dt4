import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import { loadPolygonMaskPlugin } from 'tsparticles-plugin-polygon-mask'
import particlesOptions from '../particle_tunnel.json'
import useViewport from '../hooks/useViewport'

export default function ParticleBackground() {
  const { width } = useViewport()

  const particlesInit = useCallback(
    async main => {
      await loadFull(main)
      width > 800 && (await loadPolygonMaskPlugin(main))
    },
    [width]
  )

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
