import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Home, Profile, Jobs, Search } from "/imports/ui/pages";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/jobs" component={Jobs} />
      <Route exact path="/search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};
