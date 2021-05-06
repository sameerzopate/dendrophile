import React from 'react';
import Chart from "react-google-charts";
import "./DivisionPie.css"

function DivisionPie(props) {
    console.log(props.data);
    return (
        <div className="divisionPie">
            <h4>{props.name}</h4>
            <div className="divisionPie__pie">
                <Chart
                    className="searchCompany__main--chart--pie"
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={props.data}
                    options={{
                        title: '',
                        legend: 'none',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        </div>
    )
}

export default DivisionPie
