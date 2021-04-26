import React from 'react'
import './Administration.css'

import { Link } from 'react-router-dom';

import people from './Images/people.png'
import search from './Images/search.png'
import bag from './Images/bag.png'
import eye from './Images/eye.png'
import Friends from './Images/Friends.png'
import icon3 from './Images/icon3.png'

function Administration() {
    return (
        <div >
            

                <div className='body'>

                    <div className='Administration'>
                        <p >ADMINISTRATION</p>
                    
                    </div>

                    <div className='circles'>

                        <div className='circles-left'>
                            <div className='top-circle'>
                                <Link to='/CompanyDetails' className='link'>
                                    <div className="for-all-circles circle1">
                                        <img className='icons icon1' alt='Friends' src={Friends}/>
                                        <p>Add Company</p>
                                    </div>
                                </Link>
                                <Link to='/ViewCompany' className='link'>
                                    <div className='for-all-circles circle2'>
                                        <img  className='icons icon2' alt='icon3' src={icon3}/>
                                        <p>View Company</p>
                                    </div>
                                </Link>
                            </div>

                            <div className='for-all-circles circle3'>
                                <img  className='icons icon3' alt='search' src={search}/>
                                <p>Total Waste Generation</p>
                            </div>
                        </div>


                        <div className='circles-right'>
                            <div className='top-circle'>
                                <div className='for-all-circles circle4'>
                                    <img  className='icons icon4' alt='bag' src={bag}/>
                                    <p>Add Waste Collector</p>
                                </div>

                                <div className='for-all-circles circle5'>
                                    <img  className='icons icon5' alt='people' src={people}/>
                                    <p>View Waste Collector</p>
                                </div>
                            </div>

                            <div className='for-all-circles circle6'>
                                <img  className='icons icon6' alt='eye' src={eye}/>
                                <p>Total Waste Collector</p>
                            </div>          
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Administration
