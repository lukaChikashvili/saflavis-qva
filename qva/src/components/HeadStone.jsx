import React, { useContext, useEffect, useRef } from 'react'
import { useGLTF, useMatcapTexture } from '@react-three/drei'
import * as THREE from 'three'
import { UserContext } from '../context/UserContext'
import { useFrame, useThree } from '@react-three/fiber';

const HeadStone = () => {
  const { mainTexture, moreTexture } = useContext(UserContext);

  // Import model
  const { scene } = useGLTF('./headstone.glb');

  // 3d model ref
  const modelRef = useRef();


  const [texture] = useMatcapTexture(mainTexture.slice(55, -4), 256);

  // control camera movement
  const { camera } = useThree();

  useFrame(() => {
    if(moreTexture) {
      camera.position.x = 8;
      modelRef.current.position.x = 3;
      modelRef.current.position.z = -2;
    }
  })

  
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
      <primitive object={scene} scale={0.05} position-y={-2} ref = {modelRef} />
    </>
  );
};

export default HeadStone;
