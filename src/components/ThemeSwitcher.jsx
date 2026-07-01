import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeSwitcher(){
    const {theme, setTheme} = useContext(ThemeContext)
    const [icon, setIcon] = useState(localStorage.getItem("dianoche") === "dark" ? "🌙" : "☀️")

    return(
        <button className="text-xs sm:text-3xl" onClick={()=>{
            setTheme(theme === "light" ? "dark" : "light")
            setIcon(theme === "light" ? "🌙" : "☀️")
            localStorage.setItem("dianoche", theme === "light" ? "dark" : "light")
        }}>
            {icon}
        </button>
    )
}

export {
    ThemeSwitcher
}