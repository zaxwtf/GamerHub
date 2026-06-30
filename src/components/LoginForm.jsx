import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function LoginForm({className}){
    const [data, setData] = useState({email:"", password:""})
    const {login} = useAuth()
    const [errors, setErrors] = useState({})
    const[isLoading, setIsLoading] = useState(false)

    function handleChange(e){
        const {name, value} = e.target
        setData((prev)=>({...prev, [name]: value}))
    }
    const navigate = useNavigate()

    async function handleSubmit(e){
        
        e.preventDefault()
        setErrors(null)
        setIsLoading(true)
        try {
            await login(data.email, data.password)
            navigate("/profile")
        } catch (errors) {
            setErrors(errors.message)
        }finally{
            setIsLoading(false)
        }
        const foundedErrors = validate(data)
        setErrors(foundedErrors)

    }

    function validate(data){
        const errors = {}

        if (!data.email.includes("@")) errors.email = "email no valido"
        if (data.password.length < 6) errors.password = "La contraseña debe tener mas de 6 caracteres"

        return errors
    }
    
    if (isLoading) return(<p className={className}>Cargando...</p>)

    return(
        <div className={className}>
        <h1 className="text-3xl font-black text-center">Iniciar sesión</h1>
        <form onSubmit={handleSubmit} className={`mx-auto flex max-w-md flex-col gap-4 p-6`}>
            <div className="flex flex-col gap-1">
                <label className="text-xl">Email</label>
                <input onChange={(e)=> setData({...data, email: e.target.value})} type="email" name="email" value={data.email} className="rounded border border-gray-300 px-3 hover:border-purple-500 focus:outline-purple-500" />
                
                <label className="text-xl">Password</label>
                <input onChange={(e)=> setData({...data, password: e.target.value})} type="password" name="password" value={data.password} className="rounded border border-gray-300 px-3 hover:border-purple-500 focus:outline-purple-500" />
                
                <button className="rounded border border-purple-500 px-3 mt-6 hover:bg-purple-600 transition duration-400">Enviar</button>
                
            </div>
        </form>
        </div>
        
    )
}

export{
    LoginForm
}