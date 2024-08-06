import React from 'react'

const Image = () => {
  return (
    <div className='absolute   w-1/2 h-1/2 bg-transparent bottom-56 left-24 p-12'>
      <h1 className='text-4xl font-bold underline underline-offset-8 text-white'>Add photo</h1>

      <input type='text' placeholder=' image url...' 
       className='outline-none w-56 p-2 rounded-md text-xl mt-4 font-bold'
      
       />
    </div>
  )
}

export default Image
