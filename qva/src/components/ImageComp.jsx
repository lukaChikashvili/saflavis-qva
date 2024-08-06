import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Image = () => {
 
  const { setUrl, setImg, setCloth } = useContext(UserContext);

  const closeModal = () => {
    setImg(false);
    setCloth(false);
  }

  return (
    <div className='absolute   w-1/2 h-1/2 bg-transparent bottom-56 left-24 p-12'>
       <div className='flex items-center gap-56'>
       <h1 className='text-4xl font-bold underline underline-offset-8 text-white'>Add photo</h1>
       <span className='text-4xl  text-white cursor-pointer duration-500 ease hover:text-orange-600' 
             onClick={closeModal}
       >X</span>
       </div>

      <input type='text' placeholder=' image url...' 
       className='outline-none w-56 p-2 rounded-md text-xl mt-4 font-bold'
        onChange={(e) => setUrl(e.target.value)}
       />
    </div>
  )
}

export default Image
