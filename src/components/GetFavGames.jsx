import { useFetch } from "../hooks/useFetch" 
import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth";

    function GetFavGames() {
        const {token} = useAuth()
        const API = import.meta.env.VITE_API_URL || "https://backendproyect-m2.onrender.com/api";
        const {data, isLoading, error} = useFetch(`${API}/usuarios/profile/favs`, {
            headers: {Authorization: `Bearer ${token}`}
        })
        if(isLoading) return <p>Cargando...</p>
        if(error) return <p>Error: {error}</p>
        return (
            <div className="flex flex-wrap">
                {data?.juegosFav.map(juego =>{
                    return(
                        <div>
                            <Link to={`/videogames/${juego?._id}`} key={data?.juegosFav.indexOf(juego)}><img width="200px" src={juego?.img} alt={juego?.nombre} /></Link>
                            <p>{juego.nombre}</p>
                        </div>
                        
                    )
                })}
            </div>
        )
    }

    export {
        GetFavGames
    }