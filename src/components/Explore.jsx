import React from 'react'
import "../components/Explore.css"
import Data from "../Data.json"
import Card from './Card'



function Explore() {
    const ExploreData = Data.map(function(eachData){
        return <Card key = {eachData.title} title = {eachData.title} info = {eachData.info} trueImage = '/Images/White-bulb.svg' falseImage = '/Images/Blue-bulb.svg' height = '250px' width = '20%' imageWidth = '50px'/>
    })
  return (
    <div id='Explore'>
      <div className="container">
        <>
          <h2>Explore What We Offer</h2>
        </>
          <div className='cards'>
            {ExploreData}
          </div>
        <div className="specialization">
          <h2>Our Industry <br /> Specialization</h2>
          <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
        </div>

      </div>
    </div>
  )
}

export default Explore
