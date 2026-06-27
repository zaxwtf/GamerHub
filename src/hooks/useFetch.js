import { useState, useEffect } from "react";

function useFetch(url, options){
    const [data, setData] = useState(null)
    const[isLoading, setIsLoading] = useState(false)
    const[error, setError] = useState(null)

    useEffect(()=>{
        async function load() {
            try {
                setIsLoading(true)
                setError(null)
                const response = await fetch(url, options)
                if (!response.ok) throw new Error("Error en la petición")
                setData(await response.json())
            } catch (errors) {
                setError(errors.message)
            } finally{
                setIsLoading(false)
            }
        }
        load()
    }, [])
    return {data, isLoading, error}
}

export {
    useFetch
}