import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

function LoginForm({className}){
    const [data, setData] = useState({email:"", password:""})
    const {login} = useAuth
    const [res, setRes] = useState(null)
    const [errors, setErrors] = useState({})
    const[isLoading, setIsLoading] = useState(false)

    function handleChange(e){
        const {name, value} = e.target
        setData((prev)=>({...prev, [name]: value}))
        console.log(name, value)
    }

    async function handleSubmit(e){
        e.preventDefault()
        setErrors(null)
        setIsLoading(true)
        try {
            await login(data.email, data.password)
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
    
        

    return(
        <form onSubmit={handleSubmit} className={`mx-auto flex max-w-md flex-col gap-4 p-6 ${className}`}>
            <div className="flex flex-col gap-1">
                <label className="text-xl">Email</label>
                <input onChange={handleChange} type="email" name="email" value={data.email} className="rounded border border-gray-300 px-3 hover:border-purple-500 focus:outline-purple-500" />
                {errors.email && <span>{errors.email}</span>}
                <label className="text-xl">Password</label>
                <input onChange={handleChange} type="password" name="password" value={data.password} className="rounded border border-gray-300 px-3 hover:border-purple-500 focus:outline-purple-500" />
                {errors.password && <span>{errors.password}</span>}
                <button className="rounded border border-purple-500 px-3 mt-6 hover:bg-purple-600 transition duration-400">Enviar</button>
                {!errors && res && <p>Login correcto</p>}
            </div>
        </form>
    )
}

export{
    LoginForm
}