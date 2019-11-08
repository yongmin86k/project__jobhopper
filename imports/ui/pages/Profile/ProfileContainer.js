import React, { Component } from "react";
import Profile from "./Profile";

import { withRouter } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Users } from "/imports/api/users";

class ProfileContainer extends Component {
  render() {
    const { userInfo } = this.props;
    return (
      <section className="sectionWithMenuBar">
        <Profile userInfo={userInfo} />
      </section>
    );
  }
}

export default withRouter(
  withTracker(({ match }) => {
    Meteor.subscribe("allUsers");

    const currentUser = Meteor.user();
    const userInfo =
      match.path !== "/profile/:fullname" && currentUser
        ? currentUser
        : Users.find({ "profile.fullname": match.params.fullname }).fetch()[0];

    return {
      userInfo
    };
  })(ProfileContainer)
);
