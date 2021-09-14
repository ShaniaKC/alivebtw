import React from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
