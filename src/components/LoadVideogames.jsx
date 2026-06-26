import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function LoadVideogames(){
        const [videogames, setVideogames] = useState(null)
        const [isLoading, setIsLoading] = useState(false)
        const [error, setError] = useState(null)

        const API = import.meta.env.VITE_API_URL
    
        useEffect(()=>{
            async function load() {
                try {
                    setIsLoading(true)
                    setError(null)
                    const response = await fetch(`${API}/juegos/`)
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
            <div className="flex h-75 w-[90vw] overflow-x-auto no-scrollbar"> 
                {isLoading && <p>Cargando...</p>}
                {error && <p>Error:</p>}
                {!error && !isLoading && (
                    <div className="flex  gap-5 animate-infinite-scroll pr-5">
                        {videogames?.map((videogame)=>{
                            if (videogames.indexOf(videogame) < 20){
                                console.log(videogame)
                            return <Link className="" to={`/videogames/${videogame._id}`} key={videogame._id}>
                                <img className="h-70 min-w-60 " src={videogame.img} alt={videogame.nombre} />
                                </Link>}
                        })}
                        {videogames?.map((videogame)=>{
                            if (videogames.indexOf(videogame) < 20){
                                console.log(videogame)
                            return <Link className="" to={`/videogames/${videogame._id}`} key={videogame._id}>
                                <img className="h-70 min-w-60 " src={videogame.img} alt={videogame.nombre} />
                                </Link>}
                        })}
                    </div>
                        
                )}
                
            </div>
        )
    
    }


export{
    LoadVideogames
}