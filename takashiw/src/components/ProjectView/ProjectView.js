import React, { Component } from 'react'
import s from './style.css'

import tomato from '../../assets/images/tomato-freeze.png'

class ProjectView extends Component {
  render() {
    return(
      <div className="container">
        <div className="project">
          <img className="thumbnail" src={tomato}/>
          <div className="titleContainer" >
            <h1>Animating a Tomato</h1>
            <p>Stickermule Playoff Runnerup</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectView
