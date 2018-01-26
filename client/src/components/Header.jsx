import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  flex: {
    flex: 1,
  },
  button: {
    margin: theme.spacing.unit,
    marginRight: 0,
  },
  input: {
    display: 'none',
  },
});

const Header = ({ classes, disabled, postUpload }) => {
  function handleUpload(files) {
    postUpload(files[0]);
  }

  return (
    <AppBar color="default">
      <Toolbar>
        <Typography type="title" color="inherit" className={classes.flex}>
         IPFS Image Upload
        </Typography>
        <input
          accept="image/*"
          className={classes.input}
          id="raised-button-file"
          type="file"
          onChange={e => handleUpload(e.target.files)}
          disabled={disabled}
        />
        <label htmlFor="raised-button-file">
          <Button
            raised
            component="span"
            className={classes.button}
            disabled={disabled}
          >
            Upload Image
          </Button>
        </label>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.shape().isRequired,
  disabled: PropTypes.bool.isRequired,
  postUpload: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
