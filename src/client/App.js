import React, { Component } from 'react';
import SignIn from './views/SignIn';
import Dashboard from './views/Dashboard';
import Landing from './views/Landing';
import CreateAccount from './views/CreateAccount';
import './app.css';
import { Route, Switch } from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/login' component={SignIn}/>
            <Route exact path='/create' component={CreateAccount}/>
            <Route path='/dashboard/*' component={Dashboard}/>
            <Route exact path="*" component={Landing} />
          </Switch>
      </div>
    );
  }
}
