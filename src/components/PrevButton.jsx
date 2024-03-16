
import React from "react";

const PrevButton = ({handleBack}) =>{
    return(
        <button className = 'button' onClick = {handleBack}>Back</button>
    );
};
export default PrevButton;