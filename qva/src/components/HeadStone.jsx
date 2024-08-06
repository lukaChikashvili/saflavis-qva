import React, { useContext, useEffect, useRef, useState } from 'react'
import { Html, Text3D, useGLTF, useMatcapTexture, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { UserContext } from '../context/UserContext'
import { useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import rageshveleboda from '../assets/sound.mp3';

const HeadStone = () => {
  const { mainTexture,
          moreTexture ,
          showText, 
          yourName,
          surname,
          img,
          url
        } = useContext(UserContext);


        // take url from localstorage
        const [persistedUrl, setPersistedUrl] = useState(() => {
          return localStorage.getItem('image-url') || 'https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg';
        });

        // save url to localstorage
        useEffect(() => {
            if(url) {
              localStorage.setItem('image-url', url);
              setPersistedUrl(url);

            }
        }, [url])

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

  // img frame ref
  let imgFrame = useRef();

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

  }else {
    gsap.to(camera.position, {
      z: 5, 
      duration: 2,
      ease: 'power2.inOut',
    });

    gsap.to(modelRef.current.position, {
      x: 0,
      y: -2,
      duration: 2,
      ease: 'power2.inOut',
    });

    gsap.to(modelRef.current.rotation, {
      x: 0,
      duration: 2,
      ease: 'power2.inOut'
    });
  }


  if(img) {
    gsap.to(modelRef.current.position, {
       z: 10,
       y: -4.5,
       x: 2, 
      duration: 2,
      ease: 'power2.inOut'
    });

     gsap.from(imgFrame.current.scale, {
      x: 0,
      y: 0,
      duration: 2,
      ease: 'power2.inOut',
      delay: 2
     });

    
     // const audio = new Audio(rageshveleboda);
     // audio.play();
    
  }
  }, [moreTexture, camera, showText, img, ]);


  // use img texture
  const imageTex = useTexture(persistedUrl);

  return (
    <>
      <primitive object={scene} scale={0.05} position-y={-2} ref = {modelRef} />
      <Text3D font = "./helvetiker_regular.typeface.json" 
              position={[4.5, 1, 0]} 
              size={ 0.75 }
        height={ 0.2 }
        curveSegments={ 12 }
        bevelEnabled
        bevelThickness={ 0.02 }
        bevelSize={ 0.02 }
        bevelOffset={ 0 }
        bevelSegments={ 5 }
              >
        {yourName}
      </Text3D>
      
      <Text3D font = "./helvetiker_regular.typeface.json" 
              position={[4.5, -1.5, 1]}
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 }
              
              
               >
        {surname}
      </Text3D>

      {img && <mesh ref={imgFrame} position={[ 1.95, 0.7, -0.8 ]}>
            <planeGeometry args={[ 5, 5.5 ]} />
            <meshStandardMaterial map={imageTex} />
          </mesh>}
    </>
  );
};

export default HeadStone;
