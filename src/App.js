import './App.css';

// Importing Bootstap from modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importing Components
import Navbar from './components/Navbar';
import News from './components/News';

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

export default class App extends Component {
  pageSize=5
  render() {
    return (
      <Router>
        <Navbar/>
        <Switch>
        
          <Route exact  path="/science">
            <News key="science"  country="us" pageSize={this.pageSize} category="science"/>
          </Route>
          <Route exact  path="/general">
            <News key="general"  country="us" pageSize={this.pageSize} category="general"/>
          </Route>
          <Route exact  path="/business">
            <News key="business"  country="us" pageSize={this.pageSize} category="business"/>
          </Route>
          <Route exact  path="/entertainment">
            <News key="entertainment"  country="us" pageSize={this.pageSize} category="entertainment"/>
          </Route>
          <Route exact  path="/health">
            <News key="health"  country="us" pageSize={this.pageSize} category="health"/>
          </Route>
           <Route exact  path="/sports">
            <News  key="sports" country="us" pageSize={this.pageSize} category="sports"/>
          </Route>
           <Route exact  path="/technology">
            <News  key="technology" country="us" pageSize={this.pageSize} category="technology"/>
          </Route>

          <Route exact  path="/about">
              About
          </Route> 

          <Route exact  path="/">
            Home
          </Route> 
        </Switch>
      {/* <News country="de" pageSize={this.pageSize} category="technology"/> */}
      </Router>
    )
  }
}


