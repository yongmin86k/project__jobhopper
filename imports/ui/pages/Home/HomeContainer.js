import React, { Component } from "react";
import Home from "./Home";

import { mockUser, mockBid } from "/imports/api";

import { withTracker } from "meteor/react-meteor-data";

class HomeContainer extends Component {
  render() {
    console.log(this.props);
    return <Home />;
  }
}

export default withTracker(() => {
  return {
    mockUser,
    mockBid,
    mockCategories,
    mockDirectMessages,
    mockCompletedJobs
  };
})(HomeContainer);
