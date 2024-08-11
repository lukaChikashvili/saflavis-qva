import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Image = () => {
  const { setUrl, setImg, setCloth, lang } = useContext(UserContext);

  const closeModal = () => {
    setImg(false);
    setCloth(false);
  };

  return (
    <div className='absolute w-11/12 md:w-2/3 lg:w-1/2 h-auto bg-transparent bottom-10 md:bottom-56 left-4 md:left-24 p-4 md:p-12'>
      <div className='flex items-center justify-between'>
        <h1
          style={{ fontFamily: lang && '"BPG Algeti Compact", sans-serif' }}
          className='text-2xl md:text-4xl font-bold underline underline-offset-8 text-white'
        >
          {lang ? 'სურათი' : 'Add photo'}
        </h1>
        <span
          className='text-2xl md:text-4xl text-white cursor-pointer duration-500 ease hover:text-orange-600'
          onClick={closeModal}
        >
          X
        </span>
      </div>

      <input
        type='text'
        placeholder='image url...'
        className='outline-none w-full md:w-2/3 p-2 rounded-md text-lg md:text-xl mt-4 font-bold'
        onChange={(e) => setUrl(e.target.value)}
      />
    </div>
  );
};

export default Image;
