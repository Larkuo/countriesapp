import React from "react";
import "./AppModeButton.css";
import { HiOutlineMoon, HiMoon } from "react-icons/hi2";

interface AppModeButtonProps{}

export function AppModeButton({}:AppModeButtonProps){
    return(
        <button id="appModeButton" className="app-mode-button">
            <HiOutlineMoon id="appModeIcon" className="app-mode-icon"/>
            <span id="appModeText" className="app-mode-text">Dark Mode</span>
        </button>
    );
}