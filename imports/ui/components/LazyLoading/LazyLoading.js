import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { CircularProgress, Typography, withStyles } from "@material-ui/core";

const LazyLoading = ({ classes, animate }) => {
  return (
    <section
      className={
        animate ? classes.container : `${classes.container} ${classes.hide}`
      }
    >
      <div className={classes.wrap}>
        <CircularProgress color="secondary" className={classes.icon} />
        <Typography
          variant="h3"
          color="textPrimary"
          component="p"
          gutterBottom
          color="secondary"
        >
          Please wait for data loading
        </Typography>
      </div>
    </section>
  );
};

export default withStyles(styles)(LazyLoading);

LazyLoading.propTypes = {
  animate: PropTypes.bool
};
