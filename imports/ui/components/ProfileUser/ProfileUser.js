import React, { Fragment, Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import {
  Button,
  Card,
  Grid,
  Select,
  InputLabel,
  MenuItem,
  Typography,
  TextField,
  FormControl,
  FilledInput,
  withStyles
} from "@material-ui/core";
import styles from "./styles";
import Gravatar from "react-gravatar";
import { Form, Field } from "react-final-form";

class ProfileUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enableEdit: false,
      selectedCountry: null
    };
  }

  selectCountry = event => {
    this.setState({ selectedCountry: event.target.value });
  };

  updateChange = (values, userID) => {
    Meteor.call("user.updateInfo", values, userID);
  };

  render() {
    const { classes, userInfo, currentUserID } = this.props;
    console.log(userInfo);
    return (
      <Card className={classes.card}>
        {!userInfo ? (
          <div>Loading</div>
        ) : !this.state.enableEdit ? (
          <Fragment>
            {/* profile section before EDIT */}
            <Grid container justify="center" className={classes.wrap}>
              <Gravatar
                email={userInfo.emails[0].address}
                size={160}
                className={classes.imgProfile}
              />
            </Grid>
            <Grid container alignItems="center" className={classes.field}>
              <Typography
                variant="body2"
                color="textPrimary"
                component="p"
                className={classes.label}
              >
                Fullname*
              </Typography>
              <TextField
                fullWidth
                className={classes.input}
                label={userInfo.profile.fullname}
                variant="filled"
                id="fullname"
                disabled
              />
            </Grid>
            <Grid container alignItems="center" className={classes.field}>
              <Typography
                variant="body2"
                color="textPrimary"
                component="p"
                className={classes.label}
              >
                Email*
              </Typography>
              <TextField
                fullWidth
                className={classes.input}
                label={userInfo.emails[0].address}
                variant="filled"
                id="email"
                disabled
              />
            </Grid>

            <Grid container alignItems="center" className={classes.field}>
              <Typography
                variant="body2"
                color="textPrimary"
                component="p"
                className={classes.label}
              >
                Country *
              </Typography>

              <TextField
                fullWidth
                className={classes.input}
                label={
                  userInfo.profile.address.country === "ca"
                    ? "Canada"
                    : "United States"
                }
                variant="filled"
                id="country"
                disabled
              />
            </Grid>
            <Grid container alignItems="center" className={classes.field}>
              <Typography
                variant="body2"
                color="textPrimary"
                component="p"
                className={classes.label}
              >
                {userInfo.profile.address.country === "ca"
                  ? "Postal code*"
                  : "Zipcode*"}
              </Typography>
              <TextField
                fullWidth
                className={classes.postCode}
                label={userInfo.profile.address.zipCode}
                variant="filled"
                id="zipCode"
                disabled
              />
            </Grid>

            <Grid container alignItems="center" className={classes.lastField}>
              <Typography
                variant="body2"
                color="textPrimary"
                component="p"
                className={classes.label}
              >
                Bio
              </Typography>
              <TextField
                fullWidth
                className={classes.input}
                label={userInfo.profile.bio ? userInfo.profile.bio : null}
                variant="filled"
                id="Bio"
                multiline
                rows="3"
                disabled
              />
            </Grid>
            {userInfo && userInfo._id === currentUserID ? (
              <Grid container alignItems="center">
                <Button
                  className={classes.profileBtn}
                  variant="outlined"
                  size="large"
                  color="primary"
                  fullWidth
                  disabled={this.state.enableEdit}
                  onClick={() => {
                    userInfo && userInfo._id === currentUserID
                      ? this.setState({ enableEdit: true })
                      : this.setState({ enableEdit: false });
                  }}
                >
                  Edit
                </Button>
              </Grid>
            ) : null}
          </Fragment>
        ) : (
          <Fragment>
            {/* profile EDITTING */}
            <Form
              onSubmit={values => {
                console.log("SUBMIT");
                this.updateChange(values, currentUserID);
              }}
              validate={values => {
                console.log("VALIDATE: ", values);
              }}
              render={({ handleSubmit, valid }) => {
                return (
                  <form
                    onSubmit={async e => {
                      await handleSubmit(e);
                      await this.setState({ enableEdit: false });
                    }}
                    noValidate
                  >
                    <Grid container justify="center" className={classes.wrap}>
                      <Gravatar
                        email={userInfo.emails[0].address}
                        size={160}
                        className={classes.imgProfile}
                      />
                    </Grid>
                    <Grid
                      container
                      alignItems="center"
                      className={classes.field}
                    >
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        component="p"
                        className={classes.label}
                      >
                        Fullname*
                      </Typography>
                      <FormControl fullWidth className={classes.input}>
                        <Field
                          name="fullname"
                          initialValue={userInfo.profile.fullname}
                          render={({ input, meta }) => (
                            <TextField
                              autoFocus={true}
                              variant="outlined"
                              fullWidth
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
                    </Grid>
                    <Grid
                      container
                      alignItems="center"
                      className={classes.field}
                    >
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        component="p"
                        className={classes.label}
                      >
                        Email*
                      </Typography>
                      <TextField
                        fullWidth
                        className={classes.input}
                        label={userInfo.emails[0].address}
                        variant="filled"
                        id="email"
                        disabled
                      />
                    </Grid>
                    <Grid
                      container
                      alignItems="center"
                      className={classes.field}
                    >
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        component="p"
                        className={classes.label}
                      >
                        Country *
                      </Typography>
                      <FormControl variant="outlined" className={classes.input}>
                        <Field
                          name="country"
                          initialValue={userInfo.profile.address.country}
                          render={({ input, meta }) => (
                            <Select
                              labelId="country"
                              onChange={this.selectCountry}
                              value={this.state.selectedCountry}
                              {...input}
                            >
                              <MenuItem value="us5">United States</MenuItem>
                              <MenuItem value="ca">Canada</MenuItem>
                            </Select>
                          )}
                        />
                      </FormControl>
                    </Grid>
                    <Grid
                      container
                      alignItems="center"
                      className={classes.field}
                    >
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        component="p"
                        className={classes.label}
                      >
                        {userInfo.profile.address.country === "ca"
                          ? "Postal code*"
                          : "Zipcode*"}
                      </Typography>
                      <FormControl className={classes.input}>
                        <Field
                          name="zipCode"
                          initialValue={userInfo.profile.address.zipCode}
                          render={({ input, meta }) => (
                            <TextField
                              inputProps={{
                                className: classes.postCode
                              }}
                              fullWidth
                              variant="outlined"
                              {...input}
                              value={input.value}
                            />
                          )}
                        />
                      </FormControl>
                    </Grid>

                    <Grid
                      container
                      alignItems="center"
                      className={classes.lastField}
                    >
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        component="p"
                        className={classes.label}
                      >
                        Bio
                      </Typography>
                      <Field
                        name="bio"
                        initialValue={userInfo.profile.bio}
                        render={({ input }) => (
                          <TextField
                            fullWidth
                            className={classes.input}
                            placeholder={
                              userInfo.profile.bio ? userInfo.profile.bio : null
                            }
                            {...input}
                            value={input.value}
                            variant="outlined"
                            multiline
                            rows="3"
                          />
                        )}
                      />
                    </Grid>

                    <Grid
                      container
                      alignItems="center"
                      justify="space-between"
                      spacing={2}
                    >
                      <Grid item xs={6}>
                        <Button
                          color="primary"
                          fullWidth
                          type="button"
                          variant="outlined"
                          size="large"
                          onClick={() => {
                            this.setState({ enableEdit: false });
                          }}
                        >
                          Cancel
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          size="large"
                          color="primary"
                        >
                          Done
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                );
              }}
            />
          </Fragment>
        )}
      </Card>
    );
  }
}

export default withTracker(() => {
  return {
    currentUserID: Meteor.userId()
  };
})(withStyles(styles)(ProfileUser));
