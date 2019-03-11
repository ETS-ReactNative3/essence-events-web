import React, { Component } from 'react';

import SignIn from './views/SignIn';
import Dashboard from './views/Dashboard';

import './app.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={SignIn}/>
              <Route path='/dashboard' component={Dashboard}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
