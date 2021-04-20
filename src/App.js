import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';

import NavComponent from './components/nav/NavComponent';
import CardComponent from './components/cards/CardComponent';
import HomeComponent from './components/home/HomeComponent'


import {Route, Switch} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faGripLinesVertical} from '@fortawesome/free-solid-svg-icons'

library.add(faGripLinesVertical)



function App() {
  return (
    <React.Fragment>
      <NavComponent/>
        <Switch>
            <Route exact path="/" component={HomeComponent}/>
            <Route exact path='/cards' component={CardComponent}/>
        </Switch>
    </React.Fragment>
  );
}

export default App;
