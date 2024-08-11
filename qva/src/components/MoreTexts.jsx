import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const MoreTexts = () => {
   
    const { setYourName, setSurname, setShowText , setYear, setTextColor, lang} = useContext(UserContext);

    const colors = [
      'red', 'green', 'blue', 'orange', 'purple', 'pink', "black"
    ];

  return (
    <div className='absolute  w-1/2 h-1/2 bg-transparent bottom-56 left-24 p-12'>
        <div className='flex items-center justify-between'>
       <h1 style={{fontFamily: lang &&  '"BPG Algeti Compact", sans-serif'}} className='text-4xl font-bold underline underline-offset-8 text-white' >{lang ? 'ტექსტი' : 'Add text'}</h1>
       <span className='text-4xl  text-white cursor-pointer duration-500 ease hover:text-orange-600' onClick={() => setShowText(false)}>X</span>
       </div>
<div className='flex gap-6'>
       <input type='text' placeholder=' name...' 
       className='outline-none w-56 p-2 rounded-md text-xl mt-4 font-bold'
       onChange={(e) => setYourName(e.target.value)}
       />

       <input type='text' placeholder='surname...' 
       className='outline-none w-56 p-2 rounded-md text-xl mt-4 font-bold'
       onChange={(e) => setSurname(e.target.value)}
       />
       </div>

       <input type='text' placeholder='year of death...' 
       className='outline-none w-56 p-2 rounded-md text-xl mt-4 font-bold'
       onChange={(e) => setYear(e.target.value)}
       />
    <h1 style={{fontFamily: lang &&  '"BPG Algeti Compact", sans-serif'}} className='text-4xl font-bold underline underline-offset-8 text-white mt-4'>{lang ? 'ფერი' : 'Add color'}</h1>
      
      {colors.map((value) => (
        <div className='inline-flex ml-4 mt-4'>
            <div className='w-12 h-12 rounded-full cursor-pointer border-2 duration-500 ease hover:opacity-50 ' onClick={() => setTextColor(value)} style={{backgroundColor: value}}></div>
            </div>
      ))}
       
    </div>
  )
}

export default MoreTexts
