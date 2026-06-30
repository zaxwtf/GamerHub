import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Videogames(){
        const [videogames, setVideogames] = useState(null)
        const [isLoading, setIsLoading] = useState(false)
        const [error, setError] = useState(null)
        // const [page, setPage] = useState(1)
    
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
        }, [])
    
    
    
        return(
            <div className="pt-17">
                <h1 className="text-3xl font-black pl-4">Videojuegos</h1>
                    {isLoading && <p>Cargando...</p>}
                    {error && <p>Error:</p>}
                    {!error && !isLoading && (
                        <div className="flex flex-wrap">
                            {videogames?.map((videogame)=>{
                                return <div className="w-[50vw] mt-10 sm:w-[33vw] md:w-[25vw] lg:w-[19.8vw]" key={videogame._id}>
                                    <Link to={`/videogames/${videogame._id}`}><img className="h-70" src={videogame.img} alt={videogame.nombre} /></Link>
                                    <h2 to= {`/videogames/${videogame._id}`}>{videogame.nombre}</h2>
                                    </div>
                            })}
                        </div>
                    )}
            </div>
        )
    
    }


export{
    Videogames
}