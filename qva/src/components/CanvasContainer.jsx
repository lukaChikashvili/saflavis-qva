import React from 'react'
import { Canvas } from '@react-three/fiber'
import HeadStone from './HeadStone'
import { OrbitControls } from '@react-three/drei'
import Lights from './Lights'

const CanvasContainer = () => {
  return (
      <>
        <Canvas camera={ { fov: 75, near: 0.2, far: 1000, position: [0, 1.5, 5] } }>
            <OrbitControls makeDefault />
            <Lights />
           <HeadStone />
        </Canvas>
      </>
  )
}

export default CanvasContainer
