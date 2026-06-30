import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useFetch } from "../hooks/useFetch";


function FavButton({juegoID}) {
    const {loadProfile, token} = useAuth()
    const [usuario, setUsuario] = useState(null)
    
    useEffect(()=>{
        async function getProfile() {
            const userData = await loadProfile(token)
            setUsuario(userData)
        }
        getProfile()
    }, [])

    function inFav(){
        return usuario?.user.juegosFav.includes(juegoID)
    }

    function deleteGameFav(){
        const {data, isLoading, error} = useFetch("https://backendproyect-m2.onrender.com/api/usuarios/profile/favs/delete", {method: "DELETE", headers: {'Content-Type': 'application/json'}, body: JSON.stringify({gameId: juegoID})})
    }

    async function handleFavGames() {
        inFav() ? useFetch("https://backendproyect-m2.onrender.com/api/usuarios/profile/favs/delete", {method: "DELETE", headers: {'Content-Type': 'application/json'}, body: JSON.stringify({gameId: juegoID})}) : "Guardar en favoritos"
    }

    

    return(
        <button className="bg-purple-500 border-2 rounded-lg p-1 hover:bg-purple-700">
            {inFav() ? "Quitar de favoritos" : "Guardar en favoritos"}
        </button>
    )
}
export{
    FavButton
}