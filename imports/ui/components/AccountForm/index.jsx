import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
import "../../../api/users";

export default class AccountForm extends Component {
  signUp = event => {
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
      name: event.target.name.value
    };

    Accounts.createUser(data, function(error) {
      if (Meteor.user()) {
        let userID = Meteor.userId();
        Meteor.call("users.updateName", userID, name);
        alert("User Added");
      } else {
        console.log("ERROR: " + error.reason);
      }
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Sign Up Form</h3>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.signUp(event);
          }}
        >
          <label>
            Name
            <input
              type="text"
              name="name"
              style={{ marginLeft: 10, borderWidth: "1px" }}
            />
          </label>
          <br />
          <br />
          <label>
            Email
            <input
              type="text"
              name="email"
              style={{ marginLeft: 10, borderWidth: "1px" }}
            />
          </label>
          <br />
          <br />
          <label>
            Password
            <input
              type="text"
              name="password"
              style={{ marginLeft: 10, borderWidth: "1px" }}
            />
          </label>
          <br />
          <br />
          <input
            type="submit"
            value="Sign Up"
            style={{ marginLeft: 10, borderWidth: "1px" }}
          />
        </form>
      </div>
    );
  }
}
