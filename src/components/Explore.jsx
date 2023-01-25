import React from 'react'
import "../components/Explore.css"
import Data from "../Data.json"
import Card from './Card'
import 'font-awesome/css/font-awesome.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'




function Explore() {
  
  function scroll(direction) {
    let currentPosition = document.querySelector('.cards').scrollLeft;
    let target = currentPosition + (direction === 'right' ? 300 : -300);
    let start = null;
    function animate(timestamp) {
        if (!start) start = timestamp;
        let progress = timestamp - start;
        let newPosition = currentPosition + (progress / 2) * (direction === 'right' ? 1 : -1);
        document.querySelector('.cards').scrollLeft = newPosition;

        if (progress < 1000) {
            window.requestAnimationFrame(animate);
        }
        else {
            let cards = document.querySelector('.cards');
            if (direction === 'right' && Math.floor((cards.scrollWidth - newPosition) - 50) < cards.clientWidth) {
              document.getElementById("right").style.display = 'none';
            }
              else if (direction === 'left' && newPosition <=5) {
                document.getElementById("left").style.display = 'none';
            }
            else {
                document.getElementById("right").style.display = 'flex';
                document.getElementById("left").style.display = 'flex';
            }
      }
    }
    window.requestAnimationFrame(animate);
}


  // function scrollLeft(){
  //   let currentPosition = document.querySelector('.cards').scrollRight;
  //   let target = currentPosition + 300;
  //   let start = null;
  //   function animate(timestamp) {
  //     if (!start) start = timestamp;
  //     let progress = timestamp - start;
  //     document.querySelector('.cards').scrollRight = currentPosition + (progress / 2);
  //     if (progress < 1000) {
  //       window.requestAnimationFrame(animate);
  //     }
  //   }
    
  //   let cards = document.querySelector('.cards')
  //   if(cards.scrollWidth > 300){
  //     document.getElementById('left').style.display = 'flex'
  //   }else{
  //     document.getElementById('left').style.display = 'none'
  //   }
  // }

    const ExploreData = Data.map(function(eachData){
        return <Card key = {eachData.title} title = {eachData.title} info = {eachData.info} trueImage = '/Images/White-bulb.svg' falseImage = '/Images/Blue-bulb.svg'  width = '33%' imageWidth = '50vw'/>
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
              <div id = 'left' onClick = {() =>scroll("left")}><i className="fa fa-arrow-left" style = {{fontSize:"1.8rem", opacity: '0.5'}}></i></div>
              <div onClick = {() => scroll("right")} id = 'right'><i className="fa fa-arrow-right" style = {{fontSize:"1.8rem", opacity: '0.5'}}></i></div>
          <div className="specialization">
            <h2>Our Area of Expertise</h2>
            <p>IT Central specializes in providing software development services, including web and mobile development, UI/UX design, and training programs that help businesses and developers achieve their goals. Our team of experts have a wealth of experience in a variety of technologies and programming languages, and we have served a range of clients including Julius Berger Nigeria, Nigerian Airforce and Schoola</p>
          </div>
      </div>
    </div>
  )
}

export default Explore
