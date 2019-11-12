import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  location,
  currentUserId,
  ...rest
}) => {
  return (
    <Route
      render={props => {
        if (currentUserId) {
          return <Component {...props} />;
        }
        return <Redirect to={{ pathname: "/", state: { from: location } }} />;
      }}
      {...rest}
    />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  location: PropTypes.object,
  currentUserId: PropTypes.string
};
