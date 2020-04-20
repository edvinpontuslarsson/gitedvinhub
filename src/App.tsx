import React from 'react';
import { initialize } from './helpers/initialize';
import AppRouter from './components/AppRouter';

const App = () => {
  initialize();
  return <AppRouter />;
};

export default App;
