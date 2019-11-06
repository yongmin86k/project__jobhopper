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

class Hopping extends Component {
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
                  action={
                    <IconButton aria-label="settings">
                      {/* <FavoriteIcon /> */}
                    </IconButton>
                  }
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
                  Current Price $123.00
                </Typography>
                Your Hop Price
                <FilledInput
                  className="hopPrice"
                  id="bidPrice"
                  inputProps={{
                    autoComplete: "off"
                  }}
                  type="text"
                  value={123}
                  required
                  disabled
                />
              </div>
              <Typography variant="body1" color="textPrimary" component="p">
                Time Remaining
              </Typography>

              <Typography gutterBottom variant="h4" component="h4">
                1 Day 23:08:09
              </Typography>

              {/* <Typography variant="body1" color="textPrimary" component="p">
                Time Remaining
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p">
                Input countdown clock here
              </Typography> */}
            </CardContent>

            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <CardActions className={classes.cardMediaItemsBtn}>
                <Button
                  className={classes.profileBtn}
                  type="button"
                  variant="contained"
                  size="large"
                  color="secondary"
                  fullWidth
                  disabled={false}
                  onClick={() => {
                    console.log(111);
                  }}
                >
                  Drop
                </Button>
                <Button
                  className={classes.profileBtn}
                  type="button"
                  variant="contained"
                  size="large"
                  color="green"
                  fullWidth
                  disabled={false}
                  onClick={() => {
                    console.log(111);
                  }}
                >
                  Hop In
                </Button>
              </CardActions>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Hopping);
