import React, { Fragment } from 'react';
import CarouselComponent from '../carousel/CarouselComponent'
import CardComponent from '../cards/CardComponent'
import 'bootstrap/dist/css/bootstrap.css'
import AboutUsComponent from '../about_us/AboutUsComponent';
import { HeaderComponent } from '../header/HeaderComponent';
import {motion} from 'framer-motion'
import {FooterComponent} from '../footer/FooterComponent';

const HomeComponent = (props) =>{
    return (
        <Fragment>
            <CarouselComponent/>
            
            <div className = "container-fluid">
                <CardComponent/><br/>
                <AboutUsComponent />
            </div>
            <FooterComponent />
        </Fragment>
    )
}

export default HomeComponent;