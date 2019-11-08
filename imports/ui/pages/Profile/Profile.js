import React, { Component } from "react";
import styles from "./styles";
import { Grid, Typography, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { ProfileUser, ProfileJobs, Reviews } from "/imports/ui/components";

class Profile extends Component {
  render() {
    const { classes, userInfo } = this.props;

    return (
      <Grid container spacing={3} className={classes.wrap}>
        <Grid item xs={4}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Profile Info
          </Typography>
          <ProfileUser userInfo={userInfo} />
        </Grid>

        <Grid item xs={4}>
          <Typography
            className={classes.jobs}
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Jobs
          </Typography>
          <ProfileJobs />
        </Grid>

        <Grid item xs={4}>
          <Reviews />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Profile);
