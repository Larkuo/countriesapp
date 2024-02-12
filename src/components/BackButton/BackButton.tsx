import React, { useContext } from "react";
import "./BackButton.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ThemeContext } from "../../theme/ThemeContext";
import { colors } from "../../theme/theme";

interface BackButtonProps{
    goBack: () => void;
}

export function BackButton({
    goBack,
}: BackButtonProps){
    const {theme} = useContext(ThemeContext);

    const styles = {
        backButton:theme === "light" ? {
            backgroundColor: colors.light.background,
            boxShadow: `${colors.light.boxShadow} 0px 2px 8px 0px`,
            color: colors.light.text
        } : {
            backgroundColor: colors.dark.background,
            boxShadow: `${colors.dark.boxShadow} 0px 2px 8px 0px`,
            color: colors.dark.text
        },
        backIcon:theme === "light" ? {
            color: colors.light.text
        } : {
            color: colors.dark.text
        },
        backText:theme === "light" ? {
            color: colors.light.text
        } : {
            color: colors.dark.text
        }
    }
    
    return(
        <button className="back-button" onClick={goBack} style={styles.backButton}>
            <FaArrowLeftLong className="back-icon" style={styles.backIcon}/>
            <span className="back-text" style={styles.backText}>Back</span>
        </button>
    );
}