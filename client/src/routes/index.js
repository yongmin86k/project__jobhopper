import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ViewerContext } from "/imports/ui/contexts/ViewerProvider";

import { PrivateRoute, MenuBar } from "/imports/ui/components";
import { Home, Profile, Jobs, Search, Post } from "/imports/ui/pages";

const routes = () => (
  <ViewerContext.Consumer>
    {({ currentUserId }) => (
      <Fragment>
        <MenuBar />
        {!currentUserId ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect from="*" to="/" />
          </Switch>
        ) : (
          <Switch>
            <PrivateRoute exact path="/post" component={Post} />
            <PrivateRoute exact path="/jobs:jobID" component={Jobs} />
            <PrivateRoute exact path="/jobs" component={Jobs} />
            <PrivateRoute exact path="/profile:fullname" component={Profile} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/search" component={Search} />
            <Redirect from="*" to="/jobs" />
          </Switch>
        )}
      </Fragment>
    )}
  </ViewerContext.Consumer>
);

export default routes;
