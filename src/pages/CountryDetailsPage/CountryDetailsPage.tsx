import React, { useEffect, useState } from "react";
import "./CountryDetailsPage.css";
import { AppHeader, BackButton } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { BorderCountryProps, CountryDetailsProps } from "./CountryDetailsPage.props";
const countriesData = require("./data.json");

export function CountryDetailsPage(){
    const { countryCode } = useParams();
    const navigate = useNavigate();

    const EMPTY_COUNTRY_DETAILS: CountryDetailsProps = {
        name: {common: "", nativeName: {}, official: ""},
        borders: [],
        capital: [],
        currencies: {},
        flags: {png: "", svg: ""},
        languages: {},
        population: 0,
        region: "",
        subregion: "",
        tld: [],
        cca2: "",
        cca3: "",
        ccn3: "",
        cioc: ""
    }

    const [countryDetails, setCountryDetails] = useState<CountryDetailsProps>(EMPTY_COUNTRY_DETAILS);
    const [countryBorders, setCountryBorders] = useState<BorderCountryProps[]>([]);
    const [nativeName, setNativeName] = useState("");
    const [countryCurrencies, setCountryCurrenies] = useState("");
    const [pageLoading, setPageLoading] = useState(false);

    async function getCountryDetails(){
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        const data = await response.json();

        if(response.ok){
            setCountryDetails(data[0]);
        }else{
            alert('Could not get country details. Check the country code & reload the page to try again');
        }
    }

    function getNativeName(){
        const nativeNames = Object.values(countryDetails.name.nativeName);

        if(nativeNames.length > 0){
            setNativeName(nativeNames[nativeNames.length-1]["common"]);
        }
    }

    function getCountryBorders(){
        if(countryDetails.borders){
            const borderList: BorderCountryProps[] = countriesData.filter((border: any) => 
                countryDetails.borders.includes(border['alpha3Code'])).map((country: any, index: number) => {
                    return {
                        code: country['alpha3Code'],
                        name: country['name']
                    }
                });
            setCountryBorders(borderList);
        }
    }

    function getCountryCurrencies(){
        const currencies = Object.values(countryDetails.currencies);
        let currencyList: string[] = [];

        currencies.forEach((currency: any, index: number) => {
            currencyList.push(currency["name"]);
        });

        setCountryCurrenies(currencyList.join(", "));
    }

    function gotoBorder(countryCode: string){
        navigate(`/details/${countryCode}`);
    }

    useEffect(() => {
        getCountryDetails().then(() => {
            getNativeName();
            getCountryBorders()
            getCountryCurrencies();
        });
    },[countryDetails]);

    return(
        <div className="page-view">
            <AppHeader />
            <div className="back-container">
                <BackButton goBack={() => navigate(-1)}/>
                <div className="details-container">
                    <img alt={`${countryDetails.name.common}-flag`} src={countryDetails.flags.svg} className="country-image"/>
                    {!pageLoading &&
                        <div className="details-text-container">
                            <div className="text-container-top">
                                <span className="name-title">{countryDetails.name.common}</span>
                                <div className="details-section">
                                    <div className="details-left">
                                        <span className="detail-text"><b>Native Name: </b>{nativeName !== ""? nativeName : countryDetails.name.common}</span>
                                        <span className="detail-text"><b>Population: </b>{countryDetails.population.toLocaleString("en-US")}</span>
                                        <span className="detail-text"><b>Region: </b>{countryDetails.region}</span>
                                        <span className="detail-text"><b>Sub Region: </b>{countryDetails.subregion}</span>
                                        {countryDetails.capital &&
                                            <span className="detail-text"><b>Capital: </b>{countryDetails.capital[0]}</span>
                                        }
                                    </div>
                                    <div className="details-right">
                                        <span className="detail-text"><b>Top Level Domain: </b>{countryDetails.tld}</span>
                                        <span className="detail-text" id="currencies"><b>Currencies: </b>{countryCurrencies}</span>
                                        <span className="detail-text"><b>Languages: </b>{Object.values(countryDetails.languages).join(", ")}</span>
                                    </div>
                                </div>
                            </div>
                            {countryBorders.length > 0 && 
                                <div className="text-container-bottom">
                                    <b className="border-label">Border Countries: </b>
                                    <div className="borders-container">
                                        {countryBorders.map((border: BorderCountryProps, index: number) => 
                                            <button 
                                                className="border-button" 
                                                key={index} 
                                                onClick={() => gotoBorder(border.code)}
                                            >{border.name}</button>
                                        )}
                                    </div>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}