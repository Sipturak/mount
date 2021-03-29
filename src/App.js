import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavComponent from './components/nav/NavComponent';
import React from 'react';
import CarouselComponent from './components/carousel/CarouselComponent';
import CardComponent from './components/cards/CardComponent';
import css_cards from './CSS/css_cards.css'
import aboutUs from './CSS/aboutUs.css'
import {motion} from 'framer-motion'
import AboutUsComponent from './components/about_us/AboutUsComponent';
function App() {
  return (
    <React.Fragment>
      <NavComponent/>
      <CarouselComponent/>
      <div className = "container-fluid">
        <CardComponent/>
        <br/>
      </div>
      <AboutUsComponent/>
    </React.Fragment>
  );
}

export default App;
