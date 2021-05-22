import React from 'react';
import data from './EnvironmentData';
import EnvDetails from './EnvDetails';
import "./SavedEnv.css";

function SavedEnv() {
    return (
        <div className="savedEnv">
            <div>
                <h2>CONGRAGULATIONS..!! You have saved</h2>
            </div>

            <div className="savedEnv__details">
                {data.map((item) => 
                    <div key={item.title}>
                        <EnvDetails item={item} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default SavedEnv;