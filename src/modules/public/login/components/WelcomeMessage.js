import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  heading: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: theme.margin * 2,
  },
});

const WelcomeMessage = ({ classes }) => {
  return (
    <Fragment>
      <Typography variant="display1" gutterBottom className={classes.heading}>
        Welcome To
      </Typography>
      <Typography variant="display3" gutterBottom className={classes.heading}>
        [LOGO HERE]
      </Typography>
    </Fragment>
  );
};

WelcomeMessage.propTypes = {
  classes: PropTypes.object, // Material UI Injected
};

export default withStyles(styles)(WelcomeMessage);
