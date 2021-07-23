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
import Login from './components/Login';


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
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Webfoot />
    </Router>
  );
}

export default App;
