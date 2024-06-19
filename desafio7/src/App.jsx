import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
          <Route path='/Productos' element={<Productos/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
