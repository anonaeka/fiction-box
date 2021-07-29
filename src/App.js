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
import ManageItem from './components/onuser/Manageitem';
import Client from './components/base/api';
import { useEffect } from 'react';
import ItemDetail from './components/guestuser/Fictiondetails';
import ReviewDetails from './components/guestuser/Reviewdetails';
import ManageUser from './components/onuser/Manageuser';
import CreateFiction from './components/onuser/Createfic';
import EditFiction from './components/onuser/Editfict';


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
    Client
      .get("/get_user", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('jwt')}`
        }
      })
      .then((res) => {
        console.log(res.data)
        if (res.data.user) {
          setUsername(res.data.user.username)
          setLoggedIn(true)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <Router>
      <Webnav isLoggedIn={isLoggedIn} username={username} />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/fiction" component={Fiction} />
          <Route exact path="/fiction/:id" component={ItemDetail} />
          <Route exact path="/manage_item" component={ManageItem} />
          <Route exact path="/reviews" component={ReviewDetails} />
          <Route exact path="/manage_user" component={ManageUser} />
          <Route exact path="/about" component={About} />
          <Route exact path="/createfiction" component={CreateFiction} />
          <Route exact path="/editfiction/:id" component={EditFiction} />
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
