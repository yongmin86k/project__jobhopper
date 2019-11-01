import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import styles from "./styles";

const Jobs = ({ classes }) => {
  return (
    <section id="filter-jobs" className="filterJobs">
      <Fab
        className={classes.filterBtn}
        size="small"
        variant="extended"
        aria-label="like"
        color="primary"
      >
        Category
      </Fab>
    </section>
  );
};

export default withStyles(styles)(Jobs);
