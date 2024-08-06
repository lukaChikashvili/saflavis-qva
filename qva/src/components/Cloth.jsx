import React from 'react'
import vertex from '../shaders/clothShader/vertex.glsl';
import fragment from '../shaders/clothShader/fragment.glsl';

const Cloth = () => {
  return (
   <>
     <mesh>
        <planeGeometry args={[ 2, 2, 128, 128 ]}/>
        <shaderMaterial 
          wireframe = {true}
          vertexShader={vertex}
          fragmentShader={fragment}
        />
     </mesh>
   </>
  )
}

export default Cloth
