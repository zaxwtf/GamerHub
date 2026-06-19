import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Videogames } from './Pages/Videogames'
import VideogamesDetails from './Pages/VideogameDetails'
import { Layout } from './Pages/Layout'
import { ThemeContext } from './context/ThemeContext'
import { useState } from 'react'


function App() {
  const [theme, setTheme] = useState('light')

  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Routes>
      <Route path='/' element= {<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/videogames' element={<Videogames/>}/>
        <Route path='/videogames/:id' element={<VideogamesDetails/>}/>
      </Route>
    </Routes>
    </ThemeContext.Provider>
    </>
  )
}

export default App
