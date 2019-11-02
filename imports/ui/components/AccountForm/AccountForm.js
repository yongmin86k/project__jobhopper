import React, { Component } from "react";
import { Form, Field } from "react-final-form";

import { Accounts } from "meteor/accounts-base"; // use it to create user
import { Meteor } from "meteor/meteor";

import "../../../api/users";

import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Typography,
  TextField
} from "@material-ui/core";

class AccountForm extends Component {
  logIn = ({ email, password }) => {
    Meteor.loginWithPassword(email, password, e => {
      if (Meteor.user()) {
        console.log(JSON.stringify(Meteor.user(), null, 2));
      } else {
        console.log(e.reason);
      }
    });
  };

  render() {
    console.log(this.props);
    return (
      <Form
        onSubmit={values => {
          console.log(values);
          this.logIn(values);
        }}
        validate={values => {
          console.log(values);
        }}
        render={({ handleSubmit, form, valid, submitSucceeded }) => {
          return (
            <form
              onSubmit={e => {
                handleSubmit(e);
                form.reset();
              }}
              noValidate
            >
              <FormControl fullWidth>
                <InputLabel htmlFor="fullname">Email</InputLabel>
                <Field
                  name="email"
                  render={({ input, meta }) => (
                    <Input
                      id="email"
                      inputProps={{
                        autoComplete: "off"
                      }}
                      {...input}
                      type="email"
                      value={input.value}
                    />
                  )}
                />
              </FormControl>

              <FormControl fullWidth>
                <Field
                  name="password"
                  render={({ input, meta }) => (
                    <TextField
                      id="password"
                      label="Password"
                      autoComplete="off"
                      {...input}
                      type="password"
                      value={input.value}
                    />
                  )}
                />
              </FormControl>
              <FormControl>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    color="secondary"
                    disabled={false}
                  >
                    Login
                  </Button>
                  <Button
                    type="button"
                    variant="contained"
                    size="large"
                    color="secondary"
                    disabled={true}
                    onClick={() => {
                      console.log(1);
                    }}
                  >
                    Signup
                  </Button>
                </Grid>
              </FormControl>
              <Typography></Typography>
            </form>
          );
        }}
      ></Form>
    );
  }
}

export default AccountForm;
