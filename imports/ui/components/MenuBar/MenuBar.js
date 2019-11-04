import React, { Component } from "react";
import { ViewerContext } from "/imports/ui/contexts/ViewerProvider";

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
    const { classes } = this.props;
    return (
      <ViewerContext.Consumer>
        {({ currentUserId }) =>
          currentUserId ? (
            <AppBar position="fixed">
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
          ) : (
            <AppBar position="fixed">
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
                <Typography variant="h6" color="textPrimary" component="p">
                  Job Hopper
                </Typography>
              </Toolbar>
            </AppBar>
          )
        }
      </ViewerContext.Consumer>
    );
  }
}

export default withRouter(withStyles(styles)(MenuBar));
