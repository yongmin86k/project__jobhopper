import React from "react";
import { Container } from "@material-ui/core";
import { JobsGrid } from "../../components";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Fab } from "@material-ui/core";

const Jobs = ({ classes }) => {
  return (
    <Container
      component="section"
      maxWidth={false}
      className={classes.pageItems}
    >
      <div className={classes.Container}>
        <section id="filter-jobs" className="filterJobs">
          <div className={classes.filterContainer}>
            <Fab
              className={classes.filterBtn}
              size="small"
              variant="extended"
              aria-label="like"
              color="primary"
            >
              Category
            </Fab>

            <Fab
              className={classes.filterBtn}
              size="small"
              variant="extended"
              aria-label="like"
              color="primary"
            >
              Dates
            </Fab>

            <Fab
              className={classes.filterBtn}
              size="small"
              variant="extended"
              aria-label="like"
              color="primary"
            >
              Price
            </Fab>

            <Fab
              className={classes.filterBtn}
              size="small"
              variant="extended"
              aria-label="like"
              color="primary"
            >
              Distance
            </Fab>
            <Fab
              className={classes.filtertxt}
              size="small"
              variant="extended"
              aria-label="like"
              color="primary"
            >
              Current location: V6L 3E2
            </Fab>
          </div>
        </section>
      </div>
      <JobsGrid />
    </Container>
  );
};

export default withStyles(styles)(Jobs);
