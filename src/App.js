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

import Home from './components/Home';
import About from './components/About';
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 5
  apiKey = process.env.REACT_APP_API_NEWSAPI; // 'b13c9a484b654f3ba25e963f1789f853'
  state = {
    progress : 0
  }
  setProgress = (progress) => {
    this.setState({progress : progress}) 
  }
  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
          onLoaderFinished={() => this.setProgress(0)}
        />
        <Switch>

          <Route exact path="/science">
            <News apiKey={this.apiKey} setProgress={this.setProgress} key="science" country="us" pageSize={this.pageSize} category="science" />
          </Route>
          <Route exact path="/general">
            <News apiKey={this.apiKey} setProgress={this.setProgress} key="general" country="us" pageSize={this.pageSize} category="general" />
          </Route>
          <Route exact path="/business">
            <News apiKey={this.apiKey} setProgress={this.setProgress} key="business" country="us" pageSize={this.pageSize} category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" country="us" pageSize={this.pageSize} category="entertainment" />
          </Route>
          <Route exact path="/health">
            <News apiKey={this.apiKey} setProgress={this.setProgress} key="health" country="us" pageSize={this.pageSize} category="health" />
          </Route>
          <Route exact path="/sports">
            <News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" country="us" pageSize={this.pageSize} category="sports" />
          </Route>
          <Route exact path="/technology">
            <News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" country="us" pageSize={this.pageSize} category="technology" />
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/">
            <Home setProgress={this.setProgress}></Home>
          </Route>
        </Switch>
        {/* <News apiKey={this.apiKey} setProgress={this.setProgress} country="de" pageSize={this.pageSize} category="technology"/> */}
      </Router>
    )
  }
}


