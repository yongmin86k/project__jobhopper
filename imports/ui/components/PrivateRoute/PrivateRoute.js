import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ViewerContext } from "/imports/ui/contexts/ViewerProvider";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  return (
    <ViewerContext.Consumer>
      {({ currentUserId }) => (
        <Route
          render={props => {
            if (currentUserId) {
              return <Component {...props} />;
            }
            return (
              <Redirect to={{ pathname: "/", state: { from: location } }} />
            );
          }}
          {...rest}
        />
      )}
    </ViewerContext.Consumer>
  );
};

export default PrivateRoute;
