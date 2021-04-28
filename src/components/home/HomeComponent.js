
import CardComponent from '../cards/CardComponent'
import 'bootstrap/dist/css/bootstrap.css'
import {InfoComponent} from '../header/InfoComponent'
import {FooterComponent} from '../footer/FooterComponent';
import { SliderComponent } from '../slider/SliderComponent';
import { VideoComponent } from '../header/VideoComponent';
import {BlogComponent} from '../blog/BlogComponent'

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
            <BlogComponent/>
            <SliderComponent />
            <FooterComponent />
        </div>
    )
}

export default HomeComponent;