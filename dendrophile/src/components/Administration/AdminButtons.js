import React from 'react';
import './AdminButtons.css'
import data from './AdminData';
import {Link} from "react-router-dom";

function AdminButtons({name}) {
    console.log();
    return (
        <Link to={name} className="adminLink">
            <div className="adminbuttons">
                <img src={data[name].img.default} alt="" />
                <h3>{data[name].title}</h3>
            </div>
        </Link>
        
    )
}

export default AdminButtons;