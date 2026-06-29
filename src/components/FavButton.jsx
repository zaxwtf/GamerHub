import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useFetch } from "../hooks/useFetch";


function FavButton({juego}) {
    const {loadProfile, token} = useAuth()
    const [usuario, setUsuario] = useState(null)
    
    useEffect(()=>{
        async function getProfile() {
            const userData = await loadProfile(token)
            setUsuario(userData)
        }
        getProfile()
    }, [])

    return(
        <button onClick={usuario?.user.juegosFav.includes(juego) ? useFetch("https://backendproyect-m2.onrender.com/api/usuarios/profile/favs/delete", {method: "DELETE", headers: {'Content-Type': 'application/json'}, body: JSON.stringify({gameId: juego})}) : "Guardar en favoritos"} className="bg-red-500">{usuario?.user.juegosFav.includes(juego) ? "Quitar de favoritos" : "Guardar en favoritos"}</button>
    )
}
export{
    FavButton
}