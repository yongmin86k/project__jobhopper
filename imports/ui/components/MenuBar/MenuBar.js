import { Meteor } from "meteor/meteor";

import React, { Component } from "react";
import styles from "./styles";
import { NavLink, withRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Icon
} from "@material-ui/core";

import { withStyles } from "@material-ui/core";
import { MenuDropDown } from "/imports/ui/components";

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeShareBtn: true
    };
  }
  componentDidMount() {
    // const { location } = this.props;
    // if (location.pathname === "/share" && this.state.activeShareBtn === true) {
    //   this.changeStateShare();
    // } else if (
    //   location.pathname !== "/share" &&
    //   this.state.activeShareBtn === false
    // ) {
    //   this.changeStateShare();
    // }
  }
  componentDidUpdate() {
    // const { location } = this.props;
    // if (location.pathname === "/share" && this.state.activeShareBtn === true) {
    //   this.changeStateShare();
    // } else if (
    //   location.pathname !== "/share" &&
    //   this.state.activeShareBtn === false
    // ) {
    //   this.changeStateShare();
    // }
  }

  changeStateShare = () => {
    this.setState({ activeShareBtn: !this.state.activeShareBtn });
  };

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="menu"
            component={NavLink}
            to={"/jobs"}
          >
            <Icon className={classes.menuButton}>
              <img
                className={classes.imgLogo}
                src="/images/imgLogo.svg"
                alt="Job Hopper"
              />
            </Icon>
          </IconButton>

          <div className={classes.menuBar}>
            <Typography variant="h6" color="textSecondary" component="p">
              Post a job
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Find a Job
            </Typography>
            <MenuDropDown />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles)(MenuBar));
