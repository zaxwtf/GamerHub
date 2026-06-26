import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <div>
            <h2>{videogame.nombre}</h2>
            <img src={videogame.img} alt={videogame.nombre} />
        </div>
        )}
        
        </>
        
    )
}

export default VideogamesDetails