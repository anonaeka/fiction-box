import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Webnav from './components/Navbar';
import Fiction from './components/Fiction';
import About from './components/About';
import NotFound from './components/NotFound';
import Webfoot from './components/Footer';
import { useState } from "react";
import LoginPage from './components/Login';
import SignupPage from './components/Signup';


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  
  return (
    <Router>
      <Webnav isLoggedIn={isLoggedIn}/>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/fiction" component={Fiction} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
      &nbsp;&nbsp;
      <Webfoot />
    </Router>
  );
}

export default App;
