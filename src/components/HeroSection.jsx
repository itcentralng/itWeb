import React from 'react'
import { Link } from 'react-scroll'
import "../components/HeroSection.css"

function HeroSection() {
  return (
    <div id='hero--container'>
      <div className="hero--writings">
        <h6>IT Central Limited</h6>
        <h2>Empowering businesses and developers</h2>
        <p>Unlock your full potential with our software solutions and training programs. Let us help you achieve your goals.</p>
        <Link to="Explore"
          smooth={true}
          offset={-50}
          duration={500} class = "hero--btn">Explore</Link>
      </div>
      <div className="hero--image">
          <img src="./Images/itcentral-hero2.jpg" alt="IT Central Team of developers working on computers" />
      </div>
        
      
    </div>
  )
}

export default HeroSection
