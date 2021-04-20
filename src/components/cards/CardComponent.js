import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { CardView } from './CardView'
import Grid from '@material-ui/core/Grid'
import Aos from "aos"
import "aos/dist/aos.css"

import img1 from '../../images/swing.jpg'
import '../slider/CarouselComponentCss.css'

function CardComponent() {

    const [cards, setCards] = useState([{
        id: 1,
        imgUrl: img1,
        title:"Special title treatment", 
        text:"With supporting text below as a."
    },
    {
        id: 2,
        imgUrl: img1,
        title:"Special title treatment",
        text:"With supporting text below as a."
    },
    {   
        id: 3,
        imgUrl: img1, 
        title:"Special title treatment", 
        text:"With supporting text below as a."

    },{   
        id: 4,
        imgUrl: img1, 
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
                            <CardView imgUrl={card.imgUrl} title={card.title} text={card.text} />
                        </Grid>
                        })
                    }
                </div>
            </div>
        </Grid>
    )
}

export default CardComponent

