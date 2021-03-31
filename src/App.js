import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavComponent from './components/nav/NavComponent';
import React from 'react';
import CarouselComponent from './components/carousel/CarouselComponent';
import CardComponent from './components/cards/CardComponent';
import css_cards from './CSS/css_cards.css'
import aboutUs from './CSS/aboutUs.css'
import AboutUsComponent from './components/about_us/AboutUsComponent';
import header from './CSS/header.css'
import { HeaderComponent } from './components/header/HeaderComponent';
import {Route, Switch} from 'react-router-dom';
import HomeComponent from './components/home/HomeComponent'

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
