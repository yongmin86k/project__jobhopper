import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Grid } from "@material-ui/core";
import { JobsGrid } from "../../components";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Fab } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const Jobs = ({ classes, currentUser }) => {
  return (
    <section className="sectionWithMenuBar">
      <Grid container className={classes.wrapHeader}>
        <Grid item container className={classes.filter}>
          <Fab size="small" variant="extended" color="secondary">
            Category
          </Fab>

          <Fab size="small" variant="extended" color="secondary">
            Dates
          </Fab>

          <Fab size="small" variant="extended" color="secondary">
            Price
          </Fab>

          <Fab size="small" variant="extended" color="secondary">
            Distance
          </Fab>
        </Grid>

        <Grid item container justify="flex-end" className={classes.loc}>
          <Typography variant="h6" component="p">
            Current location:{" "}
            {!currentUser
              ? "Loading"
              : currentUser.profile.address.country === "ca"
              ? `${currentUser.profile.address.postal_code.slice(
                  0,
                  3
                )} ${currentUser.profile.address.postal_code.slice(3, 6)}`
              : currentUser.profile.address.postal_code}
          </Typography>
        </Grid>
      </Grid>

      <JobsGrid />
    </section>
  );
};

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(withStyles(styles)(Jobs));
