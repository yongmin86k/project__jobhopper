import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

export const ViewerContext = React.createContext();

const ViewerProvider = ({ children, currentUser, currentUserId }) => {
  return (
    <ViewerContext.Provider value={{ currentUser, currentUserId }}>
      {children}
    </ViewerContext.Provider>
  );
};

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(ViewerProvider);
