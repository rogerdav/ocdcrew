import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Contact from './contact';

import Gallery from './gallery';
import Review from './review';
import Services from './services';
import About from './about';
import EstimateHome from './estimateHome';

 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="title">
          <div className="banner">
            <h1>OCD Crew</h1>
            <h3>Organizing, Cleaning, Detailing</h3>
            

          </div>
          <ul className="header">
            <li><NavLink to="/about">Who We Are</NavLink></li>
            <li><NavLink to="/contact">How To Reach Us</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/reviews">What Others Say</NavLink></li>
            <li><NavLink to="/services">What We Do</NavLink></li>
            <li><NavLink to="/estimateHome">Request an Estimate</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={About}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/reviews" component={Review}/>
            <Route path="/services" component={Services}/>
            <Route path="/estimateHome" component={EstimateHome}/>

          </div>
        </div>

      </HashRouter>
    );
  }
}
 
export default Main;