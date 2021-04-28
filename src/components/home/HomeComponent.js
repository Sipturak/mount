
import CardComponent from '../cards/CardComponent'
import 'bootstrap/dist/css/bootstrap.css'
import { VideoComponent } from '../header/VideoComponent';
import {InfoComponent} from '../header/InfoComponent'
import { SliderComponent } from '../slider/SliderComponent';
import {FooterComponent} from '../footer/FooterComponent';

import '../home/HomeCss.css'

const HomeComponent = (props) =>{
    return (
        <div className="home">
            <VideoComponent />
            <br/>
            <div className = "container px-0">
                <InfoComponent />
            </div>
            <CardComponent/>
            <SliderComponent />
            <FooterComponent />
        </div>
    )
}

export default HomeComponent;