import React, { Component } from "react";
import { Button, Grid, Typography, TextField } from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class CompletedJobs extends Component {
  viewJob = jobInfo => {
    // redirect to single job page
    console.log(jobInfo);
  };

  render() {
    const { classes, jobInfo, currentUser } = this.props;

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

        {/* section:: Buttons */}

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
        </Button>

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
            this.viewJob(jobInfo);
          }}
        >
          View
        </Button>

        {/* end section:: Buttons */}
      </div>
    );
  }
}

export default withStyles(styles)(CompletedJobs);
