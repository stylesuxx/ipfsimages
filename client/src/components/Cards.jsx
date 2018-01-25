import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';

import ipfsLogo from '../images/ipfs-logo.svg';
import easyLogo from '../images/easy-logo.png';
import githubLogo from '../images/github-logo.png';

const styles = () => ({
  fullHeight: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  ipfsLogo: {
    backgroundColor: '#002d3e',
    backgroundSize: 'contain',
    height: 150,
  },
  githubLogo: {
    backgroundColor: 'transparent',
    marginTop: 10,
    marginBottom: 10,
    height: 130,
  },
  githubBackground: {
    backgroundColor: '#005e82',
  },
  easyBackground: {
    backgroundColor: '#0090c6',
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
  },
});

const Cards = ({ classes }) => (
  <Grid container spacing={24}>
    <Grid item xs={12} md={4}>
      <Card className={classes.fullHeight}>
        <CardMedia
          className={classes.ipfsLogo}
          image={ipfsLogo}
          title="IPFS Logo"
        />
        <Divider />
        <CardContent>
          <Typography type="headline" component="h3">
            IPFS
          </Typography>
          <Typography component="p">
            Your images are uploaded to the
            <em> &quot;InterPlanetary File System&quot; </em>
            (<strong>IPFS</strong>), a distributed,
            decentralized, p2p, hypermedia protocol. You can join this
            awesome network by running your own <strong>IPFS</strong> node.
          </Typography>
        </CardContent>
        <CardActions>
          <form target="_blank" method="get" action="https://ipfs.io">
            <Button
              dense
              type="submit"
              title="Learn more about IPFS"
            >
              Learn More
            </Button>
          </form>
        </CardActions>
      </Card>
    </Grid>
    <Grid item xs={12} md={4}>
      <Card className={classes.fullHeight}>
        <div className={classes.githubBackground}>
          <CardMedia
            className={[classes.ipfsLogo, classes.githubLogo].join(' ')}
            image={githubLogo}
            title="Github Logo"
          />
        </div>
        <CardContent className={classes.grow}>
          <Typography type="headline" component="h3">
            Open Source
          </Typography>
          <Typography component="p">
            This app is open source, if you want to check out the source code
            and see how it works under the hood, feel free to drop by on
            github. There you can also learn how you can run your own Image Uploader.
          </Typography>
        </CardContent>
        <CardActions>
          <form target="_blank" method="get" action="https://github.com/stylesuxx/ipfs-upload">
            <Button
              dense
              type="submit"
              title="Check me out on Github"
            >
              Visit on Github
            </Button>
          </form>
        </CardActions>
      </Card>
    </Grid>
    <Grid item xs={12} md={4}>
      <Card className={classes.fullHeight}>
        <div className={classes.easyBackground}>
          <CardMedia
            className={[classes.ipfsLogo, classes.githubLogo].join(' ')}
            image={easyLogo}
            title="Easy to use"
          />
        </div>
        <CardContent>
          <Typography type="headline" component="h3">
            Easy to use
          </Typography>
          <Typography component="p">
            <em>No registration is required</em>, simply select the file from
            your computer and upload it. You will get a link to access
            your image from anywhere or <em>share it</em> with your
            friends. A local history of your Uploads will be saved for
            convencience - you can clear it any time.
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
