import React from 'react'
import "../components/Explore.css"
import Data from "../Data.json"
import Card from './Card'
import Banner from './Banner'



function Explore() {
    const ExploreData = Data.map(function(eachData){

        return <Card key = {eachData.title} title = {eachData.title} info = {eachData.info} icon = {eachData.icon}/>
    })
  return (
    <div id='Explore'>
      <>
      <h2>Explore our <br/>Services</h2>
      </>
        <div className='cards'>
          {ExploreData}
        </div>
      <div className="specialization">
      <h2>Our Area of Expertise</h2>
        <p>IT Central specializes in providing software development services, including web and mobile development, UI/UX design, and training programs that help businesses and developers achieve their goals. Our team of experts have a wealth of experience in a variety of technologies and programming languages, and we have served a range of clients including Julius Berger Nigeria, Nigerian Airforce and Schoola</p>
      </div>
      <Banner/>
      {/* <div className="banner">
        <img src="./images/banner.svg" alt="" />
      </div> */}
      <div className="advert">
      </div>
    </div>
  )
}

export default Explore
