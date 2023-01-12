import React from 'react'
import { Link } from 'react-scroll'
import "../components/HeroSection.css"
import Button from './Button'

function HeroSection() {
  return (
    <div id='hero--container'>
      <div className="container">
        <div className="hero--writings">
          <h6>Mr. Teey Investment Ltd Company</h6>
          <h2>Some Kind of headline for user to read</h2>
          <p>We specialise in delivering end-to-end services and mobile & web applications to innovative companies around the world.</p>
          <Button text = "Lets Build" link = "Explore" style = 'button-blue' />
        </div>
        <div className="hero--image">
            <img src="./Images/hero-grid.svg" alt="" />
        </div>
          

      </div>
      
    </div>
  )
}

export default HeroSection
