import React from 'react'
import './ViewWasteCollector.css'

function ViewWasteCollector() {
    return (
        <div>
            <div className='View-Company'>
                <div className='View-Waste-Collector-box'>
                    <p>View Waste Collector</p>
                </div>
            </div>

            <div className='View-Company-body'>
                <div className='View-Company-body-box'>
                    <form>
                        <div className='top-input-fields'>
                            <div className='Company-Name1'>
                                
                                <input type='text' className='All-input-4' placeholder=' Enter Company Name'/>
                            </div>

                            <div className='City1'>
                                
                                <select className='All-input-4'>
                                    <option>Select City</option>
                                </select>
                            </div>

                            <div className='Category1'>
                                
                                <select className='All-input-4'>
                                    <option>Select Category</option>
                                </select>
                            </div>
                        </div>

                        <div className='bottom-input-fields'>
                            <div className='Pincode1'>
                                
                                <input type='number' className='All-input-4' placeholder='  Pincode'/>
                            </div>
                        </div>

                    </form>

                    <div className='Search-button-box'>
                        <button className='Search1'>Search</button>
                    </div>

                </div>
            </div>

            <div className='table-body'>
                <div className='table-box'>

                    <div className='table table1'>
                        <div className='table-heading table-heading1'><p>Name</p></div>
                        <div className='table-list-box'></div>
                    </div>

                    <div className='table table2'>
                        <div className='table-heading table-heading2'><p>City</p></div>
                        <div className='table-list-box'></div>
                    </div>

                    <div className='table table3'>
                        <div className='table-heading table-heading3'><p>Details</p></div>
                        <div className='table-list-box'></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ViewWasteCollector
