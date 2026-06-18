import { useEffect, useState } from "react"

function EffectPage(){
    const [characters, setCharacters] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)

    useEffect(()=>{
        async function load() {
            try {
                setIsLoading(true)
                setError(null)
                const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
                if (!response.ok) throw new Error("No se pudo cargar el personaje")
                const data = await response.json()
                setCharacters(data.results)
            } catch (error) {
                setError(error.message)
            }finally{
                setIsLoading(false)
            }
        }
        load()
    }, [page])



    return(
        <div>
            <div>
                <button onClick={()=>{setPage(page - 1)}} disabled= {page === 1}>Anterior</button>
                <span>Página {page}</span>
                <button onClick={()=>{setPage(page + 1)}}>Siguiente</button>
            </div>
            {isLoading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
            {!error && !isLoading && (
                <ul>
                    {console.log(characters)}
                    {characters?.map((character)=>{
                        return <li key={character.id}>{character.name}</li>
                    })}
                </ul>
            )}
        </div>
    )

}


export{
    EffectPage
}