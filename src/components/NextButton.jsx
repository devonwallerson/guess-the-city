import React from "react";

const NextButton = ({handleNext}) =>{
    return(
        <button className = 'button' onClick = {handleNext}>Next</button>
    );
};
export default NextButton;