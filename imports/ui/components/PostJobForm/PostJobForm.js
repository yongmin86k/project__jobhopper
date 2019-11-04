import React, { Component, Fragment } from "react";
import { Categories } from "/imports/api/categories";
import { withTracker } from "meteor/react-meteor-data";
import { Form, Field } from "react-final-form";
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
import AddIcon from "@material-ui/icons/Add";
import styles from "./styles";
import { withStyles } from "@material-ui/core";

class _PostJobForm extends Component {
  render() {
    const { classes } = this.props;
    // console.log(this.props);

    return (
      <Form
        onSubmit={values => {
          console.log("Submit");
        }}
        validate={values => {
          console.log("validate");
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
              {/*  */}
              <Grid container direction="row" className={classes.row}>
                <Grid item>
                  <Typography color="textPrimary" component="p" variant="body1">
                    1. Select an image
                  </Typography>
                  <Button
                    aria-label="Add Image"
                    type="button"
                    variant="contained"
                    size="large"
                    color="secondary"
                  >
                    <AddIcon />
                    Add
                  </Button>
                </Grid>
              </Grid>
              {/*  */}
              <Grid container direction="row" className={classes.row}>
                <Grid item>
                  <Typography color="textPrimary" component="p" variant="body1">
                    2. Fill the title of the job
                  </Typography>
                  <FormControl variant="filled" fullWidth>
                    <InputLabel htmlFor="title">Job title</InputLabel>
                    <Field
                      name="title"
                      render={({ input, meta }) => (
                        <FilledInput
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
                {/*  */}
                <Grid item>
                  <Typography color="textPrimary" component="p" variant="body1">
                    3. Select a category
                  </Typography>
                  <FormControl variant="filled" fullWidth>
                    <InputLabel htmlFor="title">Category</InputLabel>
                    <Field
                      name="category"
                      render={({ input, meta }) => (
                        <FilledInput
                          className={classes.input}
                          id="category"
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
              {/*  */}
              <Grid container direction="row" className={classes.row}>
                <Grid item>
                  <Typography color="textPrimary" component="p" variant="body1">
                    4. Describe the job
                  </Typography>
                  <FormControl variant="filled" fullWidth>
                    <InputLabel htmlFor="description">
                      Job description
                    </InputLabel>
                    <Field
                      name="description"
                      render={({ input, meta }) => (
                        <FilledInput
                          className={classes.input}
                          id="description"
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
              {/*  */}
              <Grid container direction="row" className={classes.row}>
                <Grid item>
                  <Typography color="textPrimary" component="p" variant="body1">
                    5. Set Zipcode of the loaction
                  </Typography>
                  <FormControl variant="filled" fullWidth>
                    <InputLabel htmlFor="zipCode">Zip code</InputLabel>
                    <Field
                      name="zipCode"
                      render={({ input, meta }) => (
                        <FilledInput
                          className={classes.input}
                          id="zipCode"
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
                {/*  */}
                <Grid item>
                  <Typography color="textPrimary" component="p" variant="body1">
                    6. Set the minmum and maximum prices
                  </Typography>
                  <Grid container>
                    <Grid item>
                      <FormControl variant="filled" fullWidth>
                        <InputLabel htmlFor="priceMin">Min</InputLabel>
                        <Field
                          name="priceMin"
                          render={({ input, meta }) => (
                            <FilledInput
                              className={classes.input}
                              id="priceMin"
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
                    <Grid item>
                      <FormControl variant="filled" fullWidth>
                        <InputLabel htmlFor="priceMax">Max</InputLabel>
                        <Field
                          name="priceMax"
                          render={({ input, meta }) => (
                            <FilledInput
                              className={classes.input}
                              id="priceMax"
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
                </Grid>
              </Grid>
              {/*  */}
              <Grid container direction="row" className={classes.row}>
                <Grid item>
                  <Typography color="textPrimary" component="p" variant="body1">
                    7. Set the expiry date
                  </Typography>
                  <FormControl variant="filled" fullWidth>
                    <InputLabel htmlFor="dateExpire">Expiry date</InputLabel>
                    <Field
                      name="dateExpire"
                      render={({ input, meta }) => (
                        <FilledInput
                          className={classes.input}
                          id="dateExpire"
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
              {/*  */}
              <Button
                type="button"
                variant="outlined"
                size="large"
                color="secondary"
                disabled={!valid}
                onClick={() => {
                  form.reset();
                }}
              >
                Reset
              </Button>
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="secondary"
                disabled={!valid}
              >
                Submit
              </Button>
            </form>
          );
        }}
      ></Form>
    );
  }
}

const PostJobForm = withStyles(styles)(_PostJobForm);

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    categories: Categories.find({}).fetch()
  };
})(PostJobForm);
