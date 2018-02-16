import React, { Component } from 'react';
import CrisisContainer from './Components/CrisisContainer'
import {BrowserRouter as Router } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <CrisisContainer />
      </div>
      </Router>
    );
  }
}

export default App;
