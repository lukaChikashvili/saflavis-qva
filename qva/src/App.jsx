
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CanvasContainer from './components/CanvasContainer'

function App() {
 

  return (
    <>
    <Routes>
       <Route path='/' element = { <CanvasContainer />}/>

    </Routes>
    
    </>
  )
}

export default App
