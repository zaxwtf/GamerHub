import { RegisterForm } from "../components/RegisterForm"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function Register(){
    const {theme} = useContext(ThemeContext)
    return(
        <RegisterForm className={`pt-20 h-[100vh] ${theme === "dark" ? "bg-neutral-900 text-white" : "bg-white"}`}/>
    )
}

export{
    Register
}