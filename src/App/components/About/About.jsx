import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h2>Hey, I'm a web developer from Los Angeles, California.</h2>
        <p>I can help you build your next product.</p>
        <p>Got a project you'd like to discuss?</p>
        <p>Let's chat: <a href='mailto:itsevalieu@gmail.com'>itsevalieu@gmail.com</a></p>
      </div>
    );
  }
}

export default About;
