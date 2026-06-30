import { useEffect, useState } from "react"
import { useAuth } from "../hooks/useAuth"
import { GetFavGames } from "../components/GetFavGames"

export function Profile(){
    const {loadProfile, token, logout} = useAuth()
    const [usuario, setUsuario] = useState(null)
    
    useEffect(()=>{
        async function getProfile() {
            const userData = await loadProfile(token)
            setUsuario(userData)
        }
        getProfile()
    },[])



    
return(
        
        <div className="ml-5">
            <h1 className="pt-20 text-3xl font-black">¡Hola, {usuario?.user.userName}!</h1>
            <h2 className="text-xl mt-6">Lista de juegos favoritos</h2>
            <button className="border-2 rounded-lg p-1 bg-purple-500 hover:bg-purple-700 mt-2" onClick={logout}>Cerrar sesión</button>
            <div>
                <GetFavGames/>
            </div>
        </div>
    )
}