import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Profile from "../pages/Profile";
import Jobs from "../pages/Jobs";
import { ViewerContext } from "../context/ViewerProvider";
import PrivateRoute from "../components/PrivateRoute";

export default () => {
  return (
    <ViewerContext.Consumer>
      {({ viewer }) => {
        if (!viewer) {
          return (
            <Switch>
              <Route path="/home" component={Home} />
              <Redirect from="*" to="/welcome" />
            </Switch>
          );
        }
        return (
          <Fragment>
            <Menu />
            <Switch>
              <Route exact path="/home" component={Home} />
              <PrivateRoute path="/welcome" component={Welcome} />
              <PrivateRoute path="/search" component={Search} />
              <PrivateRoute path="/jobs" component={Jobs} />
              <PrivateRoute path="/profile/:userid" component={Profile} />
              <PrivateRoute path="/profile" component={Profile} />
              <Redirect from="*" to="/home" />
            </Switch>
          </Fragment>
        );
      }}
    </ViewerContext.Consumer>
  );
};
