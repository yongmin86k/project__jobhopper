import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Home, Profile, Jobs, Search } from "/imports/ui/pages";

import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

const _routes = props => {
  console.log(props);
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

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(_routes);

//remember export these routes
