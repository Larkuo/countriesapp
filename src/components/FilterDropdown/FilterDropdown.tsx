import React, { useState } from "react";
import "./FilterDropdown.css";
import { 
    FaChevronDown,
    FaChevronUp 
} from "react-icons/fa";

interface FilterDropdownProps{
    filter: (value: string) => void;
}

export function FilterDropdown({
    filter
}: FilterDropdownProps){
    const FILTER_DATA=["Filter by Region", "Africa", "America", "Asia", "Europe", "Oceanica"];

    const [showRegions, setShowRegions] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

    function toggleShowRegions(){
        setShowRegions(!showRegions);
    }

    return(
        <div className="filter-container">
            <div className="filter" onClick={toggleShowRegions}>
                <span className="filter-text">{selectedRegion}</span>
                {showRegions?
                    <FaChevronUp className="filter-icon"/> : <FaChevronDown className="filter-icon"/>
                }
            </div>
            {showRegions &&
                <div className="filter-list">
                    {FILTER_DATA.map((data, index) => {
                        return(
                            <div 
                                key={index}
                                className="list-option" 
                                onClick={() => {
                                    setSelectedRegion(data);
                                    filter(data.toLowerCase());
                                    toggleShowRegions();
                                }}
                            >
                                <span className="filter-text">{data}</span>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    );
}