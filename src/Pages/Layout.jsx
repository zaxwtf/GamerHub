import { NavLink, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"


function Layout(){
    const {token} = useAuth()
    if(!token){
        return (
        <div>
            <nav className="flex flex-wrap gap-7 justify-center p-5 text-center text-xs sm:text-lg sm:gap-10 md:gap-15 text-white bg-purple-800/40 fixed min-w-[100vw] z-50">
                <NavLink to= "/">Inicio</NavLink>
                <NavLink to= "/videogames">Videojuegos</NavLink>
                <NavLink to= "/about">Acerca de</NavLink>
                <NavLink to="/register">Registro</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
            <main>
                <Outlet/>
            </main>
        </div>
    )
    }
    return (
        <div>
            <nav className="flex flex-wrap gap-7 justify-center p-5 text-center text-xs sm:text-lg sm:gap-10 md:gap-15 text-white bg-purple-800/40 fixed min-w-[100vw] z-50">
                <NavLink to= "/">Inicio</NavLink>
                <NavLink to= "/videogames">Videojuegos</NavLink>
                <NavLink to= "/about">Acerca de</NavLink>
                <NavLink to="/profile">Perfíl</NavLink>
            </nav>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export{
    Layout
}