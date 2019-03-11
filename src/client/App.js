import React, { Component } from 'react';
import SignIn from './views/SignIn';
import './app.css';
import Dashboard from './views/Dashboard';

export default class App extends Component {

  render() {
    return (
      <div>
        <SignIn/>
        {/*<Dashboard/>*/}
      </div>
    );
  }
}
