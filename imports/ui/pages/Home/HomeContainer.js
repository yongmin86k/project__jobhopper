import React, { Component } from "react";
import Home from "./Home";

import { mockUser } from "/imports/api";

import { withTracker } from "meteor/react-meteor-data";

class HomeContainer extends Component {
  render() {
    return <Home />;
  }
}

export default withTracker(() => {
  console.log(mockUser);
})(HomeContainer);
