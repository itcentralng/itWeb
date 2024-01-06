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
          <h2>Building the next generation of tech talents</h2>
          <p>Empowering the next generation of tech innovators in northern Nigeria by fostering startups and communities.</p>
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
