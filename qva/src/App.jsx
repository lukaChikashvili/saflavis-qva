
import { Route, Routes } from 'react-router-dom'

import CanvasContainer from './components/CanvasContainer'
import Header from './components/Header'
import Market from './components/Market'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from './context/UserContext'
import { ArrowLeft, ArrowRight, Image, Plus, Type } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { matcapTextures } from './components/Matcaps.js'
import gsap from 'gsap'
import MoreTexts from './components/MoreTexts.jsx'
import ImageComp from './components/ImageComp.jsx'


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
           moreTexture,
           setShowText,
           showText,
           img, 
           setImg,
           setCloth
          } = useContext(UserContext);

   
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;

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
       setShowText(false);
       setImg(false);
       setCloth(false);
     }

     // show close icon
     const [showX, setShowX] = useState('close');


     // go to next page
     const nextPage = () => {
      if ((currentPage + 1) * itemsPerPage < matcapTextures.length) {
        gsap.to('.texts', {
          opacity: 0,
          duration: 0.5,
          delay: 0.5, 
           ease: 'power1.inOut',
          onComplete: () => {
            setCurrentPage(currentPage + 1);
            gsap.to('.texts', {
              opacity: 1,
              duration: 0.5,
              ease: 'power1.inOut',
              delay: 0.5
            });
          }
        });
      }
    };


     const paginatedTextures = matcapTextures.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage
    );

    const prevPage = () => {
      if (currentPage > 0) {
        gsap.to('.texts', {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            setCurrentPage(currentPage - 1);
            gsap.to('.texts', {
              opacity: 1,
              duration: 0.5
            });
          }
        });
      }
    };


    useEffect(() => {
      gsap.fromTo('.texts', { opacity: 0 }, { opacity: 1, duration: 1 });
    }, [currentPage]);

    const closeTextures = () => {
      setMoreTexture(false);
    }


    const addImageFunc = () => {
      setImg(true);
      setCloth(true);
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
   
   <AnimatePresence>
  {moreTexture &&
    
   <motion.div initial = {{ opacity: 0 }}
                              animate = {{ opacity: 1 }}
                              transition={{ duration: 1, delay: 0.5}}
                              exit={{ opacity: 0}}
  className='texts absolute w-2/5 bg-transparent h-1/2 top-56 left-24 flex flex-wrap gap-12'>
   { paginatedTextures.map((value) => (
       <div key={value.id} className='flex flex-col items-center gap-4' >
        <img src = {value.img} className='w-24 h-24 rounded-full shadow-medium shadow-gray-400 cursor-pointer duration-500 ease-in hover:opacity-50 ' 
                                          onMouseEnter={() => setMainTexture(value.img)}
        />
        <h2 className='text-white text-xl'>{value.title}</h2>
     
       </div>
   ))}

   <motion.button initial = {{ opacity: 0, translateY: -5 }}
                  animate = {{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 1, delay: 1}}
   className='absolute bottom-0 -mb-16 left-56 text-white text-3xl flex items-center gap-4'><ArrowLeft onClick={prevPage} />0{currentPage}<ArrowRight onClick={nextPage}/></motion.button>

   <button className='w-24 absolute top-0 -mt-16 right-0 text-white text-3xl underline underline-offset-8 duration-500 ease hover:text-orange-500'
    onMouseEnter={() => setShowX('x')} 
    onMouseLeave={() => setShowX('close')}
    onClick={closeTextures}
    >{showX}</button>
</motion.div>
  
  
}
</AnimatePresence>


<button className='absolute bottom-4 text-2xl text-white left-12 flex items-center gap-4' onClick={() => setShowText(true)}><Type /> add text</button>

{showText && <MoreTexts />}

<button className='absolute bottom-4 text-2xl text-white left-44 flex items-center gap-4'
         onClick={addImageFunc}
><Image />add image</button>

{img &&  <ImageComp />}

    </>
  )
}

export default App
