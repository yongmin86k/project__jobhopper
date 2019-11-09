import React, { Component, Fragment } from "react";
import { Form, Field } from "react-final-form";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
import "../../../api/users";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  IconButton,
  FilledInput,
  InputAdornment
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import validate from "./helpers/validation";

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true,
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
        // Login :: success
        console.log(JSON.stringify(Meteor.user(), null, 2));
      } else {
        // Login :: error
        console.log(e);
      }
    });
  };

  loginError = ({ email }) => {
    print("invalid email");
  };

  signUp = async ({ email, password, fullname, country = "us5", zipCode }) => {
    const validZipCode = await fetch(
      `https://zipcodedownload.com:5430/Filter?format=json&postalcode=${zipCode}&country=${country}&key=${Meteor.settings.public.API.POSTCODE}`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => {
        if (data.length === 1) {
          return data[0];
        } else if (data.length === 0) {
          throw new Error("Not valid code. Please check again");
        } else {
          throw new Error("Specify the code.");
        }
      })
      .catch(error => {
        throw new Error(error);
      });

    await Accounts.createUser({
      email,
      password,
      profile: {
        fullname,
        address: {
          country,
          zipCode,
          ...validZipCode
        }
      }
    });
  };

  render() {
    // console.log(this.props);
    const { classes } = this.props;
    const activateForm = this.state.formToggle;

    return (
      <Form
        onSubmit={values => {
          console.log("Submit");
          activateForm ? this.logIn(values) : this.signUp(values);
        }}
        validate={values => {
          return validate(values, activateForm);
        }}
        render={({ handleSubmit, form, valid, submitSucceeded }) => {
          return (
            <form
              onSubmit={e => {
                handleSubmit(e);
              }}
              noValidate
            >
              {!activateForm && (
                <FormControl variant="filled" fullWidth>
                  <InputLabel htmlFor="fullname">Fullname *</InputLabel>
                  <Field
                    name="fullname"
                    render={({ input, meta }) => (
                      <FilledInput
                        className={classes.input}
                        id="fullname"
                        inputProps={{
                          autoComplete: "off"
                        }}
                        {...input}
                        type="text"
                        value={input.value}
                        required
                      />
                    )}
                  />
                </FormControl>
              )}
              {/*  */}
              <FormControl variant="filled" fullWidth>
                <InputLabel htmlFor="email">Email *</InputLabel>
                <Field
                  name="email"
                  render={({ input, meta }) => (
                    <FilledInput
                      className={classes.input}
                      id="email"
                      inputProps={{
                        autoComplete: "off"
                      }}
                      {...input}
                      type="email"
                      value={input.value}
                      required
                      autoFocus
                    />
                  )}
                />
              </FormControl>
              {/*  */}
              <FormControl variant="filled" fullWidth>
                <InputLabel htmlFor="password">Password *</InputLabel>
                <Field
                  name="password"
                  render={({ input, meta }) => (
                    <FilledInput
                      className={classes.input}
                      id="password"
                      autoComplete="off"
                      {...input}
                      type={this.state.showPassword ? "text" : "password"}
                      value={input.value}
                      required
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
                    <RadioGroup
                      aria-label="country"
                      name="country"
                      value={this.state.defaultCountry}
                      onChange={this.handleChangeCountry}
                      className={classes.input}
                    >
                      <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        className={classes.btnWrap}
                      >
                        <Field name="country" type="radio" value="us5">
                          {({ input, meta }) => {
                            return (
                              <FormControlLabel
                                className={classes.btnChild}
                                {...input}
                                control={
                                  <Radio
                                    color="primary"
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
                                className={classes.btnChild}
                                {...input}
                                control={
                                  <Radio
                                    color="primary"
                                    checked={this.state.defaultCountry === "ca"}
                                  />
                                }
                                value="ca"
                                label="Canada"
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
                        <InputLabel htmlFor="zipCode">Zip code *</InputLabel>
                        <Field
                          name="zipCode"
                          render={({ input, meta }) => (
                            <FilledInput
                              className={classes.input}
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
                              required
                              inputProps={{
                                max: "99999",
                                maxLength: "5",
                                autoComplete: "off",
                                className: classes.postCode
                              }}
                            />
                          )}
                        />
                      </Fragment>
                    ) : (
                      <Fragment>
                        <InputLabel htmlFor="zipCode">Postal code *</InputLabel>
                        <Field
                          name="zipCode"
                          render={({ input, meta }) => (
                            <FilledInput
                              className={classes.input}
                              id="zipCode"
                              {...input}
                              type="text"
                              value={input.value}
                              inputProps={{
                                maxLength: "6",
                                autoComplete: "off",
                                className: classes.postCode
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
                        color="primary"
                        disabled={!valid}
                      >
                        Login
                      </Button>

                      <Button
                        type="button"
                        variant="outlined"
                        size="large"
                        color="primary"
                        onClick={this.changeForm}
                      >
                        Signup
                      </Button>
                      {email ? email.loginError : "invalid email"}
                    </Fragment>
                  ) : (
                    <Fragment>
                      <Button
                        type="button"
                        variant="outlined"
                        size="large"
                        color="primary"
                        onClick={this.changeForm}
                      >
                        Login
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        color="primary"
                        disabled={!valid}
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

export default withStyles(styles)(AccountForm);
