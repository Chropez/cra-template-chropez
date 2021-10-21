import React, { FunctionComponent, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const AboutRoute = lazy(() => import('./about'));
const RootRoute = lazy(() => import('./root'));

const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <RootRoute />
      </Route>
      <Route exact path="/about">
        <AboutRoute />
      </Route>
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Routes;
