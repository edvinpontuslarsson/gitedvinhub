import React from 'react';
import './App.css';
import { initialize } from './helpers/initialize';

const App = () => {
  initialize();

  return (
    <div className="App">
      <p>Hello World!</p>
    </div>
  );
};

export default App;
