import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Characters } from './Pages/Characters'


function App() {

  return (
    <>
    <div>
      <nav>
        | <Link to= "/">Inicio</Link> |
        <Link to= "/characters"> Personajes</Link> |
        <Link to= "/about"> Acerca de</Link> |
      </nav>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/characters' element={<Characters/>}/>
    </Routes>
    </>
  )
}

export default App
