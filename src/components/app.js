import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Navbar from './utils/navbar';
import Home from "./pages/home"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      classesData: {}
    }
  }

  componentDidMount() {
    fetch("https://orchardcdnapi.herokuapp.com/event/get")
    .then(response => response.json())
    .then(data => this.setState({ classesData: data }))
    .catch(error => console.log("Error contacting API: ", error))
  }

  render() {
    return (
      <div className='app'>
        <Navbar />
        <Switch>
          <Route exact path="/" render={(...props) => <Home {...props} classesData={this.state.classesData} />} />
        </Switch>
      </div>
    );
  }
}
