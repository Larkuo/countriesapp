import React from "react";
import "./AppHeader.css";
import { AppModeButton } from "../AppModeButton/AppModeButton";

interface AppHeaderProps{}

export function AppHeader({

}:AppHeaderProps){
    return(
        <div id="appHeader" className="app-header">
            <h2 id="appHeaderText" className="app-header-text">Where in the world?</h2>
            <AppModeButton />
        </div>
    );
}