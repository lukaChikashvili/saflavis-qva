import React from 'react'
import { useGLTF} from '@react-three/drei'

const HeadStone = () => {
   
    // import model
    const model = useGLTF('./headstone.glb');

  return (
  <>
  
    <primitive object={model.scene}/>
  </>
  )
}

export default HeadStone
