import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Grid, Typography } from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { RemainTime } from "/imports/ui/components";

class PostedJobs extends Component {
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

  deleteJob = jobInfo => {
    Meteor.call("jobs.delete", jobInfo._id);
  };
  completeJob = (jobInfo, latestBidder) => {
    jobInfo && latestBidder
      ? Meteor.call("jobs.complete", jobInfo._id, latestBidder._id)
      : null;
  };

  render() {
    const { classes, jobInfo, allUsers } = this.props;
    this.countdownTime(moment(jobInfo.date.dateExpire));

    const latestBidData = jobInfo.hopLogs
      ? jobInfo.hopLogs.sort((a, b) => {
          return b.time - a.time;
        })[0]
      : null;

    const latestBidder =
      allUsers && jobInfo && latestBidData
        ? allUsers.filter(user => {
            return user._id === latestBidData.userID;
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
              Last Hopper
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="space-between" alignItems="center">
          <Grid item xs={6}>
            <Typography variant="h4" component="p">
              $
              {latestBidData
                ? latestBidData.price.toFixed(2)
                : jobInfo.priceMax}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" component="p" noWrap={true}>
              {latestBidder ? latestBidder.profile.fullname : "None"}
            </Typography>
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
        <Grid container spacing={2} justify="space-between" alignItems="center">
          <Grid item xs={6}>
            <Button
              className={classes.buttons}
              type="button"
              variant="outlined"
              size="large"
              color="primary"
              fullWidth
              disabled={false}
              onClick={e => {
                e.preventDefault();
                this.deleteJob(jobInfo);
              }}
            >
              Delete
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              className={classes.buttons}
              type="button"
              variant="contained"
              size="large"
              color="primary"
              fullWidth
              disabled={jobInfo.completed}
              onClick={e => {
                e.preventDefault();
                this.completeJob(jobInfo, latestBidder);
              }}
            >
              Complete
            </Button>
          </Grid>
        </Grid>

        {/* end section:: Buttons */}
      </div>
    );
  }
}
// test

export default withStyles(styles)(PostedJobs);

PostedJobs.propTypes = {
  jobInfo: PropTypes.object,
  allUsers: PropTypes.array
};
