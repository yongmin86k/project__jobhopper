import React, { Component } from "react";
import styles from "./styles";
import {
  withStyles,
  Tabs,
  Tab,
  AppBar,
  Box,
  Grid,
  Typography
} from "@material-ui/core";
import { withTracker } from "meteor/react-meteor-data";
import Gravatar from "react-gravatar";
import Avatar from "@material-ui/core/Avatar";
// CARD TAB
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import ProfileJobs from "/imports/ui/components/ProfileJobs";

class _Profile extends Component {
  //   constructor() {
  //     super();

  //     this.state = {
  //       profile: Profile,
  //       lastId: 1
  //     };
  //   }
  render() {
    /* 
      import YOUR COMPONENT HERE 
      pass some data as props to your component as well
    */

    // <figure>
    //   <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
    //   <figcaption>Yongmin</figcaption>
    // </figure>

    return (
      <Grid container>
        <Grid item xs={4}>
          a
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

// return (
//   <Grid container justify="center" alignItems="center">
//     <Avatar alt="" src="/public/images/" />
//   </Grid>
// );

const Profile = withTracker(() => {
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(_Profile);

export default withStyles(styles)(Profile);
