import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='text-white w-full flex items-center justify-between bg-transparent px-36 py-6 '>
         <div className="logo">
             <h1 className='text-2xl cursor-pointer'><Link to = "/">Paradise</Link></h1> 
         </div>

         <div className='flex gap-4 items-center'>
                 <ShoppingCart />
                 <span className='text-2xl cursor-pointer' ><Link to = "/market">choose design</Link></span>
              </div>
    </div>
  )
}

export default Header
