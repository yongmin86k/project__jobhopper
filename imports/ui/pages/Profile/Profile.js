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
  render() {
    return <ProfileJobs />;
  }
}

class _Hopping extends Component {
  render() {
    return <Hopper />;
  }
}

class _CompletedJobs extends Component {
  render() {
    return <Hopper />;
  }
}

const Profile = withTracker(() => {
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(_Profile);

export default withStyles(styles)(Profile);
