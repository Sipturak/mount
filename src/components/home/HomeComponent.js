import React, { Fragment } from 'react';
import CarouselComponent from '../carousel/CarouselComponent'
import CardComponent from '../cards/CardComponent'
import 'bootstrap/dist/css/bootstrap.css'
import AboutUsComponent from '../about_us/AboutUsComponent';
import { HeaderComponent } from '../header/HeaderComponent';
import {InfoComponent} from '../header/InfoComponent'
import {FooterComponent} from '../footer/FooterComponent';


const HomeComponent = (props) =>{
    return (
        <div style={{backgroundColor: 'white'}}>
            <HeaderComponent />
            <br/>
            <div className = "container px-4">
                <InfoComponent />
                <CardComponent/>
            </div>
            <AboutUsComponent />
            <FooterComponent />
        </div>
    )
}

export default HomeComponent;