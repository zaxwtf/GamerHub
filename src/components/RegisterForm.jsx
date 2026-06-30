import { useState } from "react";

function RegisterForm({className}){
    const [data, setData] = useState({userName:"", email:"", password:"", juegosFav:[]})
    const [res, setRes] = useState(null)
    const [errors, setErrors] = useState({})

    function handleChange(e){
        const {name, value} = e.target
        setData((prev)=>({...prev, [name]: value}))
        console.log(name, value)
    }

    function handleSubmit(e){
        e.preventDefault()
        const foundedErrors = validate(data)
        setErrors(foundedErrors)
        sendRegister()

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
                const datos = await response.json()
                setRes(datos)
            } catch (error) {
            setErrors(error.message)
        }
        }
        

    return(
        <div className={className}>
        <h1 className="text-3xl font-black text-center">Registrarse</h1>
        <form onSubmit={handleSubmit} className={`mx-auto flex max-w-md flex-col gap-4 p-6 `}>
            <div className="flex flex-col gap-1">
                <label className="text-xl">userName</label>
                <input onChange={handleChange} type="text" name="userName" value={data.userName} className="rounded border border-gray-300 px-3 hover:border-purple-500 focus:outline-purple-500"/>
                {errors.name && <span>{errors.name}</span>}
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
        </div>
        
    )
}

export{
    RegisterForm
}