import React, { Component, Fragment } from "react";
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
  TextField,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  IconButton,
  FilledInput,
  InputAdornment
} from "@material-ui/core";

import { Visibility, VisibilityOff } from "@material-ui/icons";

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: false,
      showPassword: false,
      defaultCountry: "us5",
      error: null
    };
  }

  changeForm = () => {
    console.log("Change");
    this.setState({ formToggle: !this.state.formToggle });
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleChangeCountry = event => {
    this.setState({ defaultCountry: event.target.value });
  };

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
    // console.log(Meteor.settings.public.API.POSTCODE);
    // console.log(this.props);

    const activateForm = this.state.formToggle;

    return (
      <Form
        onSubmit={values => {
          console.log("Submit");
          // console.log(values);
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
                // form.reset();
              }}
              noValidate
            >
              {!activateForm && (
                <FormControl variant="filled" fullWidth>
                  <InputLabel htmlFor="fullname">Fullname</InputLabel>
                  <Field
                    name="fullname"
                    render={({ input, meta }) => (
                      <FilledInput
                        id="fullname"
                        inputProps={{
                          autoComplete: "off"
                        }}
                        {...input}
                        type="text"
                        value={input.value}
                      />
                    )}
                  />
                </FormControl>
              )}
              {/*  */}
              <FormControl variant="filled" fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Field
                  name="email"
                  render={({ input, meta }) => (
                    <FilledInput
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
              {/*  */}
              <FormControl variant="filled" fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Field
                  name="password"
                  render={({ input, meta }) => (
                    <FilledInput
                      id="password"
                      autoComplete="off"
                      {...input}
                      type={this.state.showPassword ? "text" : "password"}
                      value={input.value}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.handleClickShowPassword}
                            onMouseDown={this.handleMouseDownPassword}
                          >
                            {this.state.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
              </FormControl>
              {/* INPUT :: radio */}
              {!activateForm ? (
                <Fragment>
                  <FormControl fullWidth component="fieldset">
                    <FormLabel component="legend">Select a country</FormLabel>
                    <RadioGroup
                      aria-label="country"
                      name="country"
                      value={this.state.defaultCountry}
                      onChange={this.handleChangeCountry}
                    >
                      <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                      >
                        <Field name="country" type="radio" value="us5">
                          {({ input, meta }) => {
                            return (
                              <FormControlLabel
                                {...input}
                                control={
                                  <Radio
                                    checked={
                                      this.state.defaultCountry === "us5"
                                    }
                                  />
                                }
                                value="us5"
                                label="United States"
                              />
                            );
                          }}
                        </Field>
                        <Field name="country" type="radio" value="ca">
                          {({ input, meta }) => {
                            return (
                              <FormControlLabel
                                {...input}
                                control={
                                  <Radio
                                    checked={this.state.defaultCountry === "ca"}
                                  />
                                }
                                value="ca"
                                label="Canada States"
                              />
                            );
                          }}
                        </Field>
                      </Grid>
                    </RadioGroup>
                  </FormControl>
                  {/* // */}
                  <FormControl variant="filled" fullWidth>
                    {this.state.defaultCountry === "us5" ? (
                      <Fragment>
                        <InputLabel htmlFor="zipCode">Zip code</InputLabel>
                        <Field
                          name="zipCode"
                          render={({ input, meta }) => (
                            <FilledInput
                              onKeyUp={event => {
                                if (event.target.value.length > 5) {
                                  event.target.value = event.target.value.slice(
                                    0,
                                    5
                                  );
                                  return;
                                }
                              }}
                              id="zipCode"
                              {...input}
                              type="number"
                              value={input.value}
                              inputProps={{
                                max: "99999",
                                maxLength: "5",
                                autoComplete: "off"
                              }}
                            />
                          )}
                        />
                      </Fragment>
                    ) : (
                      <Fragment>
                        <InputLabel htmlFor="zipCode">Postal code</InputLabel>
                        <Field
                          name="zipCode"
                          render={({ input, meta }) => (
                            <FilledInput
                              id="zipCode"
                              {...input}
                              type="text"
                              value={input.value}
                              inputProps={{
                                maxLength: "6",
                                autoComplete: "off"
                              }}
                            />
                          )}
                        />
                      </Fragment>
                    )}
                  </FormControl>
                </Fragment>
              ) : null}
              {/*  */}
              <FormControl fullWidth>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  {activateForm ? (
                    <Fragment>
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
                        variant="outlined"
                        size="large"
                        color="secondary"
                        onClick={this.changeForm}
                      >
                        Signup
                      </Button>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <Button
                        type="button"
                        variant="outlined"
                        size="large"
                        color="secondary"
                        disabled={false}
                        onClick={this.changeForm}
                      >
                        Login
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        color="secondary"
                        // disabled={true}
                      >
                        Signup
                      </Button>
                    </Fragment>
                  )}
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
