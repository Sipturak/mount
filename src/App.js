import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavComponent from './components/nav/NavComponent';
import React from 'react';

import {Route, Switch} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faGripLinesVertical} from '@fortawesome/free-solid-svg-icons'

import AboutUsComponent from './components/about_us/AboutUsComponent'
import HomeComponent from './components/home/HomeComponent'

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
