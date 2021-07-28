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
import stateReducer, { stateContext } from "./stateReducer";
import ManageItem from './components/onuser/Manageitem';
import Client from './components/base/api';
import { useEffect } from 'react';
import ItemDetail from './components/guestuser/Fictiondetails';
import ReviewDetails from './components/guestuser/Reviewdetails';


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/user/get_user", {
      // credentials: "include"
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(response => response.json())
    .then(json => {
      if (json.user) {
        setUsername(json.user.username)
        setLoggedIn(true)
      }}) 
  }, [])


  return (
    <Router>
      <Webnav isLoggedIn={isLoggedIn} username={username} />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/fiction" component={Fiction} />
          <Route exact path="/item_detail" component={ItemDetail} />
          <Route exact path="/manage_item" component={ManageItem} />
          <Route exact path="/reviews" component={ReviewDetails} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login">
            <LoginPage setLoggedIn={setLoggedIn} setUsername={setUsername} />
          </Route>
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
