import { useState } from "react";
import { useAuth } from "../hooks/useAuth";


function FavButton({gameId, favValue}) {
    const {token} = useAuth()
    const [isFav, setIsFav] = useState(favValue)
    
    

        async function toogleFav(){
            const url = isFav ? "https://backendproyect-m2.onrender.com/api/usuarios/profile/favs/delete" : "https://backendproyect-m2.onrender.com/api/usuarios/profile/favs"
            const method = isFav ? "DELETE" : "POST"
            const response = await fetch(url, {
            method: method,
            headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
            body: JSON.stringify({gameId})
        })
        if (!response.ok) throw new Error("Credenciales incorrectas")
            setIsFav(!isFav)
        }

    

    return(
        <button onClick={toogleFav} className="bg-purple-500 border-2 rounded-lg p-1 hover:bg-purple-700">
            {isFav ? "Quitar juego de favoritos" : "Agregar juego a favoritos"}
        </button>
    )
}
export{
    FavButton
}