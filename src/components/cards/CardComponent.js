import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { CardView } from './CardView'
import Grid from '@material-ui/core/Grid'
import Aos from "aos"
import "aos/dist/aos.css"

import CarouselComponentCss from '../carousel/CarouselComponentCss.css'

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

    },{   
        id: 5,
        imgUrl:"images/swing.jpg", 
        title:"Special title treatment", 
        text:"With supporting text below as a."
    }

    ])

    useEffect(() => {
        Aos.init({duration: 5000})
        
    }, [])
    return (
        <Grid container>
            <div className = "all-cards"
                data-aos-once='true'
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine" 
                className = "all-cards">
                <div className="row justify-content-center">
                    {
                        cards.map(card => {
                        return  <Grid item key={card.id}>
                                    <CardView  imgUrl={card.imgUrl} 
                                                title={card.title} text={card.text}
                                    />
                                </Grid>
                        })
                    }
                </div>
            </div>
        </Grid>
    )
}

export default CardComponent

