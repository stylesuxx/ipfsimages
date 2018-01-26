import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import Card, {
  CardContent,
} from 'material-ui/Card';

const styles = () => ({
  flex: {
    flex: 1,
  },
  adjust: {
    marginBottom: -10,
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

const Info = ({ classes }) => (
  <Grid container spacing={24}>
    <Grid item xs={12}>
      <Card className={classes.flex}>
        <CardContent className={classes.equal}>
          <div className={classes.adjust}>
            <Typography component="h2" type="headline">
              Upload your images to the <em>InterPlanetary File System:</em>
            </Typography>
            <Typography component="div">
              <ol>
                <li>
                  <strong>Drop your image</strong> in the area <strong>below</strong> or
                  click the button in the top right to select an image from your computer.
                </li>
                <li>
                  <strong>Wait for</strong> the image to <strong>upload</strong>.
                </li>
                <li>
                  <strong>Copy</strong> your image <strong>url</strong> or
                  <strong> share</strong> directly <strong>on social media</strong>.
                </li>
              </ol>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

Info.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Info);
