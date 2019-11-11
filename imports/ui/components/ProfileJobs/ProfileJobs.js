import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Jobs } from "/imports/api/jobs";
import { withTracker } from "meteor/react-meteor-data";

import { AppBar, Tabs, Tab, Card } from "@material-ui/core";
import { withStyles, useTheme } from "@material-ui/core/styles";
import styles from "./styles";

import {
  TabPanel,
  Hopping,
  CompletedJobs,
  PostedJobs
} from "/imports/ui/components";

const mockData = [
  {
    jobID: 0,
    title: "cleaning",
    userPosted: 1,
    userTaken: 2,
    completed: false,
    category: "Landscaping",
    description: "cleaning leaves in yard"
  },
  {
    jobID: 1,
    title: "make a website",
    userPosted: 3,
    userTaken: 1,
    completed: true,
    category: "Electrical/Computers",
    description: "make a new website"
  },
  {
    jobID: 2,
    title: "fix sink",
    userPosted: 5,
    userTaken: 6,
    completed: null,
    category: "Plumbing",
    description: "sink is broken"
  }
];
const ProfileJobs = ({ classes, userInfo, currentUser, jobsHopping }) => {
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
            {jobsHopping ? (
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
            <CompletedJobs job={mockData[1]} />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <PostedJobs job={mockData[2]} />
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
            <PostedJobs job={mockData[2]} />
          </TabPanel>
        </Fragment>
      )}
    </Card>
  );
};

export default withTracker(() => {
  const currentUserID = Meteor.userId();

  Meteor.subscribe("jobsHopping", currentUserID);

  return {
    jobsHopping: Jobs.find().fetch(),
    currentUser: Meteor.user()
  };
})(withStyles(styles)(ProfileJobs));
