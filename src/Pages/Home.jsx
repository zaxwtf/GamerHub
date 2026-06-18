import Card from "../components/Card"



function Home(){
    return(
        <>
        <h1>GamerHub</h1>
        <h2>¡Todos tus Videojuegos favoritos al alcance de un click!</h2>

        <section className="funciones">
            <Card title= "Biblioteca extensa" description= "Encuentra cualquier videojuego que busques"/>
            <Card title= "Sistema de Favs" description= "podrás asegurarte de tener a mano cualquier juego que necesites"/>
            <Card title= "En colección" description= "Lleva un registro de todos los juegos que tienes en tu colección"/>
        </section>
        
        </>
        
    )
}

export{
    Home
}