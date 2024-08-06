import React, { useContext } from 'react'
import { Canvas } from '@react-three/fiber'
import HeadStone from './HeadStone'
import { OrbitControls } from '@react-three/drei'
import Lights from './Lights'
import Cloth from './Cloth'
import { Physics } from '@react-three/rapier'


const CanvasContainer = () => {


  return (
      <>
     
        <Canvas camera={ { fov: 75, near: 0.2, far: 1000, position: [0, 1.5, 5] } }>
        <Physics gravity={[0, -9.81, 0]} >
            <OrbitControls makeDefault />
            <Lights />
           <HeadStone />
           <Cloth /> 
           </Physics>
        </Canvas>
     
      </>
  )
}

export default CanvasContainer
