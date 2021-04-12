import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { CardView } from './CardView'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Aos from "aos"
import "aos/dist/aos.css"
import CarouselComponentCss from '../carousel/CarouselComponentCss.css'
const useStyles = makeStyles({
    layoutCards: {
        paddingBottom: 30
    }
})
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
    const classes = useStyles()
    useEffect(() => {
        Aos.init({duration: 5000})
        
    }, [])
    return (
        <Grid container>
            <div data-aos="flip-left" className = "all-cards">
                <div className="row justify-content-center">
                    {
                        cards.map(card => {
                        return  <Grid className={classes.layoutCards} item key={card.id} xs={12} sm={6} md={6} lg={3}>
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

