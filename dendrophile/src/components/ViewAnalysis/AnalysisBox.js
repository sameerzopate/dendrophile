import React from 'react';
import "./AnalysisBox.css";

function AnalysisBox(props) {
    console.log(props);
    return (
        <div className="analysisBox" style={{background:props.color}}>
            <h3>{props.title}</h3>
            
            <div>
                <p>{props.date}</p>
                <p>{props.weight} kg</p>
            </div>
        </div>
    )
}

export default AnalysisBox;