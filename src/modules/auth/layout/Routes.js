import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Loadable from 'react-loadable';

import PageLoader from '../../common/PageLoader';
/* Auth Pages Starts Here */
const UserPage = Loadable({
  loader: () => import('../user/UserPage'),
  loading: PageLoader,
});

/* Auth Pages Ends Here */

const Transition = styled(TransitionGroup)`
  & .fade-enter {
    opacity: 0;
  }

  & .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  & .fade-exit {
    opacity: 0;
  }
`;

const Routes = ({ match, location }) => (
  <Transition>
    <CSSTransition key={location.key} classNames="fade" timeout={300}>
      <Switch>
        <Route exact path={`${match.url}`} component={UserPage} />
        <Route exact path={`${match.url}/user`} component={UserPage} />
      </Switch>
    </CSSTransition>
  </Transition>
);

Routes.propTypes = {
  match: PropTypes.object, // React Router Injected;
  location: PropTypes.object, // React Router Injected;
};

export default Routes;
