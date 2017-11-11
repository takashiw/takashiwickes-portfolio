import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Theia from './components/ProjectDetailPage/project-Theia'

import './index.css'

class App extends Component {



  render() {
    return (

      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/theia' component={Theia}/>
        </Switch>
      </div>
    )
  }
}

export default App
