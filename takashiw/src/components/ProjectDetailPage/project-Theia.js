import React, { Component } from 'react'
import '../ProjectView/style.css'
import './style.css'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

class Theia extends Component {
  render(){
    return(
      <div>
        <div className="header" style={{backgroundColor: "#FFC96A"}}>
          <Link to='/'>
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </Link>
          <h3>Oct 2016 • Hackathon Build</h3>
          <h1>Prototyping Accessible, New Eye Exams</h1>
        </div>
        <div className="main">
          <p className="summary">To provide eye prescription exams to the third-world, Theia is a low-cost, full eye examination kit. All you need is a mobile phone, cardboard, scissors, and a pair of eyes.</p>
          <div className="lists">
            <h2>Components</h2>
            <ul>
              <li>Cardboard Housing Kit</li>
              <li>iOS Application</li>
            </ul>
            <h2>Personal Learning Areas</h2>
            <ul>
              <li>Product Design</li>
              <li>iOS Development</li>
              <li>Optometry</li>
              <li>Philly Cheese Steaks</li>
            </ul>
          </div>
          <img className="hero" src={process.env.PUBLIC_URL + '/images/projects/theia/hero.png'} />
          <h2>Cardboard Kit</h2>
          <p>In the design, we wanted to ensure that any hardware required by the piece would not have to be bought by or sent to the user. So, why not have them build the kit themselves?</p>
          <p>Outside of cost, the kit needed
              <br/>- hold the phone 20 inches from the user’s face
              <br/>- shield external light from causing viewing difficulty
              <br/>- be easily made with minimal time and materials
              <br/>- reusable for a community
              <br/>But with these factors, we wanted to still strive for high accuracy, so we had to do the research.
          </p>
          <img src={process.env.PUBLIC_URL + '/images/projects/theia/kit.png'} />
          <p className="subtitle">Kit - Instruction Template (Colored)</p>
          <img src={process.env.PUBLIC_URL + '/images/projects/theia/instruction.png'} />
          <p className="subtitle">Kit - Instruction Template (Colored)</p>
        </div>
      </div>
    )
  }
}

export default Theia
