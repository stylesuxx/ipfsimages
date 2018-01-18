import React from 'react';
import PropTypes from 'prop-types';

import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';

const styles = () => ({
  flex: {
    flex: 1,
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
});

const Upload = ({ classes, error, clearError }) => {
  const open = (error != null);

  return (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Card className={classes.flex}>
          <CardContent>
            <div className={classes.border}>
              <Typography type="headline" component="h2" className={classes.borderText}>
                Drop an image here to upload it to the IPFS
              </Typography>
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
  error: PropTypes.string,
  clearError: PropTypes.func.isRequired,
};

export default withStyles(styles)(Upload);
