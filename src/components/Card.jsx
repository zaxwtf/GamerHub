import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"


function Card({title, description}){
    const {theme} = useContext(ThemeContext)
    return(
        <div className={`rounded border border-black p-2 min-h-40 w-90 border-3 ${theme === "dark" ? "border-white" : "border-black"}`}>
            <h2 className="font-black text-center">{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Card