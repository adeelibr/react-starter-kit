import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// Common Components
import { withStyles } from '@material-ui/core/styles';
// Routes
import Routes from './Routes';

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

const MainLayout = ({ classes }) => {
  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route render={props => <Routes {...props} />} />
      </main>
    </div>
  );
};

MainLayout.displayName = 'AuthLayout';

MainLayout.propTypes = {
  classes: PropTypes.object, // Material UI Injected;
  history: PropTypes.object, // React Router Injected;
};

export default withStyles(styles)(MainLayout);
