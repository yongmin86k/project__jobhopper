import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./src/Routes";

import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import reset from "./reset.css";
import styles from "./styles.css";

Meteor.startup(() => {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </MuiThemeProvider>,
    document.getElementById("root")
  );
});
