import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { Grid, Typography, withStyles } from "@material-ui/core";
import { ProfileUser, ProfileJobs, Reviews } from "/imports/ui/components";

class Profile extends Component {
  render() {
    const { classes, userInfo, currentUser } = this.props;

    return (
      <Grid container spacing={3} className={classes.wrap}>
        <Grid item item xs={12} sm={6} md={4}>
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

        <Grid item item xs={12} sm={6} md={4}>
          <Typography
            className={classes.jobs}
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Jobs
          </Typography>
          <ProfileJobs userInfo={userInfo} currentUser={currentUser} />
        </Grid>

        <Grid item item xs={12} sm={6} md={4}>
          <Reviews />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Profile);

Profile.propTypes = {
  userInfo: PropTypes.object,
  currentUser: PropTypes.object
};
