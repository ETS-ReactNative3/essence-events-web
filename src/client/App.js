import React, { Component } from 'react';
import SignIn from './views/SignIn';
import Dashboard from './views/Dashboard';
import Landing from './views/Landing';

import './app.css';
import { Route, Switch, Redirect } from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      <div>
          <Switch>
            <Route path='/login' component={SignIn}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route exact path="*" component={Landing} />
          </Switch>
      </div>
    );
  }
}
