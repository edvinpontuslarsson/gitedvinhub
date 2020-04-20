import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Start from '../pages/Start';

const AppRouter = () => {
  // TODO look up good practices for protected routes

  // TODO see this info on risk of js injection:
  // https://stackoverflow.com/questions/36254539/risk-of-javascript-injection-attacks-with-firebase

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Start} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
