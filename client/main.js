import { Meteor } from "meteor/meteor";

import React from "react";
import ReactDOM from "react-dom";

import { Home } from "../imports/ui/pages";

Meteor.startup(() => {
  ReactDOM.render(<Home />, document.getElementById("root"));
});
