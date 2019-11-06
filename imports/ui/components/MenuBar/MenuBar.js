import React, { Component } from "react";

import { NavLink, withRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Icon
} from "@material-ui/core";

import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { MenuDropDown } from "/imports/ui/components";

class MenuBar extends Component {
  render() {
    const { classes, currentUserId } = this.props;
    return currentUserId ? (
      <AppBar position="fixed" color="secondary">
        <Toolbar className={classes.headerStyle}>
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
          <Typography variant="h6" color="textPrimary" component="p">
            Job Hopper
          </Typography>

          <div className={classes.menuBar}>
            <Typography
              variant="h6"
              color="textSecondary"
              component={NavLink}
              to={"/post"}
            >
              Post a job
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Find a Job
            </Typography>
            <MenuDropDown />
          </div>
        </Toolbar>
      </AppBar>
    ) : (
      <AppBar position="fixed" color="secondary">
        <Toolbar className={classes.headerStyle}>
          <IconButton
            color="inherit"
            aria-label="menu"
            component={NavLink}
            to={"/"}
          >
            <Icon className={classes.menuButton}>
              <img
                className={classes.imgLogo}
                src="/images/imgLogo.svg"
                alt="Job Hopper"
              />
            </Icon>
          </IconButton>
          <Typography variant="h6" color="textSecondary" component="p">
            Job Hopper
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles)(MenuBar));
