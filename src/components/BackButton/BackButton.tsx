import React from "react";
import "./BackButton.css";
import { FaArrowLeftLong } from "react-icons/fa6";

interface BackButtonProps{
    goBack: () => void;
}

export function BackButton({
    goBack,
}: BackButtonProps){
    return(
        <button className="back-button" onClick={goBack}>
            <FaArrowLeftLong className="back-icon"/>
            <span className="back-text">Back</span>
        </button>
    );
}