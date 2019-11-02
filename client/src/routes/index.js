import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ViewerContext } from "/imports/ui/contexts/ViewerProvider";

import { Home, Profile, Jobs, Search } from "/imports/ui/pages";

const routes = props => {
  return (
    <ViewerContext.Consumer>
      {({ currentUserId }) => {
        return currentUserId ? (
          <Switch>
            <Route exact path="/profile" component={Profile} />
            {/* <Route exact path="/jobs" component={Jobs} /> */}
            <Route exact path="/search" component={Search} />
            <Route exact path="/" component={Home} />
            <Redirect from="*" to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/jobs" component={Jobs} />
            <Route exact path="/" component={Home} />
            <Redirect from="*" to="/" />
          </Switch>
        );
      }}
    </ViewerContext.Consumer>
  );
};

export default routes;
