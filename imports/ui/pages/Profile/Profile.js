import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./styles";
import { Grid, withStyles } from "@material-ui/core";
import { withTracker } from "meteor/react-meteor-data";
// CARD TAB
import PropTypes from "prop-types";
import { ProfileUser, ProfileJobs, Reviews } from "/imports/ui/components";

class Profile extends Component {
  //   constructor() {
  //     super();

  //     this.state = {
  //       profile: Profile,
  //       lastId: 1
  //     };
  //   }
  render() {
    /* 
      import YOUR COMPONENT HERE 
      pass some data as props to your component as well
    */

    // <figure>
    //   <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
    //   <figcaption>Yongmin</figcaption>
    // </figure>
    const { classes } = this.props;

    return (
      <Grid container className={classes.wrap}>
        <Grid item xs={4}>
          <ProfileUser />
        </Grid>

        <Grid item xs={4}>
          <ProfileJobs />
        </Grid>

        <Grid item xs={4}>
          <Reviews />
        </Grid>
      </Grid>
    );
  }
}

// return (
//   <Grid container justify="center" alignItems="center">
//     <Avatar alt="" src="/public/images/" />
//   </Grid>
// );

export default withRouter(withStyles(styles)(Profile));
