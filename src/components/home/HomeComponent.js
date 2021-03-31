import React from 'react';
import CarouselComponent from '../carousel/CarouselComponent'
import CardComponent from '../cards/CardComponent'
import 'bootstrap/dist/css/bootstrap.css'
import AboutUsComponent from '../about_us/AboutUsComponent';

const HomeComponent = (props) =>{
    return (
        <div>
            <CarouselComponent/>
            <div className = "container-fluid">
                <CardComponent/><br/>
            </div>
            <AboutUsComponent />
        </div>
    )
}

export default HomeComponent;