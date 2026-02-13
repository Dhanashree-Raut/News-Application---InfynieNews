import './App.css';

// Importing Bootstap from modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importing Components
import Navbar from './components/Navbar';
import News from './components/News';

import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

// Including Required Cmponents
import Home from './pages/Home';
import About from './pages/About';
import LoadingBar from "react-top-loading-bar";

 const App = () => {
  const pageSize = 5
  const apiKey = process.env.REACT_APP_API_NEWSAPI; 

  const [progress, setProgress] = useState(0)


    return (
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Switch>
          <Route exact path="/science">
            <News apiKey={apiKey} setProgress={setProgress} key="science" country="us" pageSize={pageSize} category="science" />
          </Route>
          <Route exact path="/general">
            <News apiKey={apiKey} setProgress={setProgress} key="general" country="us" pageSize={pageSize} category="general" />
          </Route>
          <Route exact path="/business">
            <News apiKey={apiKey} setProgress={setProgress} key="business" country="us" pageSize={pageSize} category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News apiKey={apiKey} setProgress={setProgress} key="entertainment" country="us" pageSize={pageSize} category="entertainment" />
          </Route>
          <Route exact path="/health">
            <News apiKey={apiKey} setProgress={setProgress} key="health" country="us" pageSize={pageSize} category="health" />
          </Route>
          <Route exact path="/sports">
            <News apiKey={apiKey} setProgress={setProgress} key="sports" country="us" pageSize={pageSize} category="sports" />
          </Route>
          <Route exact path="/technology">
            <News apiKey={apiKey} setProgress={setProgress} key="technology" country="us" pageSize={pageSize} category="technology" />
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/">
            <Home setProgress={setProgress}  apiKey={apiKey} key="science" country="us" pageSize={pageSize} category="general"  ></Home>
          </Route>
        </Switch>
      </Router>
    )
  
}

export default App


