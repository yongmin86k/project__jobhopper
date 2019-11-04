import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { withTracker } from "meteor/react-meteor-data";
// import Gravatar from "react-gravatar";
import Avatar from "@material-ui/core/Avatar";

import Grid from "@material-ui/core/Grid";

class _Profile extends Component {
  constructor() {
    super();

    this.state = {
      profile: Profile,
      lastId: 1
    };
  }
  render() {
    return (
      <figure>
        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
        <figcaption>John Smith</figcaption>
      </figure>
    );
  }
}

const Profile = withTracker(() => {
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(_Profile);

// export default function ImageAvatars() {
//   const classes = useStyles();

//   return (
//     <Grid container justify="center" alignItems="center">
//       <Avatar alt="" src="/public/images/" className={classes.avatar} />
//     </Grid>
//   );
// }

export default withStyles(styles)(Profile);
