import React, { useState, useEffect }from 'react'
import '../components/Navbar.css'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { Router } from 'react-router-dom'
import { Twirl as Hamburger } from 'hamburger-react'
function Navbar() {


  
  const [hamburgerState, setHamburgerState] = useState(false)
  function handleClick(event) {
    event.stopPropagation();
    setHamburgerState(!hamburgerState)
    let lists = document.querySelector('ul');
    let computedStyle = window.getComputedStyle(lists);
    let height = computedStyle.getPropertyValue('height');
    let navItems = document.querySelector('#nav--items');

    if (height === "0px") {
      navItems.style.height = '60vh';
      lists.style.height = "60vh";
    } else {
      lists.style.height = "0px";
      navItems.style.height = '0';
    }
}
document.addEventListener('click', (event) => {
    let target = event.target;
    let navItems = document.querySelector('#nav--items');
    let lists = document.querySelector('ul');
    let links = document.querySelector('a');



    if (!target.matches('#nav--items') && !target.matches('ul') ) {
      navItems.style.height = '0';
      lists.style.height = "0px";
      setHamburgerState(!hamburgerState)
    }else{
      console.log('nothing')
    }
});
document.addEventListener('click', (event) =>{
  let target = event.target;
  let links = document.querySelector('a');
  let navItems = document.querySelector('#nav--items');
  let lists = document.querySelector('ul');

  if(!target.matches('.nav--item')){
    navItems.style.height = '0';
    lists.style.height = "0px";
    setHamburgerState(!hamburgerState)

  }else{
  }



})


  const [isOpen, setOpen] = useState(false)

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
              <h3><Link to={"/"}>iT Central</Link></h3>
          </div>
          <div className="hamburger" onClick = {handleClick} >
            <img src={hamburgerState? '/Images/cancel.svg' : '/Images/hamburger.svg'}  alt=""/>

          </div>

          <div id="nav--items">
              <ul>
                  <li className='nav--item'><ScrollLink to="hero--container" smooth={true} offset={-50} duration={500}>Home</ScrollLink></li>
                  <li className='nav--item'><Link to="">About Us</Link></li>
                  <li className='nav--item'><ScrollLink to="Explore" smooth={true} offset={-50} duration={500}>Service</ScrollLink></li>
                  <li className='nav--item'><Link to="">Academy</Link></li>
                  <li className='nav--item'><ScrollLink to="footer" smooth={true} offset={-50} duration={500}>Contact</ScrollLink></li>
              </ul>
          </div>
      </div>
    </div>



 )
}


export default Navbar
