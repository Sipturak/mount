import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavComponent from './components/nav/NavComponent';
import React, { useEffect } from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';

import HomeComponent from './components/home/HomeComponent'
import CardComponent from './components/cards/CardComponent';
import { InfoComponent } from './components/header/InfoComponent';


import { library } from '@fortawesome/fontawesome-svg-core'
import {faGripLinesVertical} from '@fortawesome/free-solid-svg-icons'

library.add(faGripLinesVertical)



function App() {
  const location = useLocation()

  useEffect(()=>{
    if(location.hash === ''){
      window.scrollTo({top: 0, behavior: 'smooth'})
    }else{
      console.log(location)
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id)
      if(element){
        element.scrollIntoView({behavior:"smooth"})
      }
    }
  }, [location.hash])

  return (
    <React.Fragment>
      <NavComponent/>
        <Switch>
          <Route exact path="/" component={HomeComponent}/>
          <Route exact path="/asd" component={InfoComponent}/>
        </Switch>
    </React.Fragment>
  );
}

export default App;
