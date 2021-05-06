import React from 'react';
import "./SearchCompany.css";

function SearchCompany() {
    return (
        <div className="searchCompany">
            <form>
                <input type="select" placeholder="Select Division" />
                <input type="select" placeholder="Select Type of Waste" />
                <input type="select" placeholder="Select Timeline" />
                <br/>
                <input type="button" value="Search" className="searchCompany__submit"/>
            </form>
        </div>
    )
}

export default SearchCompany;