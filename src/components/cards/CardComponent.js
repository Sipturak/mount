import React, { useEffect, useState, Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { CardView } from './CardView'
import Grid from '@material-ui/core/Grid'
import Aos from "aos"
import "aos/dist/aos.css"

import img1 from '../../images/swing.jpg'
import '../slider/CarouselComponentCss.css'
import axios from 'axios'

function CardComponent(){

    state = {
        images: []
    }
    useEffect(() => {
        setAppState({loading: true})
        axios.get('http://localhost:8080/image/three').then(res => {
            const images = res.data;
            setAppState({loading: false, res: images})
        })
    }, [setAppState])

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
                className = "all-cards"
                id="albums">
                <div className="row justify-content-center">
                    {
                        this.state.images.map(images => {
                        return  <Grid item key={images.id}>
                                    <CardView imgUrl={images} />
                                </Grid>
                        })
                    }
                </div>
            </div>
        </Grid>
    )
}

export default CardComponent

