import React from 'react';
import './App.css';
import { initialize } from './helpers/initialize';

function App() {
  initialize();

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World!</p>
      </header>
    </div>
  );
}

export default App;
