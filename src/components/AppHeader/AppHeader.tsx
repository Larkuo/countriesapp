import React from "react";
import "./AppHeader.css";
import { AppModeButton } from "../AppModeButton/AppModeButton";
import { useNavigate } from "react-router-dom";

interface AppHeaderProps{}

export function AppHeader({

}:AppHeaderProps){
    const navigate = useNavigate();
    
    function gotoBorder(){
        navigate(`/`);
    }
    return(
        <div id="appHeader" className="app-header" onClick={gotoBorder}>
            <h2 id="appHeaderText" className="app-header-text">Where in the world?</h2>
            <AppModeButton />
        </div>
    );
}