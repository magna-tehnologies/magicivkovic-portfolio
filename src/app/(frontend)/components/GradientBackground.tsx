import React, { useEffect, useRef } from 'react'
import Granim from 'granim'

export default function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const granimInstance = new Granim({
      element: canvasRef.current!,
      direction: 'diagonal',
      isPausedWhenNotInView: true,
      states: {
        'default-state': {
          gradients: [
            ['#2b1055', '#7597de'],
            // ['#1a0d1f', '#5a2d82'],
            // ['#3a1c71', '#d76d77', '#ffaf7b'],
          ],
          transitionSpeed: 4,
        },
      },
    })

    return () => {
      granimInstance.destroy() // cleanup na unmount
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  )
}
