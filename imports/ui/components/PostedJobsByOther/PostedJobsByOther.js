import React, { Component, Fragment } from "react";
import { Button, Grid, Typography, TextField } from "@material-ui/core";
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
    const { classes, jobInfo, currentUserID } = this.props;
    this.countdownTime(moment(jobInfo.date.dateExpire));

    const isJobLogs = jobInfo && jobInfo.hopLogs && jobInfo.hopLogs.length > 0;

    const isHoppingIn = !isJobLogs
      ? false
      : jobInfo.hopLogs.some(log => log.userID === currentUserID);

    const userBidDate = isHoppingIn
      ? jobInfo.hopLogs
          .filter(log => log.userID === currentUserID)
          .sort((a, b) => {
            return b.time - a.time;
          })
      : null;

    const latestBidData = jobInfo.hopLogs
      ? jobInfo.hopLogs.sort((a, b) => {
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
                className={classes.fieldPrice}
              >
                Your Hop price
              </Typography>
            </Grid>
          ) : null}
        </Grid>
        <Grid container spacing={2} justify="space-between" alignItems="center">
          <Grid item xs={userBidDate ? 6 : 12}>
            <Typography gutterBottom variant="h4" component="p">
              $
              {latestBidData
                ? latestBidData.price.toFixed(2)
                : jobInfo.priceMax}
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
        {/* end section:: Price */}

        {jobInfo && jobInfo.completed ? (
          <Fragment>
            {/* section:: button-completed */}
            <Button
              className={classes.buttons}
              type="button"
              variant="contained"
              size="large"
              color="primary"
              fullWidth
              disabled={true}
              onClick={e => {
                e.preventDefault();
              }}
            >
              Completed
              {/* end section:: button-completed */}
            </Button>
          </Fragment>
        ) : (
          <Fragment>
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
            {/* section:: buttons */}
            <Grid
              container
              className={classes.buttons}
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
                      type="button"
                      variant="contained"
                      size="large"
                      color="primary"
                      fullWidth
                      disabled={userBidDate[0].price === latestBidData.price}
                      onClick={() => {
                        this.hopIn(
                          jobInfo._id,
                          currentUserID,
                          latestBidData.price
                        );
                      }}
                    >
                      Hop In
                    </Button>
                  </Grid>
                </Fragment>
              ) : (
                <Grid item xs={12}>
                  <Button
                    type="button"
                    variant="contained"
                    size="large"
                    color="primary"
                    fullWidth
                    disabled={false}
                    onClick={() => {
                      this.hopIn(
                        jobInfo._id,
                        currentUserID,
                        latestBidData.price
                      );
                    }}
                  >
                    Hop In
                  </Button>
                </Grid>
              )}
            </Grid>
            {/* end section:: buttons */}
          </Fragment>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(PostedJobs);
