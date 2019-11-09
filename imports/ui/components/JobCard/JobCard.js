import React, { Component, Fragment } from "react";
import { Meteor } from "meteor/meteor";
import { Users } from "/imports/api/users";
import { Categories } from "/imports/api/categories";
import { withTracker } from "meteor/react-meteor-data";

import { Form, Field } from "react-final-form";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Button,
  Grid,
  Typography,
  TextField,
  IconButton
} from "@material-ui/core";

import Gravatar from "react-gravatar";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: ""
    };
  }

  countdownTime = dateExpire => {
    let currentTime = moment(),
      day = dateExpire.diff(currentTime, "days"),
      hour = dateExpire.diff(currentTime, "hours") % 24,
      min =
        dateExpire.diff(currentTime, "minutes") % 60 < 10
          ? "0" + (dateExpire.diff(currentTime, "minutes") % 60)
          : dateExpire.diff(currentTime, "minutes") % 60,
      sec =
        dateExpire.diff(currentTime, "seconds") % 60 < 10
          ? "0" + (dateExpire.diff(currentTime, "seconds") % 60)
          : dateExpire.diff(currentTime, "seconds") % 60,
      remainTime =
        day > 1
          ? `${day} Days ${hour}:${min}:${sec}`
          : day === 1
          ? `${day} Day ${hour}:${min}:${sec}`
          : `${hour}:${min}:${sec}`;

    setTimeout(() => {
      this.setState({ timeLeft: remainTime });
    }, 1000);
  };

  hopIn = (jobID, userID, currentPrice, isJobLogs) => {
    const hopLog = {
      userID,
      time: new Date(),
      price: isJobLogs ? parseInt(currentPrice) - 2 : parseInt(currentPrice)
    };
    Meteor.call("jobs.hopIn", jobID, hopLog);
  };

  drop = (jobID, userID) => {
    Meteor.call("jobs.drop", jobID, userID);
  };

  render() {
    const {
      classes,
      jobInfo,
      userLists,
      categoryLists,
      currentUserID
    } = this.props;

    // VAR :: ID of user who posted the job
    const clientInfo = userLists.filter(
      user => user._id === jobInfo.userPosted
    )[0];

    // VAR :: category of the job
    const categoryTitle = categoryLists.filter(list => {
      return list._id === jobInfo.category;
    })[0];

    // Fn :: count down
    const dateExpire = moment(jobInfo.date.dateExpire);
    this.countdownTime(dateExpire);

    // CONDITIONS :: existence of the job logs
    const isJobLogs = jobInfo.hopLogs && jobInfo.hopLogs.length > 0;

    // CONDITIONS :: currentUserID existence of the job logs
    const isHoppingIn = !isJobLogs
      ? false
      : jobInfo.hopLogs.some(log => log.userID === currentUserID);

    // VAR :: Latest bid data
    const latestBidData = isJobLogs
      ? jobInfo.hopLogs.sort((a, b) => {
          return b.time - a.time;
        })[0]
      : null;

    // VAR :: User's latest bid data
    const userBidDate = isHoppingIn
      ? jobInfo.hopLogs
          .filter(log => log.userID === currentUserID)
          .sort((a, b) => {
            return b.time - a.time;
          })
      : null;

    // VAR :: current price
    const currentPrice = !isJobLogs ? jobInfo.priceMax : latestBidData.price;

    // VAR :: number of applicants
    const applicants = isJobLogs
      ? jobInfo.hopLogs
          .map(log => log.userID)
          .reduce((acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), [])
          .length
      : null;

    return !clientInfo ? (
      "Loading"
    ) : (
      <Form
        onSubmit={values => {
          this.hopIn(jobInfo._id, currentUserID, currentPrice, isJobLogs);
        }}
        render={({ handleSubmit }) => {
          return (
            <form
              onSubmit={e => {
                handleSubmit(e);
              }}
            >
              <Card>
                <CardHeader
                  avatar={
                    <Gravatar
                      email={clientInfo.emails[0].address}
                      size={40}
                      className={classes.avatar}
                    />
                  }
                  title={clientInfo.profile.fullname}
                  subheader={`Remain : ${this.state.timeLeft}`}
                />
                <CardMedia
                  className={classes.media}
                  image={jobInfo.jobImage}
                  title=""
                />
                <CardContent>
                  <Grid
                    container
                    justify="space-between"
                    alignItems="flex-start"
                    className={classes.grid}
                    wrap="nowrap"
                  >
                    <Typography variant="h4" component="h2" noWrap={true}>
                      {jobInfo.title}
                    </Typography>

                    {isJobLogs ? (
                      <Grid
                        item
                        container
                        direction="column"
                        className={classes.applicants}
                      >
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          component="p"
                        >
                          Applicants
                        </Typography>
                        <Typography
                          variant="body1"
                          color="textPrimary"
                          component="p"
                          style={{ textAlign: "right" }}
                        >
                          {applicants}
                        </Typography>
                      </Grid>
                    ) : null}
                  </Grid>

                  <Grid container spacing={2} justify="space-between">
                    <Grid item xs={userBidDate ? 6 : 12}>
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        component="p"
                        className={classes.fieldPrice}
                      >
                        Current Price
                      </Typography>
                    </Grid>
                    {userBidDate ? (
                      <Grid item xs={6}>
                        <Typography
                          variant="body1"
                          color="textPrimary"
                          component="p"
                        >
                          Your Hop price
                        </Typography>
                      </Grid>
                    ) : null}
                  </Grid>
                  <Grid
                    container
                    spacing={2}
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid item xs={userBidDate ? 6 : 12}>
                      <Typography gutterBottom variant="h4" component="p">
                        ${currentPrice.toFixed(2)}
                      </Typography>
                    </Grid>
                    {userBidDate ? (
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label={`$${userBidDate[0].price.toFixed(2)}`}
                          variant="filled"
                          disabled
                        />
                      </Grid>
                    ) : null}
                  </Grid>

                  <Typography
                    variant="body1"
                    color="textPrimary"
                    component="p"
                    className={classes.category}
                  >
                    {categoryTitle ? categoryTitle.title : null}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    {jobInfo.description}
                  </Typography>
                </CardContent>

                <Grid
                  container
                  className={classes.default}
                  direction="row"
                  justify={isHoppingIn ? "space-around" : "flex-start"}
                  spacing={isHoppingIn ? 2 : 0}
                >
                  {isHoppingIn ? (
                    <Fragment>
                      <Grid item xs={6}>
                        <Button
                          type="button"
                          variant="outlined"
                          size="large"
                          color="primary"
                          fullWidth
                          disabled={false}
                          onClick={() => {
                            this.drop(jobInfo._id, currentUserID);
                          }}
                        >
                          Drop
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          color="primary"
                          fullWidth
                          disabled={userBidDate[0].price === currentPrice}
                        >
                          Hop In
                        </Button>
                      </Grid>
                    </Fragment>
                  ) : (
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        color="primary"
                        fullWidth
                      >
                        Hop In
                      </Button>
                    </Grid>
                  )}
                </Grid>
              </Card>
            </form>
          );
        }}
      />
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("allUsers");
  Meteor.subscribe("allCategories");

  const userLists = Users.find({}, { profile: 1, services: 0 }).fetch();
  const categoryLists = Categories.find().fetch();
  return {
    currentUserID: Meteor.userId(),
    userLists,
    categoryLists
  };
})(withStyles(styles)(JobCard));
