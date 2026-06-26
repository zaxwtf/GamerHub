import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Videogames(){
        const [videogames, setVideogames] = useState(null)
        const [isLoading, setIsLoading] = useState(false)
        const [error, setError] = useState(null)
        const [page, setPage] = useState(1)
    
        useEffect(()=>{
            async function load() {
                try {
                    setIsLoading(true)
                    setError(null)
                    const response = await fetch(`https://backendproyect-m2.onrender.com/api/juegos/`)
                    if (!response.ok) throw new Error("No se pudo cargar el videojuego")
                    const data = await response.json()
                    setVideogames(data)
                } catch (error) {
                    setError(error.message)
                }finally{
                    setIsLoading(false)
                }
            }
            load()
        }, [page])
    
    
    
        return(
            <div className="pt-20">
                <h1>Videojuegos</h1>
                    {isLoading && <p>Cargando...</p>}
                    {error && <p>Error:</p>}
                    {!error && !isLoading && (
                        <ul>
                            {videogames?.map((videogame)=>{
                                return <li><Link to= {`/videogames/${videogame._id}`} key={videogame._id}>{videogame.nombre}</Link></li>
                            })}
                        </ul>
                    )}
            </div>
        )
    
    }


export{
    Videogames
}