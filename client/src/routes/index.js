import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ViewerContext } from "/imports/ui/contexts/ViewerProvider";

import { PrivateRoute } from "/imports/ui/components";
import { Home, Profile, Jobs, Search } from "/imports/ui/pages";

const routes = props => {
  return (
    <ViewerContext.Consumer>
      {({ currentUserId }) => {
        return !currentUserId ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect from="*" to="/" />
          </Switch>
        ) : (
          <Switch>
            <PrivateRoute exact path="/jobs" component={Jobs} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/search" component={Search} />
            <PrivateRoute exact path="/" component={Home} />
            <Redirect from="*" to="/jobs" />
          </Switch>
        );
      }}
    </ViewerContext.Consumer>
  );
};

export default routes;
