import { NavLink, Outlet } from "react-router-dom"



function Layout(){
    return (
        <div className="layout">
            <nav className="mainNav">
                | <NavLink to= "/">Inicio</NavLink> |
                <NavLink to= "/videogames"> Videojuegos</NavLink> |
                <NavLink to= "/about"> Acerca de</NavLink> |
                <NavLink to="/register">Registro</NavLink> |
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