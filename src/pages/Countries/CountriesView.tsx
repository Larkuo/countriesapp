import React from "react";
import "./CountriesView.css";
import { AppHeader } from "../../components";

interface CountriesViewProps{}

function CountriesView({

}:CountriesViewProps){
    return(
        <div id="countries-view" className="countries-view">
            <AppHeader />
        </div>
    );
}

export default CountriesView;