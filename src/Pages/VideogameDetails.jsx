import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FavButton } from "../components/FavButton";

function VideogamesDetails(){
    const {id} = useParams()
    const [videogame, setVideogame] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    

    useEffect(()=>{
        async function load() {
            try {
                setIsLoading(true)
                const response = await fetch(`https://backendproyect-m2.onrender.com/api/juegos/${id}`)
                if(!response.ok) throw new Error("No se pudo cargar el videojuego")
                setVideogame(await response.json())
            console.log(await videogame)
            } catch (error) {
                setError(error)
            } finally{
                setIsLoading(false)
            }
        }
        load()
    }, [id])

    return (
        <>
        {isLoading && <p>Cargando...</p>}
        {error && <p>Error: {error}</p>}
        {!isLoading && !error && (
        <div className="pt-17 flex flex-col items-center gap-4">
            <h2 className="text-2xl font-black">{videogame.nombre}</h2>
            <img className="h-80" src={videogame.img} alt={videogame.nombre} />
            <FavButton juego={videogame._id}></FavButton>
            <h2 className="text-xl font-black"> Descripción</h2>
            <p className="m-3">{videogame.description}</p>
        </div>
        )}
        
        </>
        
    )
}

export default VideogamesDetails