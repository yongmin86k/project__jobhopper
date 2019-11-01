import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Home, Profile } from "/imports/ui/pages";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};
