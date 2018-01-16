import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';

const styles = () => ({
  flex: {
    flex: 1,
  },
  fullHeight: {
    height: '100%',
  },
});

const Cards = ({ classes }) => (
  <Grid container spacing={24}>
    <Grid item xs={12} md={4} className={classes.flex}>
      <Card className={classes.fullHeight}>
        <CardContent>
          <Typography type="headline" component="h3">
            IPFS
          </Typography>
          <Typography component="p">
            Your images are uploaded to <strong>IPFS</strong>, a distributed,
            &nbsp;decentralized, p2p, hypermedia protocol. You can help by running
            &nbsp;your own <strong>IPFS</strong> node.
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item xs={12} md={4} className={classes.flex}>
      <Card className={classes.fullHeight}>
        <CardContent>
          <Typography type="headline" component="h3">
            Open Source
          </Typography>
          <Typography component="p">
            This app is open source, if you want to check out the source code
            &nbsp;and see how it works under the hood, feel free to drop by on
            &nbsp;github.
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense>Visit on Github</Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item xs={12} md={4} className={classes.flex}>
      <Card className={classes.fullHeight}>
        <CardContent>
          <Typography type="headline" component="h3">
            Easy to use
          </Typography>
          <Typography component="p">
            <em>No registration is required</em>, simply select the file from
            &nbsp;your computer and upload it. You will get a link to access
            &nbsp;your image from anywhere or <em>share it</em> with your
            &nbsp;friends.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

Cards.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Cards);
