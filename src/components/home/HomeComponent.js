
import CardComponent from '../cards/CardComponent'
import 'bootstrap/dist/css/bootstrap.css'
import AboutUsComponent from '../about_us/AboutUsComponent';
import { HeaderComponent } from '../header/HeaderComponent';
import {InfoComponent} from '../header/InfoComponent'
import {FooterComponent} from '../footer/FooterComponent';
import { SliderComponent } from '../carousel/SliderComponent';
import { VideoComponent } from '../header/VideoComponent';
import HomeCss from '../home/HomeCss.css'
import { BlogComponent } from '../blog/BlogComponent';


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