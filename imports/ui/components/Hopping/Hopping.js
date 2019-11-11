import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

import { Button, Grid, Typography, TextField } from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { RemainTime } from "/imports/ui/components";

class Hopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: "Loading"
    };
  }
  countdownTime = dateExpire => {
    setTimeout(() => {
      this.setState({ timeLeft: RemainTime(dateExpire) });
    }, 1000);
  };

  hopIn = (jobID, userID, currentPrice) => {
    const hopLog = {
      userID,
      time: new Date(),
      price: parseInt(currentPrice) - 2
    };
    Meteor.call("jobs.hopIn", jobID, hopLog);
  };

  drop = (jobID, userID) => {
    Meteor.call("jobs.drop", jobID, userID);
  };

  render() {
    const { classes, jobInfo, currentUser } = this.props;

    this.countdownTime(moment(jobInfo.date.dateExpire));
    const latestBidData = jobInfo.hopLogs
      ? jobInfo.hopLogs.sort((a, b) => {
          return b.time - a.time;
        })[0]
      : null;

    const latestUserBidDate =
      currentUser && jobInfo.hopLogs
        ? jobInfo.hopLogs
            .filter(log => log.userID === currentUser._id)
            .sort((a, b) => {
              return b.time - a.time;
            })[0]
        : null;

    return (
      <div className={classes.container}>
        {/* section:: Title */}
        <Grid container alignItems="center" wrap="nowrap">
          <Grid
            item
            className={classes.imageBox}
            container
            justify="center"
            alignItems="center"
          >
            <img className={classes.jobImage} src={jobInfo.jobImage} />
          </Grid>
          <Grid item className={classes.title}>
            <Typography variant="h5" component="h3" noWrap={true}>
              {jobInfo.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              noWrap={true}
            >
              {jobInfo.description}
            </Typography>
          </Grid>
        </Grid>
        {/* end section:: Title */}
        {/* section:: Price */}
        <Grid
          container
          spacing={2}
          justify="space-between"
          className={classes.fieldPrice}
        >
          <Grid item xs={6}>
            <Typography variant="body1" color="textPrimary" component="p">
              Current Price
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1" color="textPrimary" component="p">
              Your Hop price
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="space-between" alignItems="center">
          <Grid item xs={6}>
            <Typography variant="h4" component="p">
              ${latestBidData ? latestBidData.price.toFixed(2) : "Loading"}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label={`$${
                latestUserBidDate
                  ? latestUserBidDate.price.toFixed(2)
                  : "Loading"
              }`}
              variant="filled"
              disabled
            />
          </Grid>
        </Grid>
        {/* end section:: Price */}
        {/* section:: Remain */}
        <Typography
          variant="body1"
          color="textPrimary"
          className={classes.fieldPrice}
          component="p"
        >
          Time remain
        </Typography>
        <Typography variant="h4" component="p" noWrap={true}>
          {this.state.timeLeft}
        </Typography>
        {/* end section:: Remain */}
        {/* section:: Buttons */}
        <Grid
          container
          spacing={2}
          justify="space-around"
          className={classes.buttons}
        >
          <Grid item xs={6}>
            <Button
              type="button"
              variant="outlined"
              size="large"
              color="primary"
              fullWidth
              disabled={false}
              onClick={e => {
                e.preventDefault();
                this.drop(jobInfo._id, currentUser._id);
              }}
            >
              Drop
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              type="button"
              variant="contained"
              size="large"
              color="primary"
              fullWidth
              disabled={
                latestUserBidDate && latestBidData
                  ? latestUserBidDate.price === latestBidData.price
                  : null
              }
              onClick={e => {
                e.preventDefault();
                this.hopIn(jobInfo._id, currentUser._id, latestBidData.price);
              }}
            >
              Hop In
            </Button>
          </Grid>
        </Grid>
        {/* end section:: Buttons */}
      </div>
    );
  }
}

export default withStyles(styles)(Hopping);
