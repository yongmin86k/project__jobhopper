import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Jobs } from "/imports/api/jobs";
import { Users } from "/imports/api/users";
import { withTracker } from "meteor/react-meteor-data";

import { AppBar, Tabs, Tab, Card } from "@material-ui/core";
import { withStyles, useTheme } from "@material-ui/core/styles";
import styles from "./styles";

import {
  TabPanel,
  Hopping,
  CompletedJobs,
  PostedJobs,
  PostedJobsByOther
} from "/imports/ui/components";

const ProfileJobs = ({
  classes,
  userInfo,
  currentUser,
  currentUserID,
  jobsHopping,
  jobsCompleted,
  jobsPosted,
  allUsers,
  otherUserJob
}) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isCurrentUser =
    userInfo && currentUser ? userInfo._id === currentUser._id : null;

  return (
    <Card className={classes.container}>
      {isCurrentUser ? (
        <Fragment>
          <AppBar position="static" className={classes.appbar}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Hopping" style={{ minWidth: "initial" }} />
              <Tab label="Completed" style={{ minWidth: "initial" }} />
              <Tab label="Posted" style={{ minWidth: "initial" }} />
            </Tabs>
          </AppBar>

          <TabPanel value={value} index={0}>
            {jobsHopping && jobsHopping.length > 0 ? (
              jobsHopping.map(jobInfo => (
                <Hopping
                  key={jobInfo._id}
                  jobInfo={jobInfo}
                  currentUser={currentUser}
                />
              ))
            ) : (
              <div className={classes.null}>No jobs hopping yet</div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            {jobsCompleted && jobsCompleted.length > 0 ? (
              jobsCompleted.map(jobInfo => (
                <CompletedJobs
                  key={jobInfo._id}
                  jobInfo={jobInfo}
                  currentUser={currentUser}
                />
              ))
            ) : (
              <div className={classes.null}>No jobs completed yet</div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            {jobsPosted && jobsPosted.length > 0 ? (
              jobsPosted.map(jobInfo => (
                <PostedJobs
                  key={jobInfo._id}
                  jobInfo={jobInfo}
                  allUsers={allUsers}
                />
              ))
            ) : (
              <div className={classes.null}>No jobs posted yet</div>
            )}
          </TabPanel>
        </Fragment>
      ) : (
        <Fragment>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Posted" style={{ minWidth: "initial" }} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} dir={theme.direction}>
            {otherUserJob && otherUserJob.length > 0 ? (
              otherUserJob.map(jobInfo => (
                <PostedJobsByOther
                  key={jobInfo._id}
                  jobInfo={jobInfo}
                  currentUserID={currentUserID}
                />
              ))
            ) : (
              <div className={classes.null}>No jobs posted yet</div>
            )}
          </TabPanel>
        </Fragment>
      )}
    </Card>
  );
};

export default withRouter(
  withTracker(({ match }) => {
    const currentUserID = Meteor.userId();

    Meteor.subscribe("jobsHopping", currentUserID);
    Meteor.subscribe("jobsCompleted", currentUserID);
    Meteor.subscribe("jobsPosted", currentUserID);
    Meteor.subscribe("allJobs", currentUserID);
    Meteor.subscribe("allUsers");

    const otherUser =
      match.path !== "/profile/:fullname"
        ? Meteor.user()
        : Users.find({ "profile.fullname": match.params.fullname }).fetch()[0];

    return {
      jobsHopping: Jobs.find({
        completed: false,
        "hopLogs.userID": currentUserID
      }).fetch(),
      jobsCompleted: Jobs.find({
        completed: true,
        userTaken: currentUserID
      }).fetch(),
      jobsPosted: Jobs.find({
        userPosted: currentUserID
      }).fetch(),
      currentUserID,
      currentUser: Meteor.user(),
      allUsers: Users.find().fetch(),
      otherUserJob: Jobs.find({
        userPosted: otherUser ? otherUser._id : null
      }).fetch()
    };
  })(withStyles(styles)(ProfileJobs))
);
