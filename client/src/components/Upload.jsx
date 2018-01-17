import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
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
  },
});

const Upload = ({ classes }) => (
  <Grid container spacing={24}>
    <Grid item xs={12} md={12}>
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
  </Grid>
);

Upload.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Upload);
