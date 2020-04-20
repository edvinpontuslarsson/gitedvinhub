import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Start from './pages/Start';

const AppRouter = () => {
  // TODO look up good practices for protected routes

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Start} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
