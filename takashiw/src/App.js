import React, { Component } from 'react'
import logo from './logo.svg'
import Project from './components/ProjectView/ProjectView'
import './App.css'
import projects from './Projects.json'
import ProjectCollection from './components/ProjectCollection/ProjectCollection'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>Hi there, my name is Takashi Wickes</h2>
        <h2>and here is some of what I have built</h2>
        <ProjectCollection />
      </div>
    )
  }
}

export default App
