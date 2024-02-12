import React, { useContext, useState } from "react";
import "./FilterDropdown.css";
import { 
    FaChevronDown,
    FaChevronUp 
} from "react-icons/fa";
import { ThemeContext } from "../../theme/ThemeContext";
import { colors } from "../../theme/theme";

interface FilterDropdownProps{
    filter: (region: string) => void;
}

export function FilterDropdown({
    filter
}: FilterDropdownProps){
    const FILTER_DATA=["Filter by Region", "Africa", "America", "Asia", "Europe", "Oceanica"];

    const {theme} = useContext(ThemeContext);

    const [showRegions, setShowRegions] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

    function toggleShowRegions(){
        setShowRegions(!showRegions);
    }

    const styles = {
        filter:theme === "light" ? {
            backgroundColor: colors.light.background,
            boxShadow: `${colors.light.boxShadow} 0px 2px 8px 0px`,
            color: colors.light.text
        } : {
            backgroundColor: colors.dark.background,
            boxShadow: `${colors.dark.boxShadow} 0px 2px 8px 0px`,
            color: colors.dark.text,
        },
        filterIcon:theme === "light" ? {
            color: colors.light.text,
            fontSize: '14px'
        } : {
            color: colors.dark.text,
            fontSize: '14px'
        },
        filterList:theme === "light" ? {
            backgroundColor: colors.light.background,
            boxShadow: `${colors.light.boxShadow} 0px 2px 8px 0px`,
            color: colors.light.text
        } : {
            backgroundColor: colors.dark.background,
            boxShadow: `${colors.dark.boxShadow} 0px 2px 8px 0px`,
            color: colors.dark.text,
        }
    }

    return(
        <div className="filter-container">
            <div className="filter" onClick={toggleShowRegions} style={styles.filter}>
                <span className="filter-text">{selectedRegion}</span>
                {showRegions?
                    <FaChevronUp className="filter-icon" style={styles.filterIcon}/> 
                    :
                    <FaChevronDown className="filter-icon" style={styles.filterIcon}/>
                }
            </div>
            {showRegions &&
                <div className="filter-list" style={styles.filterList}>
                    {FILTER_DATA.map((data, index) => {
                        return(
                            <div 
                                key={index}
                                className="list-option" 
                                onClick={() => {
                                    setSelectedRegion(data);
                                    if(data === "Filter by Region"){
                                        filter("");
                                    }else{
                                        filter(data.toLowerCase());
                                    }
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