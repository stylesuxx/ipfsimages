import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Favorite from 'mdi-material-ui/Heart';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import React from 'react';

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
  link: {
    color: 'rgba(0, 0, 0, 0.87);',
  },
});

const Footer = ({ classes }) => (
  <Grid container spacing={24}>
    <Grid item xs={12}>
      <Card className={classes.flex}>
        <CardContent className={classes.equal}>
          <div className={classes.adjust}>
            <Typography component="footer" className={classes.center}>
              Made with <Favorite className={classes.icon} />,&nbsp;
              <a
                href="https://ipfs.io/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                IPFS
              </a>,&nbsp;
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                React
              </a>,&nbsp;
              <a
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Redux
              </a> and&nbsp;
              <a
                href="https://material-ui-next.com"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Material UI
              </a>&nbsp;
              - &copy; 2018 by&nbsp;
              <a
                href="mailto:stylesuxx@gmail.com"
                className={classes.link}
              >
                sylesuxx
              </a>
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
