import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeSwitcher(){
    const {theme, setTheme} = useContext(ThemeContext)

    return(
        <button onClick={()=>{
            setTheme(theme === "light" ? "dark" : "light")
        }}>
            Cambiar de tema: {theme}
        </button>
    )
}

export {
    ThemeSwitcher
}