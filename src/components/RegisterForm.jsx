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
        <form onSubmit={handleSubmit} action="">
            <input onChange={handleChange} type="text" name="name" value={data.name}/>
            {errors.name && <span>{errors.name}</span>}
            <input onChange={handleChange} type="email" name="email" value={data.email} />
            {errors.name && <span>{errors.email}</span>}
            <input onChange={handleChange} type="password" name="password" value={data.password} />
            {errors.name && <span>{errors.password}</span>}
        </form>
    )
}

export{
    RegisterForm
}