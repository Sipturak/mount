import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavComponent from './components/nav/NavComponent';
import React from 'react';
import CarouselComponent from './components/carousel/CarouselComponent';
import CardComponent from './components/cards/CardComponent';
import css_cards from './CSS/css_cards.css'
import aboutUs from './CSS/aboutUs.css'
import header from './CSS/header.css'
import { HeaderComponent } from './components/header/HeaderComponent';
import {Route, Switch} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faGripLinesVertical} from '@fortawesome/free-solid-svg-icons'
import AboutUsComponent from './components/about_us/AboutUsComponent'
import HomeComponent from './components/home/HomeComponent'
import CardViewCss from './components/cards/CardViewCss.css'
import InfoComponentCss from './components/header/InfoComponentCss.css'
library.add(faGripLinesVertical)

function App() {
  return (
    <React.Fragment>
      <NavComponent/>
      <Switch>
          <Route exact path="/" component={HomeComponent}/>
          <Route exact path='/about' component={AboutUsComponent}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
