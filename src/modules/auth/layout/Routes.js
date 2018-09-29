import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Loadable from 'react-loadable';

import PageLoader from '../../common/PageLoader';
/*
  Auth Pages Starts Here
*/
// Booking Module
const BookingManagementPage = Loadable({
  loader: () => import('../booking/booking-management/BookingManagementPage'),
  loading: PageLoader,
});
const BookingItemPage = Loadable({
  loader: () => import('../booking/booking-item/BookingItemPage'),
  loading: PageLoader,
});
// Global Module
const GlobalConfigurationPage = Loadable({
  loader: () => import('../global/global-configuration/GlobalConfigurationPage'),
  loading: PageLoader,
});
const ConfigurationItemPage = Loadable({
  loader: () => import('../global/configuration-item/ConfigurationItemPage'),
  loading: PageLoader,
});
// Customer Management Module
const CustomerManagementPage = Loadable({
  loader: () => import('../customer/customer-management/CustomerManagementPage'),
  loading: PageLoader,
});
const CustomerProfilePage = Loadable({
  loader: () => import('../customer/customer-profile/CustomerProfilePage'),
  loading: PageLoader,
});
const CustomerBookingInfoPage = Loadable({
  loader: () => import('../customer/customer-booking-info/CustomerBookingInfoPage'),
  loading: PageLoader,
});
// Service Module
const ServiceManagementPage = Loadable({
  loader: () => import('../service/service-management/ServiceManagementPage'),
  loading: PageLoader,
});
const ServiceItemPage = Loadable({
  loader: () => import('../service/service-item/ServiceItemPage'),
  loading: PageLoader,
});
// Supply Module
// --> 1: General Module
const GeneralPage = Loadable({
  loader: () => import('../supply/general/GeneralPage'),
  loading: PageLoader,
});
const JourneyDetailPage = Loadable({
  loader: () => import('../supply/general/JourneyDetailPage'),
  loading: PageLoader,
});
const GeneralMessagePage = Loadable({
  loader: () => import('../supply/general/message/GeneralMessagePage'),
  loading: PageLoader,
});
// --> 2: Captain Module
const CaptainsListPage = Loadable({
  loader: () => import('../supply/captain/CaptainsListPage'),
  loading: PageLoader,
});
const CaptainAddPage = Loadable({
  loader: () => import('../supply/captain/CaptainAddPage'),
  loading: PageLoader,
});
const CaptainEditPage = Loadable({
  loader: () => import('../supply/captain/CaptainEditPage'),
  loading: PageLoader,
});
// --> 3: Journey Module
const JourneyListPage = Loadable({
  loader: () => import('../supply/journey/JourneyListPage'),
  loading: PageLoader,
});
const JourneyItemPage = Loadable({
  loader: () => import('../supply/journey/JourneyItemPage'),
  loading: PageLoader,
});
// --> 4: Supplier Module
const SupplierListPage = Loadable({
  loader: () => import('../supply/supplier/SupplierListPage'),
  loading: PageLoader,
});
const SupplierProfilePage = Loadable({
  loader: () => import('../supply/supplier/SupplierProfilePage'),
  loading: PageLoader,
});
// --> 4 Bus Module
const BusListPage = Loadable({
  loader: () => import('../supply/bus/BusListPage'),
  loading: PageLoader,
});
const BusItemPage = Loadable({
  loader: () => import('../supply/bus/BusItemPage'),
  loading: PageLoader,
});
const BusAddPage = Loadable({
  loader: () => import('../supply/bus/BusAddPage'),
  loading: PageLoader,
});
/*
  Auth Pages Ends Here
*/

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
        <Route exact path={`${match.url}`} component={BookingManagementPage} />
        <Route exact path={`${match.url}/booking`} component={BookingManagementPage} />
        <Route path={`${match.url}/booking/:bookingId`} component={BookingItemPage} />
        <Route
          exact
          path={`${match.url}/global-configuration`}
          component={GlobalConfigurationPage}
        />
        <Route
          path={`${match.url}/global-configuration/:configurationId`}
          component={ConfigurationItemPage}
        />
        <Route exact path={`${match.url}/customer-management`} component={CustomerManagementPage} />
        <Route
          exact
          path={`${match.url}/customer-management/customer/:customerId`}
          component={CustomerProfilePage}
        />
        <Route
          exact
          path={`${match.url}/customer-management/customer/:customerId/booking-info/:bookingId`}
          component={CustomerBookingInfoPage}
        />
        <Route exact path={`${match.url}/service-management`} component={ServiceManagementPage} />
        <Route
          exact
          path={`${match.url}/service-management/service-item/:lineId`}
          component={ServiceItemPage}
        />
        <Route exact path={`${match.url}/supply-management/general`} component={GeneralPage} />
        <Route
          exact
          path={`${match.url}/supply-management/general/message`}
          component={GeneralMessagePage}
        />
        <Route
          exact
          path={`${match.url}/supply-management/general/journey/:journeyId`}
          component={JourneyDetailPage}
        />
        <Route exact path={`${match.url}/supply-management/journey`} component={JourneyListPage} />
        <Route
          exact
          path={`${match.url}/supply-management/journey/item/:id`}
          component={JourneyItemPage}
        />
        <Route exact path={`${match.url}/supply-management/bus`} component={BusListPage} />
        <Route exact path={`${match.url}/supply-management/bus/item/:id`} component={BusItemPage} />
        <Route exact path={`${match.url}/supply-management/bus/add`} component={BusAddPage} />
        <Route
          exact
          path={`${match.url}/supply-management/supplier`}
          component={SupplierListPage}
        />
        <Route
          exact
          path={`${match.url}/supply-management/supplier/profile/:profileId`}
          component={SupplierProfilePage}
        />
        <Route exact path={`${match.url}/supply-management/captain`} component={CaptainsListPage} />
        <Route
          exact
          path={`${match.url}/supply-management/captain/add`}
          component={CaptainAddPage}
        />
        <Route
          exact
          path={`${match.url}/supply-management/captain/:captainId/edit`}
          component={CaptainEditPage}
        />
      </Switch>
    </CSSTransition>
  </Transition>
);

Routes.propTypes = {
  match: PropTypes.object, // React Router Injected;
  location: PropTypes.object, // React Router Injected;
};

export default Routes;
