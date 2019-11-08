import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, useTheme, makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabPanel } from "/imports/ui/components";
import Box from "@material-ui/core/Box";

import Hopping from "/imports/ui/components/Hopping";
import CompletedJobs from "/imports/ui/components/CompletedJobs";
import PostedJobs from "/imports/ui/components/PostedJobs";

const ProfileJobs = props => {
  const mockData = [
    {
      jobID: 0,
      title: "cleaning",
      userPosted: 1,
      userTaken: 2,
      completed: false,
      category: "Landscaping",
      description: "cleaning leaves in yard"
    },
    {
      jobID: 1,
      title: "make a website",
      userPosted: 3,
      userTaken: 1,
      completed: true,
      category: "Electrical/Computers",
      description: "make a new website"
    },
    {
      jobID: 2,
      title: "fix sink",
      userPosted: 5,
      userTaken: 6,
      completed: null,
      category: "Plumbing",
      description: "sink is broken"
    }
  ];

  const useStyles = makeStyles(theme => ({
    root: {},
    appbar: {
      marginTop: "0.6rem"
    },
    card: {
      maxWidth: 450,
      width: 400,
      height: 650
    },
    media: {
      height: 100,
      paddingTop: "2%"
    },
    avatar: {
      margin: 10
    },
    cardMediaItemsBtn: {
      padding: theme.spacing(2)
    }
  }));

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const hoppingData = mockData.filter(data => {
    data.userTaken === data.jobId && data.completed === false;
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <Box className={classes.root}>
      <AppBar position="static" color="default" className={classes.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Hopping" />
          <Tab label="Completed" />
          <Tab label="Posted" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Hopping job={mockData[0]} />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <CompletedJobs job={mockData[1]} />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <PostedJobs job={mockData[2]} />
      </TabPanel>
    </Box>
  );
};

export default ProfileJobs;
