import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./src/Routes";

Meteor.startup(() => {
  ReactDOM.render(
    <Router>
      <Routes />
    </Router>,
    document.getElementById("root")
  );
});
