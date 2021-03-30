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
function App() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <div className = "container-fluid">
        <CardComponent/>
      </div>
      <AboutUsComponent/>
    </React.Fragment>
  );
}

export default App;
