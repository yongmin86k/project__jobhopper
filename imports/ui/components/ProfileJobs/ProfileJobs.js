import React, { Component } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabPanel } from "/imports/ui/components";
import Box from "@material-ui/core/Box";
import withDirection, {
  withDirectionPropTypes,
  DIRECTIONS
} from "react-with-direction";
import { useSwipeable, Swipeable } from "react-swipeable";

import Hopping from "/imports/ui/components/Hopping";
import CompletedJobs from "/imports/ui/components/CompletedJobs";
import PostedJobs from "/imports/ui/components/PostedJobs";

class ProfileJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      setValue: 0,
      theme: withStyles()
    };
  }

  handleChange = (event, newValue) => {
    this.setState({ setValue: newValue });
  };

  handleChangeIndex = index => {
    this.setState({ setValue: index });
  };

  render() {
    const { classes, direction } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Hopping" />
            <Tab label="CompletedJobs" />
            <Tab label="Posted" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={this.state.setValue}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabPanel value={this.state.setValue} index={0} dir={direction}>
            <Hopping />
          </TabPanel>
          <TabPanel value={this.state.setValue} index={1} dir={direction}>
            <CompletedJobs />
          </TabPanel>
          <TabPanel value={this.state.setValue} index={2} dir={direction}>
            <PostedJobs />
          </TabPanel>
        </SwipeableViews>
      </div>
    );
  }
}

export default withDirection(withStyles(styles)(ProfileJobs));
