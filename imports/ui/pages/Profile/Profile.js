import React, { Component } from "react";
import styles from "./styles";
import { Grid, Typography, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { ProfileUser, ProfileJobs } from "/imports/ui/components";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
          <ProfileJobs />
        </Grid>
        <Grid item xs={4}>
          a
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Profile);
