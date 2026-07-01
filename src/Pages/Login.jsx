import { LoginForm } from "../components/LoginForm"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function Login(){
    const {theme} = useContext(ThemeContext)
    return(
        <LoginForm className={`pt-20 h-[100vh] ${theme === "dark" ? "bg-neutral-900 text-white" : "bg-white"}`}/>
    )
}

export{
    Login
}