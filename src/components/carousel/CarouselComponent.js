import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import NavComponent from '../nav/NavComponent'

function CarouselComponent() {
    return (
        <>
           <Carousel fade >
                
                <Carousel.Item interval={1500} >
                    <div style={{height: 600}}>
                        <img 
                        className="d-block w-100"
                        src="images/daniel_can.jpg"
                        alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <div style={{height: 600}}>
                        <img 
                        className="d-block w-100"
                        src="images/stock-photo.jpg"
                        alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <div style={{height: 600}}>
                        <img
                        className="d-block w-100"
                        src="images/ultrawide-moraine-lake.jpg"
                        alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
        </>
    )
}

export default CarouselComponent
