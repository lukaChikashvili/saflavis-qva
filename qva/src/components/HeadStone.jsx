import React, { useEffect } from 'react'
import { useGLTF, useMatcapTexture, useTexture} from '@react-three/drei'
import * as THREE from 'three'


const HeadStone = () => {
   
    // import model
    const { scene } = useGLTF('./headstone.glb');
    const [texture] = useMatcapTexture('0C430C_257D25_439A43_3C683C', 256);

    const material = new THREE.MeshBasicMaterial({
        map: texture
    }) 

    useEffect(() => {
       scene.traverse((child) => {
         if(child.isMesh) {
            child.material = material;
         }
       })
    })

  return (
  <>

    <primitive object={scene} scale = {0.05} position-y = {-2} />
  </>
  )
}

export default HeadStone
