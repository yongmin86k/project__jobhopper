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
// import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';

class _ProfileJobs extends Component {
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
            <Tab label="Completed" />
            <Tab label="Posted" />
            {/* <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} /> */}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={direction === DIRECTIONS.RTL ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabPanel value={this.state.value} index={0} dir={direction}>
            Hopping
          </TabPanel>
          <TabPanel value={this.state.value} index={1} dir={direction}>
            Completed
          </TabPanel>
          <TabPanel value={this.state.value} index={2} dir={direction}>
            Posted
          </TabPanel>
        </SwipeableViews>
      </div>
    );
  }
}

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     "aria-controls": `full-width-tabpanel-${index}`
//   };
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 500
//   }
// }));

// export default function FullWidthTabs() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = index => {
//     setValue(index);
//   };

// return (
//   <div className={classes.root}>
//     <AppBar position="static" color="default">
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         indicatorColor="primary"
//         textColor="primary"
//         variant="fullWidth"
//         aria-label="full width tabs example"
//       >
//         <Tab label="Item One" {...a11yProps(0)} />
//         <Tab label="Item Two" {...a11yProps(1)} />
//         <Tab label="Item Three" {...a11yProps(2)} />
//       </Tabs>
//     </AppBar>
//     <SwipeableViews
//       axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//       index={value}
//       onChangeIndex={handleChangeIndex}
//     >
//       <TabPanel value={value} index={0} dir={theme.direction}>
//       Hoppping
//       </TabPanel>
//       <TabPanel value={value} index={1} dir={theme.direction}>
//       Completed
//       </TabPanel>
//       <TabPanel value={value} index={2} dir={theme.direction}>
//       Posted
//       </TabPanel>
//     </SwipeableViews>
//   </div>
// );
// }

const ProfileJobs = withDirection(_ProfileJobs);

export default withStyles(styles)(ProfileJobs);
