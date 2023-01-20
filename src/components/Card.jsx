import React, { useState } from 'react'
import "../components/Card.css"

function Card(props) {
    
    const [isHovered, setIsHovered] = useState(false)
    return (
            <div className='card' style={{height: props.height, width: props.width, border: props.border}} onMouseOver={() =>{setIsHovered(true);}} onMouseOut = {() =>{setIsHovered(false)}}>
                <img src={isHovered ? props.trueImage : props.falseImage } height = '50vh' width ={props.imageWidth} alt="" style={{backgroundColor: isHovered? 'rgb(0,112,192)' :'rgb(0,112,192, 0.05)'}} />

                <h4>{props.title}</h4>
                <p>{props.info}</p>   
                {props.button  }
                {/* <div style = {{backgroundColor:'red', height:'10px', width:'10px'}}>{props.button}</div>  */}
            </div>

    )
}

export default Card
