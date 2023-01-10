import React, { useState } from 'react'
import "../components/Card.css"

function Card(props) {
    
    const [isHovered, setIsHovered] = useState(false)
    return (
            <div className='card' onMouseOver={() =>{setIsHovered(true);}} onMouseOut = {() =>{setIsHovered(false)}}>
                <img src={isHovered ? "./Images/white-bulb.svg" : "./Images/blue-bulb.svg" }height="50px" width ="50px" alt="" style={{backgroundColor: isHovered? 'rgb(0,112,192)' :'rgb(0,112,192, 0.05)'}} />
                <h4>{props.title}</h4>
                <p>{props.info}</p>   

            </div>

    )
}

export default Card
