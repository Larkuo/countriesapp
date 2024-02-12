import React, { useContext } from "react";
import "./AppHeader.css";
import { AppModeButton } from "../AppModeButton/AppModeButton";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../theme/ThemeContext";
import { colors } from "../../theme/theme";

interface AppHeaderProps{}

export function AppHeader({}:AppHeaderProps){
    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);

    const styles = {
        appHeader:theme === "light" ? {
            backgroundColor: colors.light.background,
            boxShadow: `${colors.light.boxShadow} 0px 2px 8px 0px`,
            color: colors.light.text
        } : {
            backgroundColor: colors.dark.background,
            boxShadow: `${colors.dark.boxShadow} 0px 2px 8px 0px`,
            color: colors.dark.text
        }
    }

    function gotoBorder(){
        navigate(`/`);
    }
    return(
        <div id="appHeader" className="app-header"  style={styles.appHeader}>
            <h2 id="appHeaderText" className="app-header-text" onClick={gotoBorder}>Where in the world?</h2>
            <AppModeButton />
        </div>
    );
}