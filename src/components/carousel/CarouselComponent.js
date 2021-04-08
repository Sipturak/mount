import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import NavComponent from '../nav/NavComponent'
import {motion} from 'framer-motion'
import { HeaderComponent } from '../header/HeaderComponent'

function CarouselComponent() {
    return (
        <>
           <Carousel fade>
                <Carousel.Item interval={2000} >
                    <div className='main-picture'>
                        <img 
                        className="d-block w-100"
                        src="images/daniel_can.jpg"
                        alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <HeaderComponent/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <div className='main-picture'>
                        <img 
                        className="d-block w-100"
                        src="images/stock-photo.jpg"
                        alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <HeaderComponent/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <div className='main-picture'>
                        <img
                        className="d-block w-100"
                        src="images/ultrawide-moraine-lake.jpg"
                        alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <HeaderComponent/>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
        </>
    )
}

export default CarouselComponent
