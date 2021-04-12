
import CardComponent from '../cards/CardComponent'
import 'bootstrap/dist/css/bootstrap.css'
import AboutUsComponent from '../about_us/AboutUsComponent';
import { HeaderComponent } from '../header/HeaderComponent';
import {InfoComponent} from '../header/InfoComponent'
import {FooterComponent} from '../footer/FooterComponent';
import { SliderComponent } from '../carousel/SliderComponent';


const HomeComponent = (props) =>{
    return (
        <div style={{backgroundColor: 'white'}}>
            <HeaderComponent />
            <br/>
            <div style={{paddingBottom:150}} className = "container px-0">
                <InfoComponent />
                <CardComponent/>
            </div>
            <SliderComponent />
            <AboutUsComponent />
            <FooterComponent />
        </div>
    )
}

export default HomeComponent;