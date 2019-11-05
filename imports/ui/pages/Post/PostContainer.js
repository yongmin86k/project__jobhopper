import React, { Component } from "react";
import Post from "./Post";
import { Grid, withStyles } from "@material-ui/core";
import styles from "./styles";

class PostContainer extends Component {
  render() {
    const { classes, currentUser, categories } = this.props;
    return (
      <section className="sectionWithMenuBar">
        <Grid container>
          <Post currentUser={currentUser} categories={categories} />
        </Grid>
      </section>
    );
  }
}

export default withStyles(styles)(PostContainer);
