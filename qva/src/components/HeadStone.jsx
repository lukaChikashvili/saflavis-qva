import React, { useContext, useEffect } from 'react'
import { useGLTF, useMatcapTexture } from '@react-three/drei'
import * as THREE from 'three'
import { UserContext } from '../context/UserContext'

const HeadStone = () => {
  const { mainTexture } = useContext(UserContext);

  // Import model
  const { scene } = useGLTF('./headstone.glb');


  const [texture] = useMatcapTexture(mainTexture.slice(55, -4), 256);

  useEffect(() => {
    if (scene && texture) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshBasicMaterial({ map: texture });
        }
      });
    }
  }, [scene, texture]);
  return (
    <>
      <primitive object={scene} scale={0.05} position-y={-2} />
    </>
  );
};

export default HeadStone;
