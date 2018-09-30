import React from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { Switch, Route, Redirect } from 'react-router-dom';

// Helpers
// import { APP_TOKEN } from './api/Constants';
import PageLoader from './modules/common/PageLoader';

// Routes
const AuthLayout = Loadable({
  loader: () => import('./modules/auth/layout/MainLayout'),
  loading: PageLoader,
});
const LoginPage = Loadable({
  loader: () => import('./modules/public/login/LoginPage'),
  loading: PageLoader,
});
const NoMatchPage = Loadable({
  loader: () => import('./modules/not-found/NoMatchPage'),
  loading: PageLoader,
});

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route
        exact
        path="/login"
        component={LoginPage}
        // render={props => {
        //   return <LoginPage {...props} />;
        //   // return APP_TOKEN.notEmpty ? <Redirect to="/auth" /> : <LoginPage {...props} />;
        // }}
      />
      <Route
        path="/auth"
        component={AuthLayout}
        // render={props => {
        //   return <AuthLayout {...props} />;
        //   // return APP_TOKEN.notEmpty ? <AuthLayout {...props} /> : <Redirect to="/login" />;
        // }}
      />
      <Route component={NoMatchPage} />
    </Switch>
  );
};

Routes.propTypes = {
  location: PropTypes.object, // React Router Passed Props
};

export default Routes;
