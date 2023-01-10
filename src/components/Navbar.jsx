import React from 'react'
import '../components/Navbar.css'
import { Link } from 'react-router-dom'
import { Router } from 'react-router-dom'

function Navbar() {
  return (
        <div className='navbar'>
            <div className="logo">
                <h3>iT Central</h3>
            </div>
            <div className="nav--items">
                <ul>
                    <li className='nav--item'><Link to="/">Home</Link></li>
                    <li className='nav--item'><Link to="/service">Service</Link></li>
                    <li className='nav--item'><Link to="/academy">Academy</Link></li>
                    <li className='nav--item'><Link to="/about">About Us</Link></li>
                    <li className='nav--item'><Link to="/contact-us">Contact</Link></li>
                </ul>
            </div>
        </div>

 )
}


export default Navbar
