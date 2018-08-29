import React, { Component } from 'react';
import {  Switch, Route } from 'react-router-dom'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import Landing from './components/Landing/Landing'; 
import Login from './components/Login/Login';
import Register from './components/Register/Register'; 
import Themes from './components/Themes/Themes'; 
import SingleTheme from './components/SingleTheme/SingleTheme'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div>  
      <Router >    
        <Switch >

          <Route exact path="/" component={ Landing } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />

          <Route exact path="/themes" component={ Themes } />

          <Route exact path="/single-theme" component={ SingleTheme } />

        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
