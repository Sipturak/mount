import React from 'react';
import CarouselComponent from '../carousel/CarouselComponent'
import CardComponent from '../cards/CardComponent'
import 'bootstrap/dist/css/bootstrap.css'
import AboutUsComponent from '../about_us/AboutUsComponent';
import { HeaderComponent } from '../header/HeaderComponent';
import {InfoComponent} from '../header/InfoComponent'
import DonateComponent from '../donate/Donate';

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
            <DonateComponent />
        </div>
    )
}

export default HomeComponent;