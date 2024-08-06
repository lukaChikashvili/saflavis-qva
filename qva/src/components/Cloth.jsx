import React, { useContext, useEffect, useRef } from 'react'
import vertex from '../shaders/clothShader/vertex.glsl';
import fragment from '../shaders/clothShader/fragment.glsl';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap';
import { UserContext } from '../context/UserContext';
import { useTexture } from '@react-three/drei';


const Cloth = () => {

  const { cloth, moreTexture } = useContext(UserContext);

  // red cloth
  const redCloth = useTexture('./gold.jpeg');


  // uniforms
  const uniforms = useRef({
    uTime: { value: 0},
    uHeight: { value: 0.2 },
    uFrequency: { value: new THREE.Vector2(2, 1)},
    uTexture: { value: redCloth }
  });

  // cloth ref
  let clothRef = useRef();


  // animate cloth
    useFrame(() => {
      uniforms.current.uTime.value += 0.004;
    
      
     
    
    });

    useEffect(() => {
      if (cloth) {
        const timeline = gsap.timeline();
  
        timeline
          .to(clothRef.current.position, {
            x: 8,
            duration: 2,
            ease: 'power2.inOut',
          
          });

          timeline
          .to(clothRef.current.position, {
            x: 0,
            z: 2,
            duration: 2,
            ease: 'power2.inOut',
           
          });

          

          timeline
          .to(clothRef.current.position, {
            x: -12,
            y: -2,
            duration: 2,
            ease: 'power2.inOut',
            
          });


          gsap.from(clothRef.current, {
            opacity: 0,
            duration: 2, 
            ease: 'power2.inOut'
          })

         
      }else {
        
        gsap.to(clothRef.current.position, {
          x: -100,
          duration: 2, 
          ease: 'power2.inOut'
        });

   
        
      
      }


      
    
     
    }, [cloth]);


  return (
   <>
     <mesh ref={clothRef} position={[ -25, 0, -3 ]}>
        <planeGeometry args={[ 12, 4, 128, 128 ]}/>
        <shaderMaterial 
          wireframe = {false}
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms = {uniforms.current}
          side={THREE.DoubleSide}
          visible = {moreTexture ? false : true}
          
        />
     </mesh>
   </>
  )
}

export default Cloth
