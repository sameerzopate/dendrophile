import React from 'react';
import "./EnvDetails.css";

function EnvDetails(props) {
    return (
        <div className="envDetails">
            <div className="envDetails__img">
                <img src={props.item.img.default} alt=""/>
            </div>

            <div className="envDetails__data">
                <h3>{props.item.data}</h3>
                <p>{props.item.title}</p>
            </div>
        </div>
    )
}

export default EnvDetails;