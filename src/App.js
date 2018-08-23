import React, { Component } from 'react';
import {  Switch, Route } from 'react-router-dom'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import Landing from './components/Landing/Landing'; 
import Themes from './components/Themes/Themes'; 
import SingleTheme from './components/SingleTheme/SingleTheme'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div>  
      <Router >    
        <Switch >

          <Route exact path="/" Component={ Landing } />

          <Route exact path="/themes" Component={ Themes } />

          <Route exact path="/single-theme" Component={ SingleTheme } />

        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
