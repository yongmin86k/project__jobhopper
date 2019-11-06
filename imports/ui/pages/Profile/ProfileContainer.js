import React, { Component } from "react";
import Profile from "./Profile";

class ProfileContainer extends Component {
  render() {
    return (
      <section className="sectionWithMenuBar">
        <Profile />
      </section>
    );
  }
}

export default ProfileContainer;
