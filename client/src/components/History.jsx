import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import FacebookIcon from 'mdi-material-ui/FacebookBox';
import TwitterIcon from 'mdi-material-ui/TwitterBox';
import GoogleIcon from 'mdi-material-ui/GooglePlusBox';

const styles = theme => ({
  date: {
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  content: {
    display: 'flex',
  },
  image: {
    width: 200,
    height: 200,
  },
  details: {
    flex: 1,
    flexDirection: 'column',
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: '100%',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  textFieldBase: {
    width: '100%',
  },
  divider: {
    marginTop: 8,
    marginBottom: 8,
  },
  socialDivider: {
    marginTop: 8,
    marginBottom: 2,
  },
  right: {
    textAlign: 'right',
  },
  icons: {
    height: 67,
    width: 67,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  cardContent: {
    paddingBottom: '0px !important',
  },
});

const History = ({
  classes,
  history,
  clear,
}) => {
  const historyItem = (hash, date, time, url) => (
    <Grid container spacing={24} key={hash}>
      <Grid item xs={12}>
        <Card className={classes.content}>
          <a
            href={url}
            title={hash}
            target="_blank"
          >
            <CardMedia
              className={classes.image}
              image={url}
              title={hash}
            />
          </a>
          <div className={classes.details}>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.date}>{date} - {time}</Typography>
              <Divider className={classes.divider} />
              <TextField
                className={classes.textFieldBase}
                defaultValue={`https://ipfs.io/ipfs/${hash}`}
                label="IPFS URL"
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.textFieldRoot,
                    input: classes.textFieldInput,
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                  className: classes.textFieldFormLabel,
                }}
              />
              <Divider className={classes.socialDivider} />
              <div className={classes.right}>
                <a
                  href={`https://plus.google.com/share?url=${url}`}
                  title="Share on Google+"
                  target="_blank"
                >
                  <GoogleIcon className={classes.icons} />
                </a>
                <a
                  href={`https://twitter.com/home?status=Check out the image I just uploaded to the InterPlanetary File System: ${url}`}
                  title="Share on Twitter"
                  target="_blank"
                >
                  <TwitterIcon className={classes.icons} />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                  title="Share on Facebook"
                  target="_blank"
                >
                  <FacebookIcon className={classes.icons} />
                </a>
              </div>
            </CardContent>
          </div>
        </Card>
      </Grid>
    </Grid>
  );

  const historyItems = history.map((item) => {
    const url = `https://ipfs.io/ipfs/${item.hash}`;
    return historyItem(item.hash, item.date, item.time, url);
  });

  const clearHistoryButton = (history.length > 0) ? (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <div className={classes.right}>
          <Button raised onClick={clear}>
            Clear Upload History
          </Button>
        </div>
      </Grid>
    </Grid>
  ) : '';

  return (
    <div>
      {clearHistoryButton}
      {historyItems}
    </div>
  );
};

History.propTypes = {
  classes: PropTypes.shape().isRequired,
  history: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
  })).isRequired,
  clear: PropTypes.func.isRequired,
};

export default withStyles(styles)(History);
