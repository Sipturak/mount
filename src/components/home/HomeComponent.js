import React from 'react';
import CarouselComponent from '../carousel/CarouselComponent'
import CardComponent from '../cards/CardComponent'
import 'bootstrap/dist/css/bootstrap.css'
import AboutUsComponent from '../about_us/AboutUsComponent';
import { HeaderComponent } from '../header/HeaderComponent';
import {InfoComponent} from '../header/InfoComponent'

const HomeComponent = (props) =>{
    return (
        <div style={{backgroundColor: 'white'}}>
            <HeaderComponent />
            <br/>
            <div className = "container px-0">
                <InfoComponent />
                <CardComponent/>
            </div>
            <AboutUsComponent />
        </div>
    )
}

export default HomeComponent;