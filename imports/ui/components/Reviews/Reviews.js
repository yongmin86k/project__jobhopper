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
  FilledInput,
  FavoriteIcon,
  Avatar
} from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      setValue: 0
    };
  }

  render() {
    const { classes, direction } = this.props;

    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={0}
      >
        <Grid item>
          <Typography
            className={classes.reviews}
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Reviews
          </Typography>
          <Card className={classes.sectionHeading}>
            <CardHeader
              className={classes.cardHeading}
              subheader="Reviews Recieved"
            />
          </Card>
          <Card className={classes.card}>
            <CardActionArea>
              <Grid container>
                <CardHeader
                  avatar={
                    <Avatar aria-label="reviews" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  title="Username"
                  subheader="October 1, 2019"
                />
              </Grid>
            </CardActionArea>
            <CardActionArea></CardActionArea>
            <CardContent>
              <Typography className={classes.reviewsRecieved} paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </Typography>
            </CardContent>

            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            ></Grid>
          </Card>

          <Card className={classes.card}>
            <CardActionArea>
              <Grid container>
                <CardHeader
                  avatar={
                    <Avatar aria-label="reviews" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  title="Username"
                  subheader="October 1, 2019"
                />
              </Grid>
            </CardActionArea>
            <CardActionArea></CardActionArea>
            <CardContent>
              <Typography className={classes.reviewsRecieved} paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </Typography>
            </CardContent>

            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            ></Grid>
          </Card>

          <Card className={classes.cardReviewsGiven}>
            <CardActionArea>
              <Grid container>
                <CardHeader
                  className={classes.headingReviewsGiven}
                  subheader="Reviews Given"
                />
              </Grid>
            </CardActionArea>

            <CardContent className={classes.cardBackgroundColor}>
              <Typography className={classes.reviewsTypography} paragraph>
                No reviews given yet.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Reviews);
