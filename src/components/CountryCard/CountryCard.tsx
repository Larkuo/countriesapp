import React, { useContext } from "react";
import "./CountryCard.css";
import { colors } from "../../theme/theme";
import { ThemeContext } from "../../theme/ThemeContext";

interface CountryCardProps{
    name: string;
    flagImage: string;
    population: number;
    region: string;
    capital?: string;
    gotoCountry: () => void;
}

export function CountryCard({
    name,
    flagImage,
    population,
    region,
    capital,
    gotoCountry,
}:CountryCardProps){
    const {theme} = useContext(ThemeContext);

    const styles = {
        cardContainer:theme === "light" ? {
            backgroundColor: colors.light.background,
            boxShadow: `${colors.light.boxShadow} 0px 2px 8px 0px`,
            color: colors.light.text
        } : {
            backgroundColor: colors.dark.background,
            boxShadow: `${colors.dark.boxShadow} 0px 2px 8px 0px`,
            color: colors.dark.text
        },
    }
    
    return(
        <div className="card-container" onClick={gotoCountry} style={styles.cardContainer}>
            <img alt={`${name}-flag`} className="flag-image" src={flagImage} />
            <div className="text-container">
                <span className="country-name">{name}</span>
                <span className="country-info"><b>Population: </b>{population.toLocaleString("en-US")}</span>
                <span className="country-info"><b>Region: </b>{region}</span>
                {capital &&
                    <span className="country-info"><b>Capital: </b>{capital}</span>
                }
            </div>
        </div>
    );
}