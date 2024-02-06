import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps{
    search: (term: string) => void;
}

export function SearchBar({
    search
}:SearchBarProps){
    return(
        <div className="search-bar">
            <FaSearch className="search-icon"/>
            <input
                type="text"
                className="search-input"
                placeholder="Search for a country..."
                onChange={(event) => {
                    const searchTerm = event.target.value;
                    search(searchTerm);
                }}
            />
        </div>
    );
}