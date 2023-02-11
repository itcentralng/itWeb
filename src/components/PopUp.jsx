import React from 'react'
import Card2 from '../components/Card2'
import Data from '../Data.json'
import '../components/PopUp.css'
import Button from './Button'


function PopUp() {
        const popUpCard = Data.map(function(aData){
            return <Card2 height = '60rem' width = '50%' title = {aData.title} info = {aData.info} moreInfo = {aData.moreInfo}  trueImage = '/Images/White-bulb.svg' falseImage = '/Images/Blue-bulb.svg'  imageWidth = '70rem'
            button = {<Button style = 'button-blue' text = 'Get Started'/>}/>
        })
        return (
            <div style={{marginTop:'10rem'}}>
                <div className="popUp">

                {popUpCard}
                </div>
            </div>
  )
}

export default PopUp
