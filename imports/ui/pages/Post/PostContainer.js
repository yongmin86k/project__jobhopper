import React, { Component } from "react";
import Post from "./Post";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

class PostContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <section className="sectionWithMenuBar">
        <Post />
      </section>
    );
  }
}
export default withStyles(styles)(PostContainer);
