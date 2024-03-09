import React, { useState } from "react";
 
const Flashcard = ({city, flipped, handleFlip}) => {

    const changeTheColor = (difficulty) => {
        switch(difficulty){
            case 'easy' :
                return 'green';
            case 'medium' :
                return 'orange';
            case 'hard':
                return 'red';
            default:
                return "#EEE";
        }
    };

    const backgroundColor = changeTheColor(city.difficulty);

    return(
        <div className = 'flashcard-hold' onClick = {handleFlip} style = {{ backgroundColor: backgroundColor}}>
            <div className = "flashcard">
                {flipped ? (
                    <div className = "answer">
                        <h2>{city.city}</h2>
                    </div>
                ) : (
                    <img className = "cityPhoto" alt = "City Skyline" src = {city.photo}></img>
                )}
            </div>
        </div>
    );
};

export default Flashcard;