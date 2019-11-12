import { Meteor } from "meteor/meteor";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography
} from "@material-ui/core";

import {
  MoreVert as MoreVertIcon,
  Fingerprint as FingerprintIcon,
  PowerSettingsNew as PowerSettingsNewIcon
} from "@material-ui/icons";

const SimpleMenu = ({}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    Meteor.logout(e => {
      if (e) {
        console.log(e);
      }
    });
  };

  return (
    <Fragment>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          component={NavLink}
          to={"/profile"}
          exact
          onClick={handleClose}
        >
          <ListItemIcon>
            <FingerprintIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Your Profile
          </Typography>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
            logOut();
          }}
        >
          <ListItemIcon>
            <PowerSettingsNewIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Sign Out
          </Typography>
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default SimpleMenu;
