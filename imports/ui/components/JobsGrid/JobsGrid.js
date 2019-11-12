import React, { Component } from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import { Jobs } from "/imports/api/jobs";
import { withTracker } from "meteor/react-meteor-data";

import { Grid } from "@material-ui/core";
import { JobCard } from "../../components";

class JobsGrid extends Component {
  render() {
    const { jobLists } = this.props;

    return (
      <Grid container spacing={3}>
        {jobLists.map(jobInfo => (
          <Grid key={jobInfo._id} item xs={12} sm={6} md={4}>
            <JobCard jobInfo={jobInfo} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("allJobs", Meteor.userId());
  const jobLists = Jobs.find().fetch();

  return {
    jobLists
  };
})(JobsGrid);

JobsGrid.propTypes = {
  jobLists: PropTypes.array
};
