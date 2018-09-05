import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {  Switch, Route } from 'react-router-dom'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import store from './store'; 

import Landing from './containers/Landing/Landing'; 
import Login from './containers/Login/Login';
import Register from './containers/Register/Register'; 
import Themes from './containers/Themes/Themes'; 
import SingleTheme from './containers/SingleTheme/SingleTheme'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store } >
      <Router >    
        <Switch >

          <Route exact path="/" component={ Landing } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/themes" component={ Themes } />
          <Route exact path="/single-theme" component={ SingleTheme } />

        </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App;
