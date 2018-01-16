import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent } from 'material-ui/Card';

import 'typeface-roboto';

const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  fullHeight: {
    height: '100%',
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  border: {
    marginBottom: -10,
    paddingTop: 50,
    paddingBottom: 50,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  borderText: {
    color: 'rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
});

class App extends Component {
  render() {
    var classes = this.props.classes;
    return (
      <div className="App">
        <div>
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
        </div>

        <div style={{ padding: 12, marginTop: 64 }} className="container">
          <Grid container spacing={24}>
            <Grid item xs={12} md={12}>
              <Card className={classes.flex}>
                <CardContent>
                  <div className={classes.border}>
                    <Typography type="headline" component="h2" className={classes.borderText}>
                      Drop an image here to upload it to IPFS
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={12} md={4} className={classes.flex}>
              <Card className={classes.fullHeight}>
                <CardContent>
                  <Typography type="headline" component="h3">
                    IPFS
                  </Typography>
                  <Typography component="p">
                    Your images are uploaded to <strong>IPFS</strong>, a distributed, decentralized, p2p, hypermedia protocol. You can help by running your own <strong>IPFS</strong> node.
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
                    This app is open source, if you want to check out the source code and see how it works under the hood, feel free to drop by on github.
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
                    <em>No registration is required</em>, simply select the file from your computer and upload it. You will get a link to access your image from anywhere or <em>share it</em> with your friends.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>

      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
