import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function About(){
    const {theme} = useContext(ThemeContext)
    return(
        <div className={`pt-17 h-[100vh] pl-5 flex flex-col gap-7 ${theme === "dark" ? "bg-neutral-900 text-white" : "bg-white"}`}>
            <h1 className="text-3xl font-black">Sobre nosotros</h1>
            <p >Somos una organización sin animo de lucro que quiere facilitarle la vida a los gamers y coleccionistas con una aplicación donde puedan encontrar cualquier juego que busquen y que puedan guardarlos para así llevar una organización de los juegos que tienen</p>
            <p>Para contactar con nostros puede hacerlo desde nuestro email: <b>contacto@gamerhub.com</b></p>
        </div>
    )
}

export{
    About
}