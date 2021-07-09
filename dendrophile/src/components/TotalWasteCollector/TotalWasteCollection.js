import React from 'react'
import PieChart from './PieChart/PieChart'
import './TotalWasteCollection.css'



function TotalWasteCollection() {
    return (
        <div className='TotalWasteCollection-module'>

            <div className='TotalWasteCollection'>
                <div className='TotalWasteCollection-name-box'>
                    <p>Total Waste Collection</p>
                </div>
            </div>

            <div className='View-Company-body1'>
                <div className='View-Company-body-box1'>
                    <form>
                        <div className='top-input-fields'>
                            <div className='City1'>
                                <select className='All-input-5'>
                                    <option>Select State</option>
                                </select>
                            </div>

                            <div className='City1'>
                                
                                <select className='All-input-5'>
                                    <option>Select City</option>
                                </select>
                            </div>

                            <div className='Pincode1'>
                                
                                <input type='number' className='All-input-5' placeholder=' Pincode'/>
                            </div>
                        </div>

                        
                        <div className='Search-button-box'>
                            <button className='Search1'>Search</button>
                        </div>
                        

                    </form>

                    

                </div>
            </div>

            
            <div className='flex-pie'> 
                <div className='left-collector-list-zone'>
                    <div className='left-collector-list-1st-box'>
                        <p>Waste Collector</p>   
                    </div>
                    <div className='left-collector-list-2nd-box'>
                        <p>Collector1</p>   
                    </div>
                    <div className='left-collector-list-3rd-box'>
                        <p>Collector2</p>   
                    </div>
                    <div className='left-collector-list-4th-box'>
                        <p>Collector3</p>   
                    </div>
                    <div className='left-collector-list-5th-box'>
                        <p>Collector4</p>   
                    </div>
                </div>

                <div className='pie-chart'>
                <PieChart />
                </div>
            </div>
            

        </div>

        
    )
}

export default TotalWasteCollection
