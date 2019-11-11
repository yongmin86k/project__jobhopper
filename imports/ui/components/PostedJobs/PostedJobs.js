import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Button,
  Grid,
  Typography,
  IconButton,
  FilledInput
} from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class PostedJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: "",
      defaultValue: {
        category: "category",
        title: "Title",
        date: {
          datePosted: moment(),
          dateExpire: moment().days(7)
        },
        description: "Please enter a description",
        priceMax: 0,
        priceMin: 0,
        jobImage: "https://via.placeholder.com/300"
      }
    };
  }

  countdownTime = dateExpire => {
    if (dateExpire) {
      let currentTime = moment(),
        day = dateExpire.diff(currentTime, "days"),
        hour = dateExpire.diff(currentTime, "hours") % 24,
        min =
          dateExpire.diff(currentTime, "minutes") % 60 < 10
            ? "0" + (dateExpire.diff(currentTime, "minutes") % 60)
            : dateExpire.diff(currentTime, "minutes") % 60,
        sec =
          dateExpire.diff(currentTime, "seconds") % 60 < 10
            ? "0" + (dateExpire.diff(currentTime, "seconds") % 60)
            : dateExpire.diff(currentTime, "seconds") % 60,
        remainTime =
          day > 1
            ? `${day} Days ${hour}:${min}:${sec}`
            : day === 1
            ? `${day} Day ${hour}:${min}:${sec}`
            : `${hour}:${min}:${sec}`;

      setTimeout(() => {
        this.setState({ timeLeft: remainTime });
      }, 1000);
    }
  };

  render() {
    const { classes, direction, job, jobInfo, previewValue } = this.props;

    const isData = jobInfo && jobInfo._id ? true : false;

    const dateExpire = isData
      ? moment(jobInfo.date.dateExpire)
      : previewValue && previewValue.dateExpire
      ? moment(previewValue.dateExpire)
      : this.state.defaultValue.date.dateExpire;

    this.countdownTime(dateExpire);

    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={0}
      >
        <Grid item>
          <Card className={classes.card}>
            <CardActionArea>
              <Grid container>
                <img
                  className={classes.profileMedia}
                  src="https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg"
                  title=""
                />

                <CardHeader
                  className={classes.profileTitle}
                  title="Build my app!"
                  subheader="Create a web based app using React"
                />
              </Grid>
            </CardActionArea>
            <CardActionArea></CardActionArea>
            <CardContent>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <Typography gutterBottom variant="roboto" fontSize="14px">
                  Your Posted Price: <br />
                  $123.00
                </Typography>
              </div>
              <br />
              <Typography variant="body1" color="textPrimary" component="p">
                Time Remaining
              </Typography>

              <Typography gutterBottom variant="h4" component="h4">
                {` ${this.state.timeLeft}`}{" "}
              </Typography>
            </CardContent>

            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Button
                className={classes.profileBtn}
                variant="contained"
                size="large"
                color="primary"
                fullWidth
                disabled={false}
                onClick={() => {
                  console.log(111);
                }}
              >
                Drop
              </Button>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
// test

export default withStyles(styles)(PostedJobs);
