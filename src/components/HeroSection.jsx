import { data } from 'jquery'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import "../components/HeroSection.css"
import Button from './Button'

function HeroSection() {
  return (
    <div id='hero--container'>
      <div className="container">
        <div className="hero--writings">
          <h6>IT Central Limited</h6>
          <h2>Empowering businesses and developers</h2>
          <p>Unlock your full potential with our software solutions and training programs. Let us help you achieve your goals.</p>
          {/* <p>We specialise in delivering end-to-end services and mobile & web applications to innovative companies around the world.</p> */}
          <Button text = "Explore" link = "Explore" style = 'button-blue' />
        </div>
        <div className="hero--image">
            <img src="./Images/hero-3.svg" alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default HeroSection
