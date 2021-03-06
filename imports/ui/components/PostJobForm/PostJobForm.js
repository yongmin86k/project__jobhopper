import React, { Component } from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Categories } from "/imports/api/categories";
import { Form, Field } from "react-final-form";
import {
  Button,
  Grid,
  InputLabel,
  InputAdornment,
  Typography,
  TextField,
  MenuItem,
  FormControl,
  FilledInput,
  OutlinedInput,
  Select,
  withStyles
} from "@material-ui/core";
import "date-fns";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";

import styles from "./styles";
import validate from "./helpers/validation";

class PostJobForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultCategory: "",
      selectedDate: new Date()
    };
  }

  categoryChange = event => {
    this.setState({ defaultCategory: event.target.value });
  };

  handleDateChange = newDate => {
    this.setState({ selectedDate: newDate });
  };

  postSingle = async (values, user) => {
    try {
      await Meteor.call("jobs.postSingle", values, user);
    } catch (e) {
      throw e;
    }
  };

  render() {
    const { classes, categories, currentUser, updatePreview } = this.props;

    return (
      <Form
        onSubmit={values => {
          this.postSingle(values, currentUser);
        }}
        validate={values => {
          updatePreview(values);
          return validate(values);
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
              {/* start: Image for JOB */}
              <Grid container direction="row" className={classes.row}>
                <Grid item xs={12}>
                  <Typography
                    className={classes.label}
                    color="textPrimary"
                    component="p"
                    variant="body1"
                  >
                    1. Select an image
                  </Typography>

                  <FormControl fullWidth>
                    <Field
                      name="jobImage"
                      render={({ input, meta }) => (
                        <TextField
                          variant="outlined"
                          label="Image url"
                          autoFocus
                          fullWidth
                          className={classes.input}
                          id="jobImage"
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
                </Grid>
              </Grid>
              {/* end: Image for JOB */}

              <Grid
                container
                direction="row"
                className={classes.row}
                spacing={2}
              >
                {/* start: Title for JOB */}
                <Grid item xs={12} sm={6}>
                  <Typography
                    className={classes.label}
                    color="textPrimary"
                    component="p"
                    variant="body1"
                  >
                    2. Fill the title of the job
                  </Typography>
                  <FormControl fullWidth>
                    <Field
                      name="title"
                      render={({ input, meta }) => (
                        <TextField
                          variant="outlined"
                          label="Job title"
                          className={classes.input}
                          id="title"
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
                </Grid>
                {/* end: Title for JOB */}
                {/* start: SELECT with final-form && material-ui */}
                <Grid item xs={12} sm={6}>
                  <Typography
                    className={classes.label}
                    color="textPrimary"
                    component="p"
                    variant="body1"
                  >
                    3. Select a category
                  </Typography>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="categories">Category *</InputLabel>
                    <Field name="category">
                      {({ input, meta }) => {
                        return (
                          <Select
                            variant="outlined"
                            className={classes.input}
                            labelId="categories"
                            labelWidth={80}
                            id="category"
                            onChange={this.categoryChange}
                            value={this.state.defaultCategory}
                            {...input}
                            displayEmpty={false}
                            required
                          >
                            <MenuItem value="" disabled>
                              Category
                            </MenuItem>
                            {categories.map(cat => (
                              <MenuItem key={cat._id} value={cat._id}>
                                {cat.title}
                              </MenuItem>
                            ))}
                          </Select>
                        );
                      }}
                    </Field>
                  </FormControl>
                </Grid>
                {/* start: SELECT with final-form && material-ui */}
              </Grid>
              {/*  */}
              <Grid container direction="row" className={classes.row}>
                <Grid item xs={12}>
                  <Typography
                    className={classes.label}
                    color="textPrimary"
                    component="p"
                    variant="body1"
                  >
                    4. Describe the job
                  </Typography>
                  <FormControl variant="outlined" fullWidth>
                    <Field
                      name="description"
                      render={({ input, meta }) => (
                        <TextField
                          id="description"
                          className={classes.input}
                          label="Job description"
                          multiline
                          rows="4"
                          margin="normal"
                          variant="outlined"
                          {...input}
                          value={input.value}
                          required
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              {/*  */}
              <Grid
                container
                direction="row"
                spacing={2}
                className={classes.row}
              >
                <Grid item xs={12} sm={6}>
                  <Typography
                    className={classes.label}
                    color="textPrimary"
                    component="p"
                    variant="body1"
                  >
                    5. Set{" "}
                    {currentUser &&
                    currentUser.profile.address.country === "us5"
                      ? "zip code"
                      : "postal code"}{" "}
                    of the loaction
                  </Typography>
                  <FormControl variant="filled" fullWidth>
                    <InputLabel htmlFor="zipCode">
                      {currentUser &&
                      currentUser.profile.address.country === "us5"
                        ? "Zip code"
                        : "Postal code"}
                    </InputLabel>
                    {/*  */}
                    <FilledInput
                      className={classes.input}
                      id="zipCode"
                      inputProps={{
                        autoComplete: "off"
                      }}
                      type="text"
                      value={
                        currentUser
                          ? currentUser.profile.address.zipCode
                          : `Loading`
                      }
                      disabled
                      inputProps={{
                        className: classes.postCode
                      }}
                    />
                  </FormControl>
                </Grid>
                {/*  */}
                <Grid item xs={12} sm={6}>
                  <Typography
                    className={classes.label}
                    color="textPrimary"
                    component="p"
                    variant="body1"
                  >
                    6. Set the minimum and maximum prices
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="priceMin">Min</InputLabel>
                        <Field
                          name="priceMin"
                          render={({ input, meta }) => (
                            <OutlinedInput
                              className={classes.input}
                              labelWidth={32}
                              id="priceMin"
                              inputProps={{
                                autoComplete: "off"
                              }}
                              {...input}
                              type="number"
                              value={input.value}
                              required
                              startAdornment={
                                <InputAdornment position="start">
                                  $
                                </InputAdornment>
                              }
                              inputProps={{
                                className: classes.priceField
                              }}
                            />
                          )}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="priceMax">Max</InputLabel>
                        <Field
                          name="priceMax"
                          render={({ input, meta }) => (
                            <OutlinedInput
                              className={classes.input}
                              labelWidth={32}
                              id="priceMax"
                              inputProps={{
                                autoComplete: "off"
                              }}
                              {...input}
                              type="number"
                              value={input.value}
                              required
                              startAdornment={
                                <InputAdornment position="start">
                                  $
                                </InputAdornment>
                              }
                              inputProps={{
                                className: classes.priceField
                              }}
                            />
                          )}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/*  */}
              <Grid
                container
                direction="row"
                spacing={2}
                className={classes.row}
              >
                <Grid item xs={12} sm={6}>
                  <Typography
                    className={classes.label}
                    color="textPrimary"
                    component="p"
                    variant="body1"
                  >
                    7. Set the expiry date
                  </Typography>
                  {/*  */}
                  <FormControl variant="outlined" fullWidth>
                    <Field
                      name="dateExpire"
                      render={({ input, meta }) => (
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <DateTimePicker
                            id="dateExpire"
                            className={classes.input}
                            inputVariant="outlined"
                            margin="normal"
                            label="Expiry date"
                            animateYearScrolling={false}
                            format="yyyy-MM-dd hh:mm a"
                            onChange={this.handleDateChange}
                            value={this.state.selectedDate}
                            {...input}
                          ></DateTimePicker>
                        </MuiPickersUtilsProvider>
                      )}
                    />
                  </FormControl>
                  {/*  */}
                </Grid>
              </Grid>
              {/*  */}
              <Grid container justify="space-between">
                <Button
                  className={classes.btn}
                  type="button"
                  variant="outlined"
                  size="large"
                  color="primary"
                  onClick={() => {
                    form.reset();
                  }}
                >
                  Reset
                </Button>
                <Button
                  className={classes.btn}
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                  disabled={!valid}
                >
                  Submit
                </Button>
              </Grid>
            </form>
          );
        }}
      ></Form>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("allCategories");
  return {
    currentUser: Meteor.user(),
    categories: Categories.find({}).fetch()
  };
})(withStyles(styles)(PostJobForm));

PostJobForm.propTypes = {
  categories: PropTypes.array,
  currentUser: PropTypes.object,
  updatePreview: PropTypes.func
};
