import React from 'react'
import "../components/Footer.css"
import Iframe from 'react-iframe'

function Footer() {
  return (
    <div id='footer'>
      <div className="container">
        <div className="contact--us">
          <h4>Contact Us</h4>
          <ul>
            <li> Phone_number</li>
            <li>Email_Addess</li>
            <li>Accout</li>
            <li>Twitter_handle</li>
            <li>LinkedIn_account</li>
          </ul>
        </div>
        <div className="customer--care">
          <h4>Customer Services</h4>
          <ul>
            <li>About Us</li>
            <li>Courses</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="location">
          <h4>Location</h4>
          <ul>
            <li>
            44a Isa Kaita Road, Ungwan Sarki Musulumi, <br /> Kaduna, Nigeria
            </li>
            <li className='map--here'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.392180094395!2d7.453398012792962!3d10.548452192476457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b2b546b5b0839f%3A0x158cb271633faab7!2s44a%20Isa%20Kaita%20Road%2C%20Ungwan%20Sarki%20Muslimi%20800221%2C%20Kaduna!5e0!3m2!1sen!2sng!4v1673260383342!5m2!1sen!2sng" width="100%" height="100%  " style={{border:0}} ></iframe>          
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
          <div className="logo">
                  <h3>iT Central</h3>
            </div>
            <div className="copyright">
              <h6>Copyrights © All rights reserved by iT Central</h6>            
            </div>

      </div>
      
    </div>
  )
}

export default Footer
