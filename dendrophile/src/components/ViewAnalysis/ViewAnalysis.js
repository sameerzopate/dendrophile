import React from 'react';
import AnalysisBox from "./AnalysisBox";
import Chart from "react-google-charts";
import "./ViewAnalysis.css";

function ViewAnalysis() {
    return (
        <div className="viewAnalysis">
            <div>
                <h1>Analysis Till Date</h1>    
                <hr />
            </div>

            <div className="viewAnalysis__main">
                <div className="viewAnalysis__main--detail">
                    <AnalysisBox color="#CD3E3E" title="Red Day" date="09/01/2021" weight="60"/>
                </div>

                <div className="viewAnalysis__main--pie">
                    <Chart
                        height={'70vh'}
                        className="searchCompany__main--chart--pie"
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                                ['Task', 'Hours per Day'],
                                ['Wet', 257],
                                ['Paper', 134.6],
                                ['Plastic', 120.2],
                                ['Cans', 132.2],
                            ]}
                        options={{
                                    title: '',
                                    legend: 'none',
                                    is3D: true
                                }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>

                <div className="viewAnalysis__main--detail">
                    <AnalysisBox color="#0C8A0C" title="Green Day" date="07/01/2021" weight="27"/>
                </div>
            </div>
        </div>
    )
}

export default ViewAnalysis;