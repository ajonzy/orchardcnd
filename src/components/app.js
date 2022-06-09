import React, { Component } from 'react';
import { AnimatedSwitch } from 'react-router-transition';
import { Route } from 'react-router';

import ScrollToTop from './utils/scrollToTop';
import Navbar from './utils/navbar';
import Home from "./pages/home"
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './utils/footer';

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
        <ScrollToTop />
        <Navbar type="main"/>
        <Navbar type="dropdown"/>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 1 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" render={(...props) => <Home {...props} classesData={this.state.data.events} testimonialsData={this.state.data.testimonials} />} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </AnimatedSwitch>
        <Footer />
      </div>
    );
  }
}
