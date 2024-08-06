import React, { useContext, useEffect, useRef } from 'react'
import { useGLTF, useMatcapTexture } from '@react-three/drei'
import * as THREE from 'three'
import { UserContext } from '../context/UserContext'
import { useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';

const HeadStone = () => {
  const { mainTexture,
          moreTexture ,
          showText} = useContext(UserContext);

  // Import model
  const { scene } = useGLTF('./headstone.glb');

  // 3d model ref
  const modelRef = useRef();


  const [texture] = useMatcapTexture(mainTexture.slice(55, -4), 256);

  // control camera movement
  const { camera } = useThree();


  
  useEffect(() => {
    if (scene && texture) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshBasicMaterial({ map: texture });
          gsap.to(child.material, {
            duration: 2,
            ease: 'power1.inOut'
          })
        }
      });
    }
  }, [scene, texture]);



  useEffect(() => {
    // move camera smoothly to show textures
   if(moreTexture) {
    gsap.to(camera.position, {
      x: 8,
      duration: 2,
      ease: 'power2.inOut'
    });

    gsap.to(modelRef.current.position, {
      x: 3,
      z: -2,
      duration: 2,
      ease: 'power2.inOut',
    });
   }else {
    gsap.to(camera.position, {
      x: 0, 
      duration: 2,
      ease: 'power2.inOut',
    });

    gsap.to(modelRef.current.position, {
      x: 0,
      z: 0,
      duration: 2,
      ease: 'power2.inOut',
    });
  }

  // move camera smoothly to show text
  if(showText) {
    gsap.to(modelRef.current.position, {
      x: 7,
      y: -4,
      duration: 2,
      ease: 'power2.inOut'
    });

    gsap.to(modelRef.current.rotation, {
      x: 1.2,
      duration: 2,
      ease: 'power2.inOut'
    });
 
    gsap.to(camera.position, {
      z: 9, 
      duration: 2,
      ease: 'power2.inOut',
    });



  

  }
  }, [moreTexture, camera, showText]);
  return (
    <>
      <primitive object={scene} scale={0.05} position-y={-2} ref = {modelRef} />
    </>
  );
};

export default HeadStone;
