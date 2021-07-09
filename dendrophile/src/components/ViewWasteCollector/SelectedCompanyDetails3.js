import React from 'react'





function SelectedCompanyDetails3() {

    return (
        <div>

            <div className='AddWasteCollector'>
                <div className='AddWasteCollector-name-box'>
                    <p>Add Waste Collector</p>
                </div>
            </div>

            <div className='Add-Company-body'>
                <div className='box4'>

                    <div className='Company-Details-Name-box'>
                        <p>Company Details</p>
                    </div>

                    <div className='form-box'>

                        <div className='above-line'>

                            <form className='Forms-zone'>

                                

                                
                                        <div className='left-forms-box'>
                                            <div className='left-forms'>

                                                <div className='Name-of-the-Company common-class'>
                                                    <label className='all-labels'>Name of the Company</label>
                                                    <input type='text'/>
                                                </div>

                                                <div className='Name common-class'>
                                                    <label className='all-labels'>Name</label>
                                                    <input type='text'/>
                                                </div>

                                                <div className='Designation common-class'>
                                                    <label className='all-labels'>Designation</label>
                                                    <input type='text'/>
                                                </div>

                                                <div className='Contact-No common-class'>
                                                    <label className='all-labels'>Contact No.</label>
                                                    <input type='number'/>
                                                </div>

                                                <div className='GST-No common-class'>
                                                    <label className='all-labels'>GST No.</label>
                                                    <input type='number'/>
                                                </div>

                                                
                                            </div>

                                        </div>

                                        

                                        <div className='right-forms'>

                                            <div className='Address common-class'>
                                                <label className='all-labels'>Address</label>
                                                <input type='text'/>
                                            </div>

                                            <div className='Area common-class'>
                                                <label className='all-labels'>Area</label>
                                                <input type='text'/>
                                            </div>

                                            <div className='City common-class'>
                                                <label className='all-labels'>City</label>
                                                <select >
                                                    <option>Select</option>
                                                </select>
                                            </div>

                                            <div className='State common-class'>
                                                <label className='all-labels'>State</label>
                                                <select >
                                                    <option>Select</option>
                                                </select>
                                            </div>

                                            <div className='Pincode common-class'>
                                                <label className='all-labels'>Pincode</label>
                                                <input type='number'/>
                                            </div>

                                            
                                        </div>

                                

                                
                            </form>
                            
                            <div className='horizontal-line'></div>

                            <form className='below-form'>

                                <div className='left-side-below-form'>
                                    <div className='Timeline common-class4'>

                                        <label className='WasteManagementDetails-all-labels'>Type</label>

                                        <div className='checkboxes2'>

                                            <div className='top-checkbox'>
                                                <label className='Daily' >Collector</label>
                                                <input type='checkbox'/>
                                                <label className='Weekly'>Recycler</label>
                                                <input type='checkbox'/>
                                            </div>

                                            

                                        </div>


                                    </div>

                                    
                                    <div className='Name-of-the-Company common-class common-class4'>
                                        <label className='all-labels'>Collector Name</label>
                                        <input type='text' className='Collector-Name'/>
                                    </div>

                                    <div className='Name-of-the-Company common-class common-class4'>
                                        <label className='all-labels'>Vehicle Name</label>
                                        <input type='text' className='Vehicle-Name'/>
                                    </div>

                                    <div className='Name-of-the-Company common-class common-class4'>
                                        <label className='all-labels'>Vehicle Type</label>
                                        <input type='text' className='Vehicle-Type'/>
                                    </div>

                                </div>

                                <div className='right-side-below-form'>

                                    <div className='first-form-on-right common-class4'>
                                        <div className="Type-of-Waste-Weight-Price-box">
                                            <label>Type of Waste, Weight & Price</label>
                                        </div>

                                        <select className='select-type' >
                                            <option>Select</option>
                                            <option>Wet</option>
                                            <option>Dry</option>
                                        </select>

                                        <input type='text' className='weight'/>
                                        
                                        <input type='number' className='Price'/>

                                        <div className='plus-button' >
                                            <button>+</button>
                                        </div>

                                    </div>

                                    <div className='common-class common-class4'>
                                        <label className='Collected-By'>Collected By</label>
                                        <select className='sam1'>
                                            <option>Select</option>
                                        </select>
                                    </div>

                                    <div className='common-class common-class4'>
                                        <label className='Vehicle-Number'>Vehicle Number</label>
                                        <input type='text' className='sam2'/>
                                    </div>

                                    <div className='Add-Vehical'>
                                        <p>Add Vehical</p>
                                        <button>+</button>
                                    </div>
                                    
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <div className='Edit-and-Remove-buttons'>
                <button className='ER-Button'>Edit</button>
            
                <button className='ER-Button'>Remove</button>
            </div>
        

        </div>
    )
}

export default SelectedCompanyDetails3