import React from "react";
import { Card } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import AccountForm from "../../components/AccountForm";

const Home = () => {
  return (
    <div className="login-wrapper">
      <AccountForm />
    </div>
  );
};

export default Home;
