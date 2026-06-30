import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function RegisterForm({className}){
    const [data, setData] = useState({userName:"", email:"", password:"", juegosFav:[]})
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const {login} = useAuth()

    function handleChange(e){
        const {name, value} = e.target
        setData((prev)=>({...prev, [name]: value}))
        console.log(name, value)
    }

    function handleSubmit(e){
        e.preventDefault()
        const foundedErrors = validate(data)
        console.log(foundedErrors)
        setErrors(foundedErrors)
        console.log(data)
        if (Object.keys(errors).length === 0) sendRegister()

    }

    function validate(data){
        const errors = {}

        if (!data.userName.trim()) errors.name = "el nombre de usuario es obligatorio"
        if (data.userName.trim().length > 20) errors.name = "el nombre de usuario no puede tener mas de 20 caracteres"
        if (!data.email.includes("@")) errors.email = "email no valido"
        if (data.password.length < 6) errors.password = "La contraseña debe tener mas de 6 caracteres"

        return errors
    }

    
    

        async function sendRegister() {
            try {
                const response = await fetch(`https://backendproyect-m2.onrender.com/api/usuarios/crear`, {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(data)
                })
                if (!response.ok) throw new Error("error al enviar datos de registro")
                await login(data.email, data.password)
                navigate("/profile")
            } catch (error) {
                console.log(error)
            setErrors(error)
        }
        }
        

    return(
        <div className={className}>
        <h1 className="text-3xl font-black text-center">Registrarse</h1>
        <form onSubmit={handleSubmit} className={`mx-auto flex max-w-md flex-col gap-4 p-6 `}>
            <div className="flex flex-col gap-1">
                <label className="text-xl">userName</label>
                <input onChange={handleChange} type="text" name="userName" value={data.userName} className="rounded border border-gray-300 px-3 hover:border-purple-500 focus:outline-purple-500"/>
                {errors.name && <span className="text-red-500">{errors.name}</span>}
                <label className="text-xl">Email</label>
                <input onChange={handleChange} type="email" name="email" value={data.email} className="rounded border border-gray-300 px-3 hover:border-purple-500 focus:outline-purple-500" />
                {errors.email && <span className="text-red-500">{errors.email}</span>}
                <label className="text-xl">Password</label>
                <input onChange={handleChange} type="password" name="password" value={data.password} className="rounded border border-gray-300 px-3 hover:border-purple-500 focus:outline-purple-500" />
                {errors.password && <span className="text-red-500">{errors.password}</span>}
                <button className="rounded border border-purple-500 px-3 mt-6 hover:bg-purple-600 transition duration-400">Enviar</button>
            </div>
        </form>
        </div>
        
    )
}

export{
    RegisterForm
}