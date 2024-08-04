
import { Route, Routes } from 'react-router-dom'

import CanvasContainer from './components/CanvasContainer'
import Header from './components/Header'
import Market from './components/Market'
import { useContext, useState } from 'react'
import { UserContext } from './context/UserContext'
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { matcapTextures } from './components/Matcaps.js'


function App() {

  const defaultTextures = [
  
    'https://github.com/nidorx/matcaps/raw/master/thumbnail/545B4D_D8DDC8_A0A792_B2C1A3.jpg',
    'https://github.com/nidorx/matcaps/raw/master/thumbnail/582410_83381A_1F0C04_30140A.jpg',
    'https://github.com/nidorx/matcaps/raw/master/thumbnail/5D5D5D_CDCDCD_232323_ACACAC.jpg',
    'https://github.com/nidorx/matcaps/raw/master/thumbnail/0C430C_257D25_439A43_3C683C.jpg'
  ]
 
   const { setTextureModal, 
           textureModal, 
           mainTexture, 
           setMainTexture,
           setMoreTexture,
           moreTexture
          } = useContext(UserContext);

   


   const showModal = () => {
    setTextureModal(!textureModal);
   }

   const chooseTexture = (img) => {
     
          setMainTexture(img);
     }

// function to show more textures
     const showMoreTextures = () => {
       setMoreTexture(true);
       setTextureModal(false);
     
     }
  return (
    <>
    <Header />
    <Routes>
       <Route path='/' element = { <CanvasContainer />}/>
       <Route path='/market' element = { <Market />}/>
    </Routes>

      
    <motion.img initial = {{ opacity: 0 }}
                animate = {{ opacity: 1  }}
                transition={{ duration: 1, delay: 0.6}}
                className='absolute bottom-4 right-32 w-8 rounded-full' src = {mainTexture} />


      <motion.button className='absolute text-white bottom-4 text-2xl right-12' 
                     initial = {{ opacity: 0 }}
                     animate = {{ opacity: 1  }}
                     transition={{ duration: 1, delay: 0.2}}
                      onClick={showModal}
      >Textures</motion.button>
    {textureModal && <div className='absolute bottom-16 text-white right-12 text-2xl flex flex-col gap-4'>
        {defaultTextures.map((value, i) => (
           <img key = {i} src={value} className='w-12 rounded-full cursor-pointer border-2 border-transparent duration-500 ease-in hover:border-2 hover:border-white' onClick={() => chooseTexture(value)}/>
        ))}
      </div>}
    {textureModal && <Plus className='text-white absolute bottom-80 right-16 cursor-pointer duration-500 ease hover:opacity-45' onClick={showMoreTextures} size={25} /> }
   

  {moreTexture && <motion.div initial = {{ opacity: 0 }}
                              animate = {{ opacity: 1 }}
                              transition={{ duration: 1, delay: 0.5}}
  className='absolute w-2/5 bg-transparent h-1/2 top-56 left-24 flex flex-wrap gap-12'>
   { matcapTextures.map((value) => (
       <div key={value.id} className='flex flex-col items-center gap-4' >
        <img src = {value.img} className='w-24 h-24 rounded-full shadow-medium shadow-gray-400 cursor-pointer duration-500 ease-in hover:opacity-50 ' />
        <h2 className='text-white text-xl'>{value.title}</h2>
       </div>
   ))}
</motion.div>}
    </>
  )
}

export default App
