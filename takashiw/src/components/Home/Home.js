import React from 'react'
import ProjectCollection from '../ProjectCollection/ProjectCollection'
import me from '../../assets/images/Takashi.png'
import './style.css'

const Home = () => (
  <main>

      <div className="hello">
        <h2>hey there, I&apos;m <span className="name">Takashi Wickes</span></h2>
        <img src={me} />
        <p>I am a developer and illustrator studying Computer Science and Art History at the University of Florida</p>
        <p>I&apos;ve had the chance to work with IDEO CoLab, Microsoft, General Electric, and The Florida Alligator.</p>
      </div>

    <h2>and here is some of what I have built</h2>
    <ProjectCollection />
    <div className="links">
      <h2>aaaaaaaaand if you want more, you can find it here. Thanks!!</h2>
      <a href="https://dribbble.com/takashiw"><p>Dribbble</p></a>
      <a href="http://github.com/takashiw"><p>GitHub</p></a>
      <a href="http://be.net/takashiw"><p>Behance</p></a>
      <a href="https://twitter.com/takashiwickes"><p>Twitter</p></a>
      <a href="http://www.linkedin.com/in/takashiw"><p>Linkedin</p></a>
      <a href="https://dribbble.com/takashiw"><p>Resume</p></a>
    </div>
  </main>
)

export default Home
