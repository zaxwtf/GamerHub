import './App.css'
import Counter from './components/Counter'
import Greetings from './components/Greetings'
import {Routes, Route} from "react-router-dom"
import { EffectPage } from './Pages/EffectPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Counter/>}/>
      <Route path='/greetings' element={<Greetings/>}/>
      <Route path='/effect' element={<EffectPage/>}/>
    </Routes>
  )
}

export default App
