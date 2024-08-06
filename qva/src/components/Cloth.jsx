import React, { useRef } from 'react'
import vertex from '../shaders/clothShader/vertex.glsl';
import fragment from '../shaders/clothShader/fragment.glsl';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'

const Cloth = () => {

  // uniforms
  const uniforms = useRef({
    uTime: { value: 0},
    uHeight: { value: 0.2 },
    uFrequency: { value: new THREE.Vector2(4, 1.5)}
  });


  // animate cloth
    useFrame(() => {
      uniforms.current.uTime.value += 0.004;
    })
  return (
   <>
     <mesh>
        <planeGeometry args={[ 2, 2, 128, 128 ]}/>
        <shaderMaterial 
          wireframe = {true}
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms = {uniforms.current}
        />
     </mesh>
   </>
  )
}

export default Cloth
