import React, { Component, Fragment } from "react";
import { Meteor } from "meteor/meteor";
import { Users } from "/imports/api/users";
import { Categories } from "/imports/api/categories";
import { withTracker } from "meteor/react-meteor-data";
import { Link } from "react-router-dom";

import { Form } from "react-final-form";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Button,
  Grid,
  Typography,
  TextField
} from "@material-ui/core";

import Gravatar from "react-gravatar";
import { RemainTime } from "/imports/ui/components";

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: "Loading",
      defaultValue: {
        category: "category",
        title: "Title",
        date: {
          datePosted: moment(),
          dateExpire: moment().days(8)
        },
        description: "Please fill a description",
        priceMax: 0,
        priceMin: 0,
        jobImage: "https://via.placeholder.com/300"
      }
    };
  }

  countdownTime = dateExpire => {
    setTimeout(() => {
      this.setState({ timeLeft: RemainTime(dateExpire) });
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
      currentUser,
      currentUserID,
      previewValue
    } = this.props;

    const isData = jobInfo && jobInfo._id ? true : false;

    // VAR :: ID of user who posted the job
    const clientInfo = isData
      ? userLists.filter(user => user._id === jobInfo.userPosted)[0]
      : currentUser;

    // VAR :: category of the job
    const categoryTitle = jobInfo
      ? categoryLists.filter(list => {
          return list._id === jobInfo.category;
        })[0]
      : previewValue && previewValue.category
      ? categoryLists.filter(list => {
          return list._id === previewValue.category;
        })[0]
      : null;

    // Fn :: count down
    const dateExpire = isData
      ? moment(jobInfo.date.dateExpire)
      : previewValue && previewValue.dateExpire
      ? moment(previewValue.dateExpire)
      : this.state.defaultValue.date.dateExpire;

    // this.countdownTime(dateExpire);
    this.countdownTime(dateExpire);

    // CONDITIONS :: existence of the job logs
    const isJobLogs = jobInfo && jobInfo.hopLogs && jobInfo.hopLogs.length > 0;

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
    const currentPrice = isData
      ? !isJobLogs
        ? jobInfo.priceMax
        : latestBidData.price
      : previewValue && previewValue.priceMax
      ? parseInt(previewValue.priceMax)
      : this.state.defaultValue.priceMax;

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
                {!previewValue ? (
                  <CardActionArea
                    component={Link}
                    to={`/profile/${clientInfo.profile.fullname}`}
                  >
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
                  </CardActionArea>
                ) : (
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
                )}

                <CardMedia
                  className={classes.media}
                  image={
                    isData
                      ? jobInfo.jobImage
                      : previewValue && previewValue.jobImage
                      ? previewValue.jobImage
                      : this.state.defaultValue.jobImage
                  }
                  title={
                    isData
                      ? jobInfo.title
                      : previewValue && previewValue.title
                      ? previewValue.title
                      : this.state.defaultValue.title
                  }
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
                      {isData
                        ? jobInfo.title
                        : previewValue && previewValue.title
                        ? previewValue.title
                        : this.state.defaultValue.title}
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
                    {categoryTitle
                      ? categoryTitle.title
                      : this.state.defaultValue.category}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    {isData
                      ? jobInfo.description.split(`\n`).map((p, key) => {
                          return (
                            <Fragment key={key}>
                              {p}
                              {key !==
                              jobInfo.description.split(`\n`).length - 1 ? (
                                <br />
                              ) : null}
                            </Fragment>
                          );
                        })
                      : previewValue && previewValue.description
                      ? previewValue.description.split(`\n`).map((p, key) => {
                          return (
                            <Fragment key={key}>
                              {p}
                              {key !==
                              previewValue.description.split(`\n`).length -
                                1 ? (
                                <br />
                              ) : null}
                            </Fragment>
                          );
                        })
                      : this.state.defaultValue.description}
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
                        disabled={!isData ? true : false}
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
    currentUser: Meteor.user(),
    userLists,
    categoryLists
  };
})(withStyles(styles)(JobCard));
