import React from 'react'
import './WasteManagementDetails.css'
import { Link } from 'react-router-dom';

function WasteManagementDetails() {
    return (
        <div>
            {/* most css styles of this module are from CompanyDetails.css file */}
            <div className='Add-Company'>
                <div className='Add-Company-name-box'>
                    <p>Add Company</p>
                </div>
            </div>
            <div className='Add-Company-body'>
                <div className='box'>
                    <div className='WasteManagementDetails-heading'>
                        <div className='WasteManagementDetails-heading-box'>
                            <p>Waste Management Details</p>
                        </div>
                    </div>
                    <div className='WasteManagementDetails-body'>
                        <div className='WasteManagementDetails-form-box'>
                            <form className='WasteManagementDetails-Forms-zone'>
                                <div className='WasteManagementDetails-left-forms-box'>
                                    <div className='WasteManagementDetails-left-forms'>

                                        <div className='Email-ID common-class2'>
                                            <label className='WasteManagementDetails-all-labels'>Email ID</label>
                                            <input type='text'/>
                                        </div>

                                        <div className='ID-No common-class2'>
                                            <label className='WasteManagementDetails-all-labels'>ID No.</label>
                                            <input type='text'/>
                                        </div>

                                        <div className='Password common-class2'>
                                            <label className='WasteManagementDetails-all-labels'>Password</label>
                                            <input type='text'/>
                                        </div>

                                        <div className='Division common-class2'>
                                            <label className='WasteManagementDetails-all-labels'>Division</label>
                                            <input type='number'/>
                                        </div>

                                        <div className='Timeline common-class2'>

                                            <label className='WasteManagementDetails-all-labels'>Timeline</label>

                                            <div className='checkboxes2'>

                                                <div className='top-checkbox'>
                                                    <label className='Daily' >Daily</label>
                                                    <input type='checkbox'/>
                                                    <label className='Weekly'>Weekly</label>
                                                    <input type='checkbox'/>
                                                </div>

                                                <div className='bottom-checkbox'>
                                                    <label className='Monthly'>Monthly</label>
                                                    <input type='checkbox'/>
                                                    <label className='Random'>Random</label>
                                                    <input type='checkbox'/>
                                                </div>

                                            </div>

                                        </div>

                                        <div className='Type-of-Waste common-class2'>
                                            <label className='WasteManagementDetails-all-labels'>Type of Waste</label>
                                            <select >
                                                <option>select</option>
                                                <option>🟢 Wet</option>
                                                <option>⚫ Dry</option>
                                            </select>
                                        </div>

                                        <div className='Environment-Impact common-class2'>
                                            <label className='WasteManagementDetails-all-labels'>Environment Impact</label>
                                            <select >
                                                <option>Select</option>
                                            </select>
                                        </div>

                                    </div>

                                </div>

                                <div className='vertical-line'></div>

                                <div className='right-forms'>

                                    <div className='HK-Supervisor common-class2'>
                                        <label className='WasteManagementDetails-all-labels'>HK Supervisor</label>
                                        <input type='text'/>
                                    </div>

                                    <div className='Division2 common-class2'>
                                        <label className='WasteManagementDetails-all-labels'>Division</label>
                                        <input type='text'/>
                                    </div>

                                    <div className='Supervisor-Mo-No common-class2'>
                                        <label className='WasteManagementDetails-all-labels'>Supervisor Mo. No.</label>
                                        <select >
                                            <option>Select</option>
                                        </select>
                                    </div>

                                    <div className='Password common-class2'>
                                        <label className='WasteManagementDetails-all-labels'>Password</label>
                                        <select >
                                            <option>Select</option>
                                        </select>
                                    </div>

                                    <div className='Add-Supervisor'>
                                        <p>Add Supervisor</p>
                                        <button>+</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className='back-and-save-buttons'>
                <Link to='/CompanyDetails' className='link'><button className='Back-button'>Back</button></Link>
                <Link to='' className='link'><button className='Back-button'>Save</button></Link>
            </div>



        </div>
    )
}

export default WasteManagementDetails
