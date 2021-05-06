import React from 'react';
import Chart from "react-google-charts";
import SearchCompany from "./SearchCompany";
import DivisionPie from "./DivisionPie";
import "./ViewCompany.css";

function ViewCompany() {
    return (
        <div className="viewCompany">
            <div>
                <h1>Nirma</h1>
                <hr />
            </div>

            <div>
                <SearchCompany />

                <div className="searchCompany__main">
                    <div className="searchCompany__main--division1">
                        <h3>Division-1</h3>

                        <div className="searchCompany__main--chart">
                            <Chart
                                className="searchCompany__main--chart--line"
                                chartType="Line"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    [
                                        {type: 'date', label: 'Day'},
                                        'Wet',
                                        'Paper',
                                        'Plastic',
                                        'Cans',
                                    ],
                                    [new Date(2014, 0), 5, 5.7, 10, 15],
                                    [new Date(2014, 1), 0.4, 8.7, 10, 12],
                                    [new Date(2014, 2), 0.5, 12, 8, 12],
                                    [new Date(2014, 3), 2.9, 15.3, 7, 10],
                                    [new Date(2014, 4), 6.3, 18.6, 15, 20],
                                    [new Date(2014, 5), 9, 20.9, 11, 9],
                                    [new Date(2014, 6), 10.6, 19.8, 1.6, 2.5],
                                    [new Date(2014, 7), 10.3, 16.6, 2.6, 8.5],
                                    [new Date(2014, 8), 7.4, 13.3, 6.5, 8.9],
                                    [new Date(2014, 9), 4.4, 9.9, 5.6, 5.2],
                                    [new Date(2014, 10), 1.1, 6.6, 6.3, 4.2],
                                    [new Date(2014, 11), 0.2, 4.5, 10, 12],
                                ]}
                            />

                            <Chart
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
                                    is3D: true,
                                }}
                                rootProps={{ 'data-testid': '1' }}
                            />
                        </div>
                    </div>  

                    <div className="searchCompany__main--divisions">
                        <DivisionPie name="Division-1" data={[
                                ['Task', 'Hours per Day'],
                                ['Wet', 257],
                                ['Paper', 134.6],
                                ['Plastic', 120.2],
                                ['Cans', 132.2],
                           ]}
                        />

                        <DivisionPie name="Division-2" data={[
                                ['Task', 'Hours per Day'],
                                ['Wet', 257],
                                ['Paper', 134.6],
                                ['Plastic', 320.2],
                                ['Cans', 132.2],
                            ]}
                        />

                        <DivisionPie name="Division-3" data={[
                                ['Task', 'Hours per Day'],
                                ['Wet', 257],
                                ['Paper', 234.6],
                                ['Plastic', 120.2],
                                ['Cans', 132.2],
                            ]}
                        />

                        <DivisionPie name="Division-4" data={[
                                ['Task', 'Hours per Day'],
                                ['Wet', 257],
                                ['Paper', 134.6],
                                ['Plastic', 120.2],
                                ['Cans', 192.2],
                            ]}
                        />
                    </div>               
                </div>
            </div>
        </div>
    )
}

export default ViewCompany;