
import { Route, Routes } from 'react-router-dom'

import CanvasContainer from './components/CanvasContainer'
import Header from './components/Header'
import Market from './components/Market'

function App() {
 

  return (
    <>
    <Header />
    <Routes>
       <Route path='/' element = { <CanvasContainer />}/>
       <Route path='/market' element = { <Market />}/>
    </Routes>

      
      <img className='absolute bottom-4 right-32 w-8 rounded-full' src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/0C430C_257D25_439A43_3C683C.jpg" />
      <button className='absolute text-white bottom-4 text-2xl right-12'>Textures</button>
   
    
    </>
  )
}

export default App
