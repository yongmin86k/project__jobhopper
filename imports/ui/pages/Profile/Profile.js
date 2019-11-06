import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { withTracker } from "meteor/react-meteor-data";
// CARD TAB
import PropTypes from "prop-types";
import ProfileJobs from "/imports/ui/components/ProfileJobs";

const _Profile = () => {
  return <ProfileJobs />;
};

const Profile = withTracker(() => {
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(_Profile);

export default withStyles(styles)(Profile);
