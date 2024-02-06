import React, { useEffect, useState } from "react";
import "./CountriesPage.css";
import { 
    AppHeader,
    CountryCard,
    FilterDropdown,
    SearchBar,
} from "../../components";

const TEMP_COUNTRIES = require("./data.json");

// https://restcountries.com/v3.1/all


export function CountriesPage(){

    const [countries, setCountries] = useState<any>([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data));
    }, []);

    return(
        <div id="countriesView" className="countries-view">
            <AppHeader />
            <div id="searchFilterBar" className="search-filter-bar">
                <SearchBar search={(term) => {}}/>
                <FilterDropdown filter={(value) => {}} />
            </div>
            <div className="countries-list">
                {countries.length > 0 && countries.map((country: any, index: number) => 
                    <CountryCard 
                        key={index}
                        name={country.name.official}
                        flagImage={country.flags.png} 
                        population={country.population} 
                        region={country.region} 
                        capital={country.capital && country.capital[0]}
                    />
                )}
            </div>
        </div>
    );
}
