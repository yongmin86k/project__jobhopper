import React from "react";
import { Card, AppBar, Toolbar, IconButton, Fab } from "@material-ui/core";
import { NavLink } from "react-router-dom";
// import TextField from "@material-ui/core/TextField";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  withStyles,
  Menu,
  MenuItem,
  Link,
  ListItemIcon,
  Fab
} from "@material-ui/core";

const MenuBar = ({ classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <NavLink to="/items">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img className={classes.logo} src={logo} />
          </IconButton>
        </NavLink>

        <div className={classes.navMenu}>
          <NavLink to="/share">
            <Fab
              variant="extended"
              aria-label="delete"
              className={classes.fab}
              color="primary"
            >
              <AddCircleIcon className={classes.extendedIcon} />
              {/* possible icon or just logout */}
            </Fab>
          </NavLink>
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>

          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: 48 * 4.5,
                width: 200
              }
            }}
          >
            {/* UNCOMMENT THIS WHEN/IF READY TO MAKE SEARCH FUNCITONAL */}
            {/* <TextField
              id="standard-search"
              label="Search field"
              type="search"
              margin="normal"
            /> */}

            <Link component="button" variant="body2">
              <MenuItem onClick={handleClose}>
                <NavLink to="/profile">
                  <ListItemIcon>
                    <FingerprintIcon fontSize="small" />
                  </ListItemIcon>
                </NavLink>
                <Typography variant="inherit" noWrap>
                  Post a Job
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <NavLink to="/welcome">
                  <ListItemIcon>
                    <PowerSettingsNewIcon fontSize="small" />
                  </ListItemIcon>
                </NavLink>
                <Typography variant="inherit" noWrap>
                  Find a Job
                </Typography>
              </MenuItem>
            </Link>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

// export default function UncontrolledTextField() {
//   const classes = useStyles();

export default withStyles(styles)(MenuBar, UncontrolledTextField);
