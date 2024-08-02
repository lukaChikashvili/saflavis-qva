import React from 'react'
import { Canvas } from '@react-three/fiber'
import HeadStone from './HeadStone'
import { OrbitControls } from '@react-three/drei'
import Lights from './Lights'

const CanvasContainer = () => {
  return (
      <>
        <Canvas>
            <OrbitControls makeDefault />
            <Lights />
           <HeadStone />
        </Canvas>
      </>
  )
}

export default CanvasContainer
