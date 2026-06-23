import { NavLink, Outlet } from "react-router-dom"
import { ThemeSwitcher } from "../components/ThemeSwitcher"
import { Header } from "../components/Header"


function Layout(){
    return (
        <div className="layout">
            <nav className="mainNav">
                | <NavLink to= "/">Inicio</NavLink> |
                <NavLink to= "/videogames"> Videojuegos</NavLink> |
                <NavLink to= "/about"> Acerca de</NavLink> |
            </nav>
            <ThemeSwitcher/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export{
    Layout
}