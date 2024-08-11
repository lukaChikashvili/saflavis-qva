import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Header = () => {
  const { setLang, lang } = useContext(UserContext);
  return (
    <div className='text-white w-full flex items-center justify-between bg-transparent px-36 py-6 '>
         <div className="logo">
             <h1 className='text-2xl cursor-pointer'><Link to = "/">Paradise</Link></h1> 
         </div>

   <div>
     <h1 className='text-2xl lang cursor-pointer' onClick={() => setLang(!lang)}>{lang ? "GEO" : "ENG"}</h1>
   </div>
    </div>
  )
}

export default Header
