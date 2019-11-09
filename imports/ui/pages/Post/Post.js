import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { PostJobForm, PostJobPreview } from "/imports/ui/components";
import { Grid, Typography, Paper } from "@material-ui/core";

const Post = ({ classes }) => {
  return (
    <Grid container spacing={3} justify="center">
      <Grid item className={classes.grid}>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          Preview
        </Typography>
        <Paper className={classes.wrap}>
          <PostJobPreview />
        </Paper>
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
          <PostJobForm />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Post);
