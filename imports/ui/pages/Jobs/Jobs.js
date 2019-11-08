import React from "react";
import { Container } from "@material-ui/core";
import { JobsGrid } from "../../components";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Fab } from "@material-ui/core";
import { Typography } from "@material-ui/core";

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
            <div className={classes.filter}>
              <Fab
                className={classes.filterBtn}
                size="small"
                variant="extended"
                aria-label="like"
                color="secondary"
              >
                Category
              </Fab>

              <Fab
                className={classes.filterBtn}
                size="small"
                variant="extended"
                aria-label="like"
                color="secondary"
              >
                Dates
              </Fab>

              <Fab
                className={classes.filterBtn}
                size="small"
                variant="extended"
                aria-label="like"
                color="secondary"
              >
                Price
              </Fab>

              <Fab
                className={classes.filterBtn}
                size="small"
                variant="extended"
                aria-label="like"
                color="secondary"
              >
                Distance
              </Fab>
            </div>
            <div className={classes.location}>
              <Typography className={classes.locationbtn} paragraph>
                Current location: V6L 3E2
              </Typography>
            </div>
          </div>
        </section>
      </div>
      <JobsGrid />
    </Container>
  );
};

export default withStyles(styles)(Jobs);
