import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AboutRoute from './about';
import RootRoute from './root';
// import AnonymousOnlyRoute from 'utils/routes/AnonymousOnlyRoute';
// import ProtectedRoute from 'utils/routes/ProtectedRoute';
// import AccountRoute from './account';
// import HomeRoute from './home';
// import { GameRoute } from './games';
// import PrivacyPolicy from './terms/privacy-policy';
// import TermsAndConditions from './terms/terms-and-conditions';
// import InvitationRoute from './games/routes/invitation/InvitationRoute';
// import FriendsRoute from './friends/FriendsRoute';

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
