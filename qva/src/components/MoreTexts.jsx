import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const MoreTexts = () => {
   
    const { setYourName, setSurname, setShowText } = useContext(UserContext);

  return (
    <div className='absolute  w-1/2 h-1/2 bg-transparent bottom-56 left-24 p-12'>
        <div className='flex items-center justify-between'>
       <h1 className='text-4xl font-bold underline underline-offset-8 text-white'>Add text</h1>
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

       
    </div>
  )
}

export default MoreTexts
