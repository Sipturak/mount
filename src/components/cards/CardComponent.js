import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { CardView } from './CardView'


function CardComponent() {
    const [cards, setCards] = useState([{
        id: 1,
        imgUrl:"images/hills.jpg",
        title:"Special title treatment", 
        text:"With supporting text below as a."
    },
    {
        id: 2,
        imgUrl:"images/road.jpg",
        title:"Special title treatment",
        text:"With supporting text below as a."
    },
    {   
        id: 3,
        imgUrl:"images/swing.jpg", 
        title:"Special title treatment", 
        text:"With supporting text below as a."

    },
    {
        id: 4,
        imgUrl:"images/hills.jpg",
        title:"Special title treatment", 
        text:"With supporting text below as a."
    }])

    return (
        <div className = "all-cards">
            <div className="row justify-content-center">
                {
                    cards.map(card => {
                       return <CardView key={card.id} imgUrl={card.imgUrl} 
                                        title={card.title} text={card.text}
                              />
                    })
                }
            </div>
        </div>
    )
}

export default CardComponent

