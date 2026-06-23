import { Link } from "react-router-dom"
import Card from "../components/Card"

import { RegisterForm } from "../components/RegisterForm"

function Home(){
    return(
        <div className="home">
            <div className="bannerHome">
                <img src="/src/assets/fondo_GamerHub.jpg" alt="Fondo GamerHub" />
                <h1>GamerHub</h1>
            </div>
            <RegisterForm/>
            <h2>¡Todos tus Videojuegos favoritos al alcance de un click!</h2>

            <section className="funciones">
                <Card title= "Biblioteca extensa" description= "Encuentra cualquier videojuego que busques"/>
                <Card title= "Sistema de Favs" description= "podrás asegurarte de tener a mano cualquier juego que necesites"/>
                <Card title= "En colección" description= "Lleva un registro de todos los juegos que tienes en tu colección"/>
            </section>

            <Link to= "/videogames">¡Unete a nosotros!</Link>
        
        </div>
        
    )
}

export{
    Home
}