import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import logo from './logo.jpg';
import './App.css';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header">
            <div className='app-header__logo'>
              <img src={logo} className="app-logo" alt="logo" />
              <div className='app-header__logo-name'>
                <a className="app-link" href="/" rel="noopener noreferrer">Eva Lieu</a>
                <p>Web Developer</p>
              </div>
            </div>
            <div className='app-header__nav'>
              <a className="app-link" href='/about' rel="noopener noreferrer">About</a>
              <a className="app-link" href='/portfolio' rel="noopener noreferrer">Portfolio</a>
              <a className="app-link" href='/contact' rel="noopener noreferrer">Contact</a>
            </div>
          </header>
          <main className="whiteboard">
            <Switch>
              <Route exact path='/' component={About}/>
              <Route exact path='/home' component={About}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/portfolio' component={Portfolio}/>
              <Route exact path='/contact' component={Contact}/>
            </Switch>
          </main>
          <footer className='footer'><span>Copyright &copy; {new Date().getFullYear()} Eva Lieu</span></footer>
        </div>   
      </Router>
    );
  }
}

export default App;
