import { useEffect, useState } from "react"

function EffectPage(){
    const [character, setCharacter] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function load() {
            try {
                setIsLoading(true)
                const response = await fetch("https://rickandmortyapi.com/api/character/1")
                if (!response.ok) throw new Error("No se pudo cargar el personaje")
                const data = await response.json()
                setCharacter(data)
            } catch (error) {
                setError(error.message)
            }finally{
                setIsLoading(false)
            }
        }
        load()
    },[])


    if (isLoading) return <p>Cargando...</p>
    if (error) return <p>Error: {error}</p>

    return(
        <div>
            <h2>{character?.name}</h2>
            <img src={character?.image} alt={character?.name} width={200} />
        </div>
    )

}


export{
    EffectPage
}