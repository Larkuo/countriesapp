import React, { useEffect, useState } from "react";
import "./CountriesPage.css";
import { 
    AppHeader,
    CountryCard,
    FilterDropdown,
    SearchBar,
} from "../../components";


export function CountriesPage(){

    const [countries, setCountries] = useState<any>([]);
    const [renderCountries, setRenderCountries] = useState<any>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterRegion, setFilterRegion] = useState("");

    function searchAndFilter(){
        if(filterRegion !== "" && searchTerm !== ""){
            const searchFilterCountries = countries.filter((country: any) => 
                country.name.official.toLowerCase().includes(searchTerm.toLowerCase()) 
                && 
                country.region.toLowerCase() === filterRegion.toLowerCase()
            );

            setRenderCountries(searchFilterCountries);
        }else if(filterRegion !== ""){
            const filterCountries = renderCountries.filter((country: any) => 
                country.region.toLowerCase() === filterRegion.toLowerCase()
            );
            setRenderCountries(filterCountries);
        }else if(searchTerm !== ""){
            const searchCountries = countries.filter((country: any) => 
                country.name.official.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setRenderCountries(searchCountries);
        }else{
            setRenderCountries(countries);
        }
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                setCountries(data);
                setRenderCountries(data);
            });

        return () => {
            setSearchTerm("");
            setFilterRegion("");
        }
    }, []);

    useEffect(() => {
        searchAndFilter();
    }, [searchTerm, filterRegion]);

    return(
        <div id="countriesView" className="countries-view">
            <AppHeader />
            <div id="searchFilterBar" className="search-filter-bar">
                <SearchBar search={(term) => setSearchTerm(term)}/>
                <FilterDropdown filter={(region) => setFilterRegion(region)} />
            </div>
            <div className="countries-list">
                {renderCountries.length > 0 && renderCountries.map((country: any, index: number) => 
                    <CountryCard 
                        key={index}
                        name={country.name.official}
                        flagImage={country.flags.png} 
                        population={country.population} 
                        region={country.region} 
                        capital={country.capital && country.capital[0]}
                        gotoCountry={() => {}}
                    />
                )}
            </div>
        </div>
    );
}
