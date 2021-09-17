import React from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import SignUp from './components/maincomponents/SignUp';
import Login from './components/maincomponents/Login';
import Home from './components/maincomponents/Home';
import Main from './components/maincomponents/Main';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
