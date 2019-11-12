import React from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Fab,
  Typography,
  IconButton,
  Icon
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { MenuDropDown } from "/imports/ui/components";

const MenuBar = ({ classes, currentUserId }) => {
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
          <Fab
            className={classes.btnShare}
            variant="extended"
            color="secondary"
            aria-label="post"
            component={NavLink}
            to={"/post"}
          >
            Post a job
          </Fab>

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
};

export default withRouter(withStyles(styles)(MenuBar));

MenuBar.propTypes = {
  currentUserId: PropTypes.string
};
