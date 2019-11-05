import React from "react";
import { Grid } from "@material-ui/core";
import { JobCard } from "../../components";

const JobsGrid = ({}) => (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6} md={4}>
      <JobCard />
    </Grid>
  </Grid>
);

export default JobsGrid;
