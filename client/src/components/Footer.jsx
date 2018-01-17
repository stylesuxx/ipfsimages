import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Favorite from 'material-ui-icons/Favorite';

const styles = () => ({
  flex: {
    flex: 1,
  },
  adjust: {
    marginBottom: -10,
  },
  center: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 500,
  },
  icon: {
    height: 12,
    marginLeft: -5,
    marginRight: -5,
    marginBottom: -1,
  },
});

const Footer = ({ classes }) => (
  <Grid container spacing={24}>
    <Grid item xs={12}>
      <Card className={classes.flex}>
        <CardContent className={classes.equal}>
          <div className={classes.adjust}>
            <Typography component="footer" className={classes.center}>
              Made with <Favorite className={classes.icon} />, <a href="https://ipfs.io/" target="_blank" rel="noopener noreferrer">IPFS</a>, <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>, <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux</a> and <a href="https://material-ui-next.com" target="_blank" rel="noopener noreferrer">Material UI</a> - &copy; 2018 by <a href="mailto:stylesuxx@gmail.com">sylesuxx</a>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

Footer.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Footer);
