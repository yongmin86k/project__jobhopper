import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Redirect, Route, Switch } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { PrivateRoute, MenuBar } from "/imports/ui/components";
import { Home, Profile, Jobs, Search, Post } from "/imports/ui/pages";

const routes = ({ currentUserId }) => (
  <Fragment>
    <MenuBar currentUserId={currentUserId} />
    {!currentUserId ? (
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
    ) : (
      <Switch>
        <PrivateRoute
          exact
          path="/post"
          component={Post}
          currentUserId={currentUserId}
        />
        <PrivateRoute
          path="/jobs"
          component={Jobs}
          currentUserId={currentUserId}
        />

        <PrivateRoute
          path="/profile/:fullname"
          component={Profile}
          currentUserId={currentUserId}
        />
        <PrivateRoute
          path="/profile"
          component={Profile}
          currentUserId={currentUserId}
        />
        <Redirect from="*" to="/jobs" />
      </Switch>
    )}
  </Fragment>
);

export default withTracker(() => {
  return {
    currentUserId: Meteor.userId()
  };
})(routes);

routes.propTypes = {
  currentUserId: PropTypes.string
};
