import React from "react";
import { Card } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import AccountsUIWrapper from "../../components/AccountsWrapper";

const Home = () => {
  return (
    <div className="login-wrapper">
      <AccountsUIWrapper />
      {/* {props.currentUserId ? (
        <div className="Home-wrapper">
          <Card>Hello world</Card>
        </div>
      ) : (
        <div className="logged-out-message">
          <p>Please sign in to see your Jobs.</p>
        </div>
      )} */}
    </div>
  );
};

export default Home;
