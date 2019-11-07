import React, { Fragment, Component } from "react";
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
  withStyles
} from "@material-ui/core";
import styles from "./styles";
import Gravatar from "react-gravatar";

// class ProfileContainer extends Component {

class ProfileUser extends Component {
  render() {
    const { classes, userInfo } = this.props;
    return (
      <Card className={classes.card}>
        {!userInfo ? (
          <div>Loading</div>
        ) : (
          <Fragment>
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
            <Grid container alignItems="center" className={classes.field}>
              <Typography
                variant="body2"
                color="textPrimary"
                component="p"
                className={classes.label}
              >
                Country *
              </Typography>
              <FormControl variant="filled" className={classes.input}>
                <InputLabel id="country">Select a country</InputLabel>
                <Select
                  labelId="country"
                  value={userInfo.profile.address.country}
                  disabled
                >
                  <MenuItem value="us5">United States</MenuItem>
                  <MenuItem value="ca">Canada</MenuItem>
                </Select>
              </FormControl>
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
            <Grid container alignItems="center" className={classes.field}>
              <Typography
                variant="body2"
                color="textPrimary"
                component="p"
                className={classes.label}
              >
                Birthdate
              </Typography>
              <TextField
                fullWidth
                className={classes.input}
                label={
                  userInfo.profile.birthdate ? userInfo.profile.birthdate : null
                }
                variant="filled"
                id="birthdate"
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
                Gender
              </Typography>
              <FormControl variant="filled" className={classes.input}>
                <InputLabel id="gender">Select a gender</InputLabel>
                <Select
                  labelId="gender"
                  value={
                    userInfo.profile.gender ? userInfo.profile.gender : null
                  }
                  disabled
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Fragment>
        )}
        <Grid container alignItems="center">
          <Button
            className={classes.profileBtn}
            variant="contained"
            size="large"
            color="primary"
            fullWidth
            disabled={false}
            onClick={() => {
              console.log(111);
            }}
          >
            Edit
          </Button>
        </Grid>
      </Card>
    );
  }
}

export default withStyles(styles)(ProfileUser);
