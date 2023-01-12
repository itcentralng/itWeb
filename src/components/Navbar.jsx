import React, { useState, useEffect }from 'react'
import '../components/Navbar.css'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { Router } from 'react-router-dom'
function Navbar() {
    const [boxShadow, setBoxShadow] = useState('blue')

    useEffect(() => {
        function handleScroll() {
          setBoxShadow(window.pageYOffset > 0 ? '0 0 1em 0 rgb(131 135 137 / 25%)' : 'none');
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div className="navbar" style={{boxShadow}}>
      <div className="container">
          <div className="logo">
              <h3>iT Central</h3>
          </div>
          <div className="nav--items">
              <ul>
                  <li className='nav--item'><ScrollLink to="hero--container" smooth={true} offset={-50} duration={500}>Home</ScrollLink></li>
                  <li className='nav--item'><ScrollLink to="Explore" smooth={true} offset={-50} duration={500}>Service</ScrollLink></li>
                  <li className='nav--item'><Link to="">Academy</Link></li>
                  <li className='nav--item'><Link to="">About Us</Link></li>
                  <li className='nav--item'><ScrollLink to="footer" smooth={true} offset={-50} duration={500}>Contact</ScrollLink></li>
              </ul>
          </div>
      </div>
    </div>



 )
}


export default Navbar
