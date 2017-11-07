import React, { Component } from 'react';
import logo from './logo.svg';
import Project from './components/ProjectView/ProjectView'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="projectContainer">
          <Project />
          <Project />
          <Project />
        </div>
        <div className="projectContainer">
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    );
  }
}

export default App;
