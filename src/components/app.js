import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Navbar from './utils/navbar';
import Home from "./pages/home"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
