import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import axios from 'axios';

// Common Components
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
// Layout Components
import DrawerContent from '../common/DrawerContent';
import AppBarContent from '../common/AppBarContent';
// Routes
import Routes from './Routes';

// Helpers
import AuthenticationAPI from '../../../api/AuthenticationAPI';
import { APP_TOKEN } from '../../../api/Constants';

const drawerWidth = 295;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    height: '100vh',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 65,
    },
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    overflowY: 'auto',
  },
});

class MainLayout extends Component {
  isTokenSource = axios.CancelToken.source();

  state = {
    isHamburgerOpen: false,
    menuAnchorEl: null,
  };

  componentDidMount() {
    this.onHandleValidateToken();
  }

  componentWillUnmount() {
    this.isTokenSource.cancel('API was cancelled');
  }

  onHandleValidateToken = async () => {
    try {
      await AuthenticationAPI.onValidate({
        cancelToken: this.isTokenSource.token,
        accessToken: APP_TOKEN.get().token,
      });
    } catch (error) {
      // console.log('OnHandleValidateToken', error.response);
      const { status } = error.response;
      if (status === 401) {
        /* Expired Token */
        this.onHandleRefreshToken();
      }
      if (status === 400) {
        /* Invalid Token Request */
        this.onHandleSignout();
      }
    }
  };

  onHandleRefreshToken = async () => {
    try {
      const result = await AuthenticationAPI.onRefresh({
        cancelToken: this.isTokenSource.token,
        refresh_token: APP_TOKEN.get().refreshToken,
      });
      APP_TOKEN.set({
        token: result.access_token,
        refreshToken: result.refresh_token,
      });
      window.location.reload();
    } catch (error) {
      // console.log('OnHandleRefreshToken', error.response);
      this.onHandleSignout();
    }
  };

  onHandleDrawerToggle = () => {
    this.setState(state => ({ isHamburgerOpen: !state.isHamburgerOpen }));
  };

  onHandleMenuOpen = event => {
    this.setState({ menuAnchorEl: event.currentTarget });
  };

  onHandleMenuClose = () => {
    this.setState({ menuAnchorEl: null });
  };

  onHandleSignout = () => {
    const { history } = this.props;
    APP_TOKEN.remove();
    history.push('/');
  };

  render() {
    const { classes } = this.props;
    const { isHamburgerOpen, menuAnchorEl } = this.state;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <AppBarContent
            onToggleDrawer={this.onHandleDrawerToggle}
            menuAnchorEl={menuAnchorEl}
            onMenuOpen={this.onHandleMenuOpen}
            onMenuClose={this.onHandleMenuClose}
            onSignout={this.onHandleSignout}
          />
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={isHamburgerOpen}
            onClose={this.onHandleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerContent />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <DrawerContent />
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Route render={props => <Routes {...props} />} />
        </main>
      </div>
    );
  }
}

MainLayout.displayName = 'AuthLayout';

MainLayout.propTypes = {
  classes: PropTypes.object, // Material UI Injected;
  history: PropTypes.object, // React Router Injected;
};

export default withStyles(styles)(MainLayout);
