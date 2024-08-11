import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const MoreTexts = () => {
  const { setYourName, setSurname, setShowText, setYear, setTextColor, lang } = useContext(UserContext);

  const colors = ['red', 'green', 'blue', 'orange', 'purple', 'pink', 'black'];

  return (
    <div className='absolute w-11/12 md:w-2/3 lg:w-1/2 h-auto md:h-1/2 bg-transparent bottom-10 md:bottom-56 left-4 md:left-24 p-4 md:p-12'>
      <div className='flex items-center justify-between'>
        <h1
          style={{ fontFamily: lang && '"BPG Algeti Compact", sans-serif' }}
          className='text-2xl md:text-4xl font-bold underline underline-offset-8 text-white'
        >
          {lang ? 'ტექსტი' : 'Add text'}
        </h1>
        <span
          className='text-2xl md:text-4xl text-white cursor-pointer duration-500 ease hover:text-orange-600'
          onClick={() => setShowText(false)}
        >
          X
        </span>
      </div>

      <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
        <input
          type='text'
          placeholder='Name...'
          className='outline-none w-full md:w-56 p-2 rounded-md text-lg md:text-xl mt-4 font-bold'
          onChange={(e) => setYourName(e.target.value)}
        />

        <input
          type='text'
          placeholder='Surname...'
          className='outline-none w-full md:w-56 p-2 rounded-md text-lg md:text-xl mt-4 font-bold'
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>

      <input
        type='text'
        placeholder='Year of death...'
        className='outline-none w-full md:w-56 p-2 rounded-md text-lg md:text-xl mt-4 font-bold'
        onChange={(e) => setYear(e.target.value)}
      />

      <h1
        style={{ fontFamily: lang && '"BPG Algeti Compact", sans-serif' }}
        className='text-2xl md:text-4xl font-bold underline underline-offset-8 text-white mt-4'
      >
        {lang ? 'ფერი' : 'Add color'}
      </h1>

      <div className='flex flex-wrap gap-4 mt-4'>
        {colors.map((value) => (
          <div key={value} className='inline-flex'>
            <div
              className='w-10 h-10 md:w-12 md:h-12 rounded-full cursor-pointer border-2 duration-500 ease hover:opacity-50'
              onClick={() => setTextColor(value)}
              style={{ backgroundColor: value }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreTexts;
