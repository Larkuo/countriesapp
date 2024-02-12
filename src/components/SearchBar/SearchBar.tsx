import React, { useContext } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { colors } from "../../theme/theme";
import { ThemeContext } from "../../theme/ThemeContext";

interface SearchBarProps{
    search: (term: string) => void;
}

export function SearchBar({
    search
}:SearchBarProps){

    const {theme} = useContext(ThemeContext);

    const styles = {
        searchbar:theme === "light" ? {
            backgroundColor: colors.light.background,
            boxShadow: `${colors.light.boxShadow} 0px 2px 8px 0px`,
            color: colors.light.text
        } : {
            backgroundColor: colors.dark.background,
            boxShadow: `${colors.dark.boxShadow} 0px 2px 8px 0px`,
            color: colors.dark.text
        },
        searchIcon:theme === "light" ? {
            color: colors.light.inputText,
        } : {
            color: colors.dark.icon,
        },
        searchInput:theme === "light" ? {
            backgroundColor: colors.light.background,
            color: colors.light.text
        } : {
            backgroundColor: colors.dark.background,
            color: colors.dark.text,
        }
    }

    return(
        <div className="search-bar" style={styles.searchbar}>
            <FaSearch className="search-icon" style={styles.searchIcon}/>
            <input
                type="text"
                className={`search-input ${theme === "dark" && "dark-input"}`}
                style={styles.searchInput}
                placeholder="Search for a country..."
                onChange={(event) => {
                    const searchTerm = event.target.value;
                    search(searchTerm);
                }}
            />
        </div>
    );
}