import Flickity from 'flickity'
import React from 'react'
import Card from '../components/Card'
import "../components/Startup.css"
import startupData from '../startupData.json'
import Button from './Button'



function Startup() {    
    let startups = startupData.map(function(startup){
        return <Card  title = {startup.name} info ={startup.info} falseImage ={`/Images/${startup.icon}`} trueImage ={`/Images/${startup.whiteIcon}`} imageWidth = '100px' height = '350px' border = '1px solid #0070C0'/>
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
            <>
            
            </>
        </div>
      
    </div>
  )
}

export default Startup
