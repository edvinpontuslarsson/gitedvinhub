import React from 'react';
import logo from './logo.svg';
import './App.css';
import { initialize } from './helpers/initialize';

function App() {
  initialize();

  // TODO create command that both
  // builds & then does firebase deploy

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
