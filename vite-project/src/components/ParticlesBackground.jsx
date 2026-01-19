import { useEffect, useState } from 'react'
import Particles from '@tsparticles/react'
import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const particlesConfig = {
  background: {
    color: {
      value: 'transparent',
    },
  },
  fullScreen: {
    enable: false,
    zIndex: -10,
  },
  particles: {
    color: {
      value: '#4f46e5',
    },
    links: {
      color: '#4f46e5',
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        height: 800,
        width: 800,
      },
      value: 50,
    },
    opacity: {
      value: 0.3,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
}

function ParticlesBackground() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  return init ? (
    <Particles
      id="tsparticles"
      options={particlesConfig}
      className="absolute inset-0 -z-10"
    />
  ) : null
}

export default ParticlesBackground
