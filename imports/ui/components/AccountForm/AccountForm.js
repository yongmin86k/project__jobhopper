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
  InputAdornment,
  withStyles
} from "@material-ui/core";
import styles from "./styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import validate from "./helpers/validation";
import { LazyLoading } from "/imports/ui/components";

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true, // true: logIn form || false: signUp form
      showPassword: false,
      defaultCountry: "ca",
      error: null,
      animate: false
    };
  }

  changeForm = () => {
    this.setState({ error: null });
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
      } else if (e) {
        // Login :: error
        this.setState({ error: e.reason, animate: false });
      }
    });
  };

  signUp = async ({ email, password, fullname, country = "us5", zipCode }) => {
    const validZipCode = await fetch(
      `https://zipcodedownload.com:5430/Filter?format=json&postalcode=${zipCode}&country=${country}&key=${Meteor.settings.public.API.POSTCODE}`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          this.setState({ error: "Something went wrong ...", animate: false });
        }
      })
      .then(data => {
        if (data.length === 1) {
          return data[0];
        } else if (data.length === 0) {
          this.setState({
            error: "Not valid code. Please check again",
            animate: false
          });
        } else {
          this.setState({
            error: "There is more than 2 areas using same postal code",
            animate: false
          });
        }
      })
      .catch(error => {
        this.setState({
          error: "API error : please contact website manager",
          animate: false
        });
      });
    await Accounts.createUser(
      {
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
      },
      e => {
        if (e) {
          // Signup:: error
          this.setState({ error: e.reason, animate: false });
        }
      }
    );
  };

  render() {
    const { classes } = this.props;
    const activateForm = this.state.formToggle;

    return (
      <Fragment>
        <LazyLoading animate={this.state.animate} />
        <Form
          onSubmit={values => {
            this.setState({ error: null, animate: true });
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
                      <Field
                        name="country"
                        type="radio"
                        defaultValue={this.state.defaultCountry}
                        value={this.state.defaultCountry}
                      >
                        {(input, meta) => {
                          return (
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
                                <FormControlLabel
                                  className={classes.btnChild}
                                  {...input}
                                  control={
                                    <Radio color="primary" value="us5" />
                                  }
                                  value="us5"
                                  label="United States"
                                />
                                <FormControlLabel
                                  className={classes.btnChild}
                                  {...input}
                                  control={<Radio color="primary" value="ca" />}
                                  value="ca"
                                  label="Canada"
                                />
                              </Grid>
                            </RadioGroup>
                          );
                        }}
                      </Field>
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
                          <InputLabel htmlFor="zipCode">
                            Postal code *
                          </InputLabel>
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
                {!this.state.error ? null : (
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    component="p"
                    gutterBottom
                    color="error"
                  >
                    {this.state.error}
                  </Typography>
                )}

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
              </form>
            );
          }}
        ></Form>
      </Fragment>
    );
  }
}

export default withStyles(styles)(AccountForm);
