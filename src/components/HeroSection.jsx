import React from 'react'
import { Link } from 'react-scroll'
import "../components/HeroSection.css"

function HeroSection() {
  return (
    <div id='hero--container'>
      <div className="hero--writings">
        <h6>Mr. Teey Investment Ltd Company</h6>
        <h2>Some Kind of headline for user <br /> to read</h2>
        <p>We specialise in delivering end-to-end services and <br /> mobile & web applications to innovative companies <br /> around the world.</p>
        <Link to="Explore"
          smooth={true}
          offset={-50}
          duration={500} class = "hero--btn">Lets Build</Link>
      </div>
      <div className="hero--image">
          <img src="./Images/itcentral-hero2.jpg" alt="" />
      </div>
        
      
    </div>
  )
}

export default HeroSection
