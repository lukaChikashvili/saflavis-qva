import { Route, Routes } from 'react-router-dom'

import CanvasContainer from './components/CanvasContainer'
import Header from './components/Header'
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
 
  const { 
    setTextureModal, 
    textureModal, 
    mainTexture, 
    setMainTexture,
    setMoreTexture,
    moreTexture,
    setShowText,
    showText,
    img, 
    setImg,
    setCloth,
    lang
  } = useContext(UserContext);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const showModal = () => {
    setTextureModal(!textureModal);
  }

  const chooseTexture = (img) => {
    setMainTexture(img);
  }

  const showMoreTextures = () => {
    setMoreTexture(true);
    setTextureModal(false);
    setShowText(false);
    setImg(false);
    setCloth(false);
  }

  const [showX, setShowX] = useState('close');

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
        <Route path='/' element={<CanvasContainer />} />
      </Routes>

      <motion.img 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className='absolute bottom-4 right-6 md:right-32 w-8  rounded-full' 
        src={mainTexture} 
      />

      <motion.button 
        style={{ fontFamily: lang &&  '"BPG Algeti Compact", sans-serif', fontSize: lang && "20px" }}
        className='absolute top-6  right-4 text-2xl md:text-3xl md:-bottom-96 md:mt-64 md:right-10 text-white' 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        onClick={showModal}
      >
        {lang ? "დიზაინი" : "Textures"}
      </motion.button>

      {textureModal && (
        <div className='absolute bottom-16 text-white right-6 md:right-12 text-xl md:text-2xl flex flex-col gap-2 md:gap-4'>
          {defaultTextures.map((value, i) => (
            <img 
              key={i} 
              src={value} 
              className='w-8 md:w-12 rounded-full cursor-pointer border-2 border-transparent duration-500 ease-in hover:border-2 hover:border-white' 
              onClick={() => chooseTexture(value)}
            />
          ))}
        </div>
      )}

      {textureModal && (
        <Plus 
          className='text-white absolute bottom-72 right-8 md:bottom-80 md:right-16 cursor-pointer duration-500 ease hover:opacity-45' 
          onClick={showMoreTextures} 
          size={20} 
        />
      )}

      <AnimatePresence>
        {moreTexture && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            exit={{ opacity: 0 }}
            className='texts absolute w-11/12 md:w-2/5 bg-transparent h-1/2 top-40 md:top-56 left-4 md:left-24 flex flex-wrap gap-4 md:gap-12'
          >
            {paginatedTextures.map((value) => (
              <div key={value.id} className='flex flex-col items-center gap-2 md:gap-4'>
                <img 
                  src={value.img} 
                  className='w-16 h-16 md:w-24 md:h-24 rounded-full shadow-medium shadow-gray-400 cursor-pointer duration-500 ease-in hover:opacity-50' 
                  onMouseEnter={() => setMainTexture(value.img)} 
                />
                <h2 className='text-white text-lg md:text-xl'>{value.title}</h2>
              </div>
            ))}

            <motion.button 
              initial={{ opacity: 0, translateY: -5 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className='absolute bottom-0 -mb-8 md:-mb-16 left-32 md:left-56 text-white text-2xl md:text-3xl flex items-center gap-2 md:gap-4'
            >
              <ArrowLeft onClick={prevPage} />0{currentPage}<ArrowRight onClick={nextPage} />
            </motion.button>

            <button 
              style={{ fontFamily: lang &&  '"BPG Algeti Compact", sans-serif', fontSize: lang && "20px" }}  
              className='w-16 md:w-24 absolute top-0 -mt-8 md:-mt-16 right-0 text-white text-2xl md:text-3xl underline underline-offset-8 duration-500 ease hover:text-orange-500'
              onMouseEnter={() => setShowX('x')} 
              onMouseLeave={() => setShowX(lang ? 'დახურვა' : 'close')}
              onClick={closeTextures}
            >
              {showX}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        style={{ fontFamily: lang &&  '"BPG Algeti Compact", sans-serif', fontSize: lang && "20px" }}  
        className='absolute bottom-2 md:bottom-4 text-lg md:text-2xl text-white left-4 md:left-12 flex items-center gap-2 md:gap-4' 
        onClick={() => setShowText(true)}
      >
        <Type />{lang ? " ტექსტი" : "add text"}
      </button>

      {showText && <MoreTexts />}

      <button 
        style={{ fontFamily: lang &&  '"BPG Algeti Compact", sans-serif', fontSize: lang && "20px" }} 
        className='absolute bottom-2 md:bottom-4 text-lg md:text-2xl text-white left-20 md:left-44 flex items-center gap-2 md:gap-4'
        onClick={addImageFunc}
      >
        <Image />{lang ? "დაამატე სურათი" : "add image"}
      </button>

      {img && <ImageComp />}
    </>
  )
}

export default App
