import React, { Component } from 'react'
import s from './style.css'

class ProjectView extends Component {
  render() {
    return(
        <a href={this.props.link} target="_blank">
          <div className="project" style={this.props.style}>
            <img className="thumbnail" src={process.env.PUBLIC_URL + '/images/' + this.props.image}/>
            <div className="titleContainer" style={{backgroundColor: this.props.backgroundColor}}>
              <h1>{this.props.title}</h1>
              <p>{this.props.subtitle}</p>
            </div>
          </div>
        </a>
    )
  }
}

export default ProjectView
