import React from 'react'
import Card from '../components/Card'
import "../components/Startup.css"
import startupData from '../startupData.json'
import Button from './Button'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import companies from '../companies.json'
import { Link } from 'react-router-dom'



function Startup() {   
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        arrows: false
        
      };

    // button = {<div className="trialButton"><p>View Website</p></div>}
    let startups = startupData.map(function(startup){
        return <Card key = {startup.name} title = {startup.name} info ={startup.info}  button = {<div className = 'startup-btn'><Link to = ''>Visit Website</Link></div>}falseImage ={`/Images/${startup.icon}`} trueImage ={`/Images/${startup.whiteIcon}`} imageWidth = '100vw' height = '30rem' border = '1px solid #0070C0'/>
    })
    let companiesAll = companies.map(function(company){
        return(
                    <div key = {company.name}style = {{display:"flex", alignItems:"center"}}>
                        <img src={company.Image} width = "100%" height = "90%" style = {{paddingTop: "0.4rem",objectFit: "contain", objectPosition:"center" }}alt="" />
                    </div>
        )
    })
  return (
    <div>
        <div id="startup">
            <div className="container">
                <>
                    <h2>Startups incubated At iT Central</h2>
                </>
                <div className="cards">
                    {startups}
                </div>
                <Button text = 'CTA Button' style = 'button-darkBlue'/>
            </div>
        </div>
        <div id="workedFor">
            <div className="container">
                <div>
                    <h4>Our Clients:</h4>
                
                </div>
                    <Slider {...settings}>
                        {companiesAll}
 
                    </Slider>
            </div>

        </div>
      
    </div>
  )
}

export default Startup
