import React from 'react'
import './ViewCompany.css'
function ViewCompany() {
    return (
        <div>
            <div className='View-Company'>
                <div className='View-Company-name-box'>
                    <p>View Company</p>
                </div>
            </div>

            <div className='View-Company-body'>
                <div className='View-Company-body-box'>
                    <form>
                        <div className='top-input-fields'>
                            <div className='Company-Name1'>
                                <label className='All-label-1'>Company Name</label>
                                <input type='text' className='All-input-1'/>
                            </div>

                            <div className='City1'>
                                <label className='All-label-1'>City</label>
                                <input type='text' className='All-input-1'/>
                            </div>

                            <div className='Category1'>
                                <label className='All-label-1'>Category</label>
                                <select className='All-input-1'>
                                    <option>Select</option>
                                </select>
                            </div>
                        </div>

                        <div className='bottom-input-fields'>
                            <div className='Pincode1'>
                                <label className='All-label-1'>Pincode</label>
                                <input type='number' className='All-input-1'/>
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

export default ViewCompany
