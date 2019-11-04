import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { PostJobForm } from "/imports/ui/components";
import { Paper } from "@material-ui/core";

const Post = ({ classes }) => {
  return (
    <Paper className={classes.wrap}>
      <PostJobForm />
    </Paper>
  );
};

export default withStyles(styles)(Post);
