import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header(){
    const{theme} = useContext(ThemeContext)

    return(
        <header className={theme}>Mi app {theme}</header>
    )
}

export{
    Header
}