import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { PostJobForm, PostJobPreview } from "/imports/ui/components";
import { Grid, Typography, Paper } from "@material-ui/core";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewValue: null
    };
  }

  updatePreview = values => {
    this.setState({ previewValue: values });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={3} justify="center">
        <Grid item className={`${classes.grid} ${classes.preview}`}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Preview
          </Typography>

          <PostJobPreview previewValue={this.state.previewValue} />
        </Grid>
        <Grid item className={classes.grid}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Form
          </Typography>
          <Paper className={classes.wrap}>
            <PostJobForm updatePreview={this.updatePreview} />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Post);
