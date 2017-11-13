import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Theia from './components/ProjectDetailPage/project-Theia'
import DetailsMyopic from './components/ProjectDetailPage/project-Myopic'
import ProjectMedidock from './components/ProjectDetailPage/project-Medidock'

import './index.css'

class App extends Component {



  render() {
    return (

      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/theia' component={Theia}/>
          <Route path='/vr-myopic' component={DetailsMyopic}/>
          <Route path='/medidock' component={ProjectMedidock}/>
        </Switch>
      </div>
    )
  }
}

export default App
