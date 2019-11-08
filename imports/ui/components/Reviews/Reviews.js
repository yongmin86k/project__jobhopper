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
        {/* test */}

        <Grid item>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Reviews
          </Typography>
          <Card className={classes.card}>
            <CardActionArea>
              <Grid container>
                {/* <img
                  className={classes.profileMedia}
                  src="https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg"
                  title=""
                />

                <CardHeader
                  className={classes.profileTitle}
                  title="Username"
                  subheader="Create a web based app using React"
                /> */}

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
              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}
              > */}
              {/* <Typography gutterBottom>Current Price $123.00</Typography>
                Your Bid Price
                <FilledInput
                  className="hopPrice"
                  id="bidPrice"
                  inputProps={{
                    autoComplete: "off"
                  }}
                  type="text"
                  value={"Lorem ipsum dolor sit ametc"}
                  required
                  disabled */}

              {/* /> */}
              {/* </div> */}
              <Typography
                // aria-label={}
                paragraph
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </CardContent>

            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            ></Grid>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Reviews);
