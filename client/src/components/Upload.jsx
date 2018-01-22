import React from 'react';
import PropTypes from 'prop-types';

import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Grid from 'material-ui/Grid';
import Dropzone from 'react-dropzone';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import { CircularProgress } from 'material-ui/Progress';

const styles = theme => ({
  flex: {
    flex: 1,
    position: 'relative',
  },
  border: {
    marginBottom: -10,
    paddingTop: 60,
    paddingBottom: 60,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  borderText: {
    color: 'rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    padding: 10,
  },
  error: {
    marginTop: -12,
  },
  spinner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
  dropzone: {
    position: 'absolute',
    zIndex: 100,
    background: 'transparent',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 0,
  },
});

const Upload = ({
  classes,
  error,
  clearError,
  disabled,
  postUpload,
}) => {
  const handleDropzone = (files) => {
    postUpload(files[0]);
  };
  const open = (error != null);
  const spinner = disabled ? (
    <div className={classes.spinner}>
      <CircularProgress className={classes.progress} />
    </div>
  ) : '';
  const dropzone = !disabled ? (
    <Dropzone
      className={classes.dropzone}
      multiple={false}
      onDrop={handleDropzone}
      accept="image/*"
    />
  ) : '';

  return (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Card className={classes.flex}>
          <CardContent>
            <div className={classes.border}>
              <Typography type="headline" component="h2" className={classes.borderText}>
                Drop an image here to upload it to the IPFS
              </Typography>
              {dropzone}
              {spinner}
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Dialog
        open={open}
        onClose={clearError}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {error}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={clearError} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

Upload.defaultProps = {
  error: null,
};

Upload.propTypes = {
  classes: PropTypes.shape().isRequired,
  clearError: PropTypes.func.isRequired,
  postUpload: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default withStyles(styles)(Upload);
