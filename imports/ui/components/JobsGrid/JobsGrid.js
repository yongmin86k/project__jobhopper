import React from "react";
import { Grid } from "@material-ui/core";
import { JobCard } from "../../components";

const JobsGrid = ({}) => (
  <Grid container spacing={3} direction="row">
    <Grid item xs={4}>
      <JobCard />
    </Grid>
  </Grid>
);

export default JobsGrid;
