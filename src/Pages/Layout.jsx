import { NavLink, Outlet } from "react-router-dom"



function Layout(){
    return (
        <div className="felx felx-col">
            <nav className="flex gap-15 justify-center p-5 text-center text-2xl text-white bg-purple-800/40 fixed min-w-[100vw] z-50">
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

export{
    Layout
}