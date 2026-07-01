import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function LoginForm({className}){
    const [data, setData] = useState({email:"", password:""})
    const {login} = useAuth()
    const [errors, setErrors] = useState(null)
    const[isLoading, setIsLoading] = useState(false)

    // function handleChange(e){
    //     const {name, value} = e.target
    //     setData((prev)=>({...prev, [name]: value}))
    // } Función puesta inline en el formulario siguiendo instrucciones del profesor

    const navigate = useNavigate()

    async function handleSubmit(e){
        
        e.preventDefault()
        setErrors(null)
        setIsLoading(true)
        try {
            setIsLoading(true)
            await login(data.email, data.password)
            navigate("/videogames")
        } catch (errors) {
            setErrors(errors.message)
        }finally{
            setIsLoading(false)
        }

    }
        

    return(
        <div className={className}>
        <h1 className="text-3xl font-black text-center">Iniciar sesión</h1>
        <form onSubmit={handleSubmit} className={`mx-auto flex max-w-md flex-col gap-4 p-6`}>
            <div className="flex flex-col gap-1">
                <label className="text-xl">Email</label>
                <input onChange={(e)=> setData({...data, email: e.target.value})} type="email" name="email" value={data.email} className="rounded border border-gray-300 px-3 hover:border-purple-500 focus:outline-purple-500" />
                <label className="text-xl">Password</label>
                <input onChange={(e)=> setData({...data, password: e.target.value})} type="password" name="password" value={data.password} className="rounded border border-gray-300 px-3 hover:border-purple-500 focus:outline-purple-500" />
                {errors && !isLoading && <span className="text-red-500">{errors}</span>}
                <button className="rounded border border-purple-500 px-3 mt-6 hover:bg-purple-600 transition duration-400">Enviar</button>
                
            </div>
        </form>
        </div>
        
    )
}

export{
    LoginForm
}