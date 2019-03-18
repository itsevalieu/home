import React, { Component } from 'react';

class Project extends Component {
    constructor(props) {
        super(props);
    }
  componentDidUpdate(prevProps) {
    if (this.props.project !== prevProps.project) {
      console.log('render updated');
    } else {
      console.log('render did not update', this.props.project);
    }
  }
  render() {
    if(this.props.project === '' || this.props.project === undefined) return null;

    return (
        <div>
          <h2>Name: {this.props.project.name}</h2>
          <p>{this.props.project.date}</p>
          <p>Description: {this.props.project.description}</p>
          <img src='/' alt='project'/>
          <br/>
          <button>Demo</button>
        </div>
    );
  }
}

export default Project;