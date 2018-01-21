import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
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
  },
  cardContent: {
    paddingBottom: '0px !important',
  },
});

const History = ({
  classes,
  history,
}) => {
  const historyItem = (hash, date, time, url) => (
    <Card key={hash} className={classes.content}>
      <CardMedia
        className={classes.image}
        image={url}
        title={`Image: ${hash}`}
      />
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
  );
  const historyItems = history.map((item) => {
    const date = `${item.date.getFullYear()}/${item.date.getMonth() + 1}/${item.date.getDate()}`;
    const time = `${item.date.getHours()}:${item.date.getMinutes() < 10 ? '0' : ''}${item.date.getMinutes()}:${item.date.getSeconds() < 10 ? '0' : ''}${item.date.getSeconds()}`;
    const url = 'http://www.slidesjs.com/img/example-slide-350-1.jpg';
    return historyItem(item.hash, date, time, url);
  });
  const historyItemsWrapper = <Grid item xs={12}>{historyItems}</Grid>;

  return (
    <Grid container spacing={24}>
      {historyItemsWrapper}
    </Grid>
  );
};

History.propTypes = {
  classes: PropTypes.shape().isRequired,
  history: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,
    hash: PropTypes.string.isRequired,
  })).isRequired,
};

export default withStyles(styles)(History);
