import { Link } from "react-router-dom"
import Card from "../components/Card"
import { LoadVideogames } from "../components/LoadVideogames"

import { RegisterForm } from "../components/RegisterForm"

function Home(){
    return(
        <div className="flex flex-col items-center ">
            <div className="bannerHome ">
                <img src="/src/assets/fondo_GamerHub.jpg" alt="Fondo GamerHub" />
                <h1>GamerHub</h1>
            </div>
            <h2 className="text-3xl my-8 font-black ">¡Todos tus Videojuegos favoritos al alcance de un click!</h2>
            <LoadVideogames/>
            <section className="flex justify-center gap-[5vw] mx-0 mt-[10px]">
                <Card title= "Biblioteca extensa" description= "Encuentra cualquier videojuego que busques"/>
                <Card title= "Sistema de Favs" description= "podrás asegurarte de tener a mano cualquier juego que necesites"/>
                <Card title= "En colección" description= "Lleva un registro de todos los juegos que tienes en tu colección"/>
            </section>

            <h2 className="text-3xl mt-8 font-black">¡Unete a nosotros!</h2>
            <RegisterForm/>
        
        </div>
        
    )
}

export{
    Home
}