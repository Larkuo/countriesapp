import React, { useContext } from "react";
import "./AppModeButton.css";
import { HiOutlineMoon, HiMoon } from "react-icons/hi2";
import { ThemeContext } from "../../theme/ThemeContext";

interface AppModeButtonProps{}

export function AppModeButton({}:AppModeButtonProps){
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <button id="appModeButton" className="app-mode-button" onClick={toggleTheme}>
            {theme === "light" ?
                <HiOutlineMoon id="appModeIcon" className="app-mode-icon"/> 
                :
                <HiMoon id="appModeIcon" className="app-mode-icon"/>
            }
            <span id="appModeText" className="app-mode-text">Dark Mode</span>
        </button>
    );
}