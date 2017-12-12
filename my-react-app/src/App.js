import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';
import routes from './routes';

const style = {
  display: 'flex',
  justifyContent: 'space-around'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={style} className="App-header">
          <NavLink to="./Route1">Beck</NavLink>
          <NavLink to="./Route2">Route 2</NavLink>
          <NavLink to="./Route3">Route 3</NavLink>
        </header>
         {routes}
      </div>
    );
  }
}

export default App;
