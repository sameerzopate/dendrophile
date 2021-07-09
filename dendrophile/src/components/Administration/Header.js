import React from 'react'
import './Header.css'
import logo from './Images/logo.png'
function Header() {
    return (
        <div>
            <div className='Top-bar'>

                <div className='logo'>
                    <img  alt='logo' src={logo}/>
                </div>

                <div className='Top-bar-right'>
                    <p className='p1 p'>Home</p>
                    <p className='p2 p'>Green Services</p>
                    <p className='p3 p'>Green Products</p>
                    <p className='p4 p'>Support</p>
                    <p className='p5 p'>Logout</p>
                </div>

            </div>
        </div>
    )
}

export default Header
