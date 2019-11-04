import React, { Component } from "react";
import { Categories } from "/imports/api/categories";
import { withTracker } from "meteor/react-meteor-data";

class PostJobForm extends Component {
  render() {
    console.log(this.props);
    return "PostJobForm";
  }
}

export default withTracker(() => {
  return {
    categories: Categories.find({}).fetch()
  };
})(PostJobForm);
