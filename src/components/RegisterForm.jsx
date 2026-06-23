import { useState } from "react";

function RegisterForm(){
    const [data, setData] = useState({name:"", email:"", password:""})
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

    }

    function validate(data){
        const errors = {}

        if (!data.name.trim()) errors.name = "el nombre es obligatorio"
        if (!data.email.includes("@")) errors.email = "email no valido"
        if (data.password.length < 6) errors.password = "La contraseña debe tener mas de 6 caracteres"

        return errors
    }

    return(
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4 p-6 bg-white">
            <div className="flex flex-col gap-1">
                <label className="text-xl">Name</label>
                <input onChange={handleChange} type="text" name="name" value={data.name} className="rounded border border-gray-300 px-3 hover:border-purple-500 focus:outline-purple-500"/>
                {errors.name && <span>{errors.name}</span>}
                <label className="text-xl">Email</label>
                <input onChange={handleChange} type="email" name="email" value={data.email} className="rounded border border-gray-300 px-3 hover:border-purple-500 focus:outline-purple-500" />
                {errors.email && <span>{errors.email}</span>}
                <label className="text-xl">Password</label>
                <input onChange={handleChange} type="password" name="password" value={data.password} className="rounded border border-gray-300 px-3 hover:border-purple-500 focus:outline-purple-500" />
                {errors.password && <span>{errors.password}</span>}
                <button className="rounded border border-purple-500 px-3 mt-6 hover:bg-purple-600 transition duration-400">Enviar</button>
            </div>
        </form>
    )
}

export{
    RegisterForm
}