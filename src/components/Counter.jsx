import { useContext} from "react"
import { ThemeContext } from "../context/ThemeContext"



function Counter(){
    const {theme, setTheme} = useContext(ThemeContext)

    return(
        <button onClick={()=>{
            setTheme(theme === "light" ? "dark" : "light") 
        }}>
            Tema actual: {theme}
        </button>
    )
}

export default Counter