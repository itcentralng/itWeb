import React, { useState } from 'react'
import "../components/Card2.css"
import Button from '../components/Button'

function Card2(props) {
    
    const [isHovered, setIsHovered] = useState(false)
    return (
            <div className='card2' style={{height: props.height, width: props.width, border: props.border}} onMouseOver={() =>{setIsHovered(true);}} onMouseOut = {() =>{setIsHovered(false)}}>
                <div className="title--image">
                    <img src={isHovered ? props.trueImage : props.falseImage } height = '70rem' width ={props.imageWidth} alt="" style={{backgroundColor: isHovered? 'rgb(0,112,192)' :'rgb(0,112,192, 0.05)'}} />
                    <h4>{props.title}</h4>
                </div>
                <p className='info'>{props.info}</p>
                <p className='more--info'>{props.moreInfo}</p>   
                {props.button  }
            </div>

    )
}

export default Card2
