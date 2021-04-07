import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { CardView } from './CardView'


function CardComponent() {
    const [cards, setCards] = useState([{
        imgUrl:"images/hills.jpg",
        title:"Special title treatment", 
        text:"With supporting text below as a natural lead-in to additional content."
    },
    {
        imgUrl:"images/road.jpg",
        title:"Special title treatment",
        text:"With supporting text below as a natural lead-in to additional content."
    },
    {   
        imgUrl:"images/swing.jpg", 
        title:"Special title treatment", 
        text:"With supporting text below as a natural lead-in to additional content."

    }])
    return (
        <div class = "all-cards">
            <div class="row justify-content-center">
                {
                    cards.map(card => {
                       return <CardView key={card.imgUrl} imgUrl={card.imgUrl} 
                                        title={card.title} text={card.text}
                              />
                    })
                }
            </div>
        </div>
    )
}

export default CardComponent

