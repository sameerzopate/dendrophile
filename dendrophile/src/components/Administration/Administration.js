import React from 'react';
import AdminButtons from './AdminButtons';
import './Administration.css';

function Administration() {
    return (
        <div className="administration">
            <div>
                <h1>Administration</h1>
                <hr />
            </div>

            <div className="administration__buttons">
                <AdminButtons name="addcompany"/>
                <AdminButtons name="viewcompany"/>
                <AdminButtons name="addwastecollector"/>
                <AdminButtons name="viewwastecollector"/>
                <AdminButtons name="totalwastegeneration"/>
                <AdminButtons name="totalwastecollection"/>
                </div>
        </div>
    )
}

export default Administration;