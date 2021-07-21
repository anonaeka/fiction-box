import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wennev from './components/Navbar';
import Fiction from './components/Fiction';
import About from './components/About';

function App() {
  return (
    <Router>
      <Wennev />
      <div>
        <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/fiction">
            <Fiction /> 
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/about">
            <About /> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
