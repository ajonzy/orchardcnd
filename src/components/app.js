import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Navbar from './utils/navbar';
import Home from "./pages/home"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      data: {
        events: [],
        testimonials: []
      }
    }
  }

  componentDidMount() {
    fetch("https://orchardcdnapi.herokuapp.com/data")
    .then(response => response.json())
    .then(data => this.setState({ data }))
    .catch(error => console.log("Error contacting API: ", error))
  }

  render() {
    return (
      <div className='app'>
        <Navbar />
        <Switch>
          <Route exact path="/" render={(...props) => <Home {...props} classesData={this.state.data.events} testimonialsData={this.state.data.testimonials} />} />
        </Switch>
      </div>
    );
  }
}
