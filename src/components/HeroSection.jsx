import React from 'react'
import { Link } from 'react-router-dom'
import "../components/HeroSection.css"

function HeroSection() {
  return (
    <div className='hero--container'>
      <div className="hero--writings">
        <h6>Mr. Teey Investment Ltd Company</h6>
        <h2>Some Kind of headline for user <br /> to read</h2>
        <p>We specialise in delivering end-to-end services and <br /> mobile & web applications to innovative companies <br /> around the world.</p>
        <Link to= "">Lets Build</Link>
      </div>
      <div className="hero--image">
          <img src="./Images/Hero-Image.png" alt="" />
      </div>
        
      
    </div>
  )
}

export default HeroSection
