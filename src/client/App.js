import React, { Component } from 'react';
import SignIn from './SignIn';
import './app.css';
import Dashboard from './Dashboard';

export default class App extends Component {

  render() {
    return (
      <div>
        {/*<SignIn/>*/}
        <Dashboard/>
      </div>
    );
  }
}
