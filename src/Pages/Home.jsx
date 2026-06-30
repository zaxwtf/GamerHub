
import Card from "../components/Card"
import { LoadVideogames } from "../components/LoadVideogames"
import { RegisterForm } from "../components/RegisterForm"

function Home(){
    return(
        <div className="flex w-[99%] flex-col items-center ">
            <div className="bannerHome ">
                <img className="w-[100vw] m-0 p-0" src="/fondo_GamerHub.jpg" alt="Fondo GamerHub" />
            </div>
            <h1 className="text-4xl font-black">¡Bienvenido a GamerHub!</h1>
            <h2 className="text-3xl my-8 font-black ml-5 mr-5 ">¡Todos tus Videojuegos favoritos al alcance de un click!</h2>
            <LoadVideogames/>
            <section className="flex flex-wrap justify-center gap-[5vw] mx-0 mt-[10px]">
                <Card title= "Biblioteca extensa" description= "Encuentra cualquier videojuego que busques, todo lo encontrarás en nuestra base de datos"/>
                <Card title= "Sistema de Favs" description= "podrás asegurarte de tener a mano cualquier juego que necesites"/>
                <Card title= "En colección" description= "Lleva un registro de todos los juegos que tienes en tu colección"/>
            </section>
            {!localStorage.getItem("token") &&
            <div><h2 className="text-3xl mt-8 font-black">¡Unete a nosotros!</h2>
            <RegisterForm/>
            </div>
            }
        
        </div>
        
    )
}

export{
    Home
}