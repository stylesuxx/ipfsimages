import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  flex: {
    flex: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const Header = ({ classes }) => (
  <AppBar postition="static" color="default">
    <Toolbar>
      <Typography type="title" color="inherit" className={classes.flex}>
       IPFS Image Upload
      </Typography>
      <input
        accept="image/*"
        className={classes.input}
        id="raised-button-file"
        multiple
        type="file"
      />
      <label htmlFor="raised-button-file">
        <Button raised component="span" className={classes.button}>
          Upload Image
        </Button>
      </label>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Header);
