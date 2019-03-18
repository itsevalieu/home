import React, { Component } from 'react';
import './Portfolio.css';
import Project from './Project';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectid: '',
      project: {},
      projects: [
        {
          id: 'teafographic',
          name: 'Teafographic',
          short: 'A tea encyclopedia',
          description: '',
          date: 2016,
          url: ''
        },
        {
          id: 'learnteachcode',
          name: 'Learn Teach Code',
          short: 'Open-source contribution',
          description: '',
          date: 2016,
          url: ''
        },
        {
          id: 'jukebox',
          name: 'Jukebox',
          short: 'Music playlist application',
          description: '',
          date: 2016,
          url: ''
        },
        {
          id: 'drinkgenerator',
          name: 'Drink Generator',
          short: 'Random drink picker from BP menu',
          description: '',
          date: 2016,
          url: ''
        }
      ]      
    }
    this.handleClick = this.handleClick.bind(this);
    // this._getProject = this._getProject.bind(this);
  }
  handleClick(e) {
    this.setState({
      projectid: e.target.dataset.projectid
    }, () => {
      this._getProject(this.state.projectId);
      console.log(this.state.projectid);
    });
  }
  _getProject(id) {
    if(id==='') return null;
    let project = this.state.projects.filter(project => project.id === id);
    this.setState({
      project: project
    });
    if(this.state.project === '') return null;
  }
  render() {
    return (
      <div className='portfolio'>
        <div className='portfolio__projects'>
          <h2>Recent Work</h2>
          <div className='portfolio__stickies'>
            {this.state.projects.map((project, index)=> (<div className='sticky' onClick={this.handleClick} data-projectid={project.id} key={index}>{project.name}<br/>{project.short}</div>))}
          </div>
        </div>
        <div className='project' >
          <Project project={this.state.project}/>
        </div>
      </div>
    );
  }
}

export default Portfolio;
