import React from "react";
import "./CountryCard.css";

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
    return(
        <div className="card-container" onClick={gotoCountry}>
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