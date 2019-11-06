import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import styles from "./styles";
import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Button,
  Grid,
  Typography,
  IconButton
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

const JobCard = ({ classes }) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <FavoriteIcon />
              </IconButton>
            }
            title="Username"
            subheader="Remain : 00:03:12"
          />
          <CardMedia
            className={classes.media}
            image="https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg"
            title=""
          />
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                // aria-label={}
                gutterBottom
                variant="h5"
                component="h2"
              >
                Job Title
              </Typography>
              <Typography
                // aria-label={}
                variant="body1"
                color="textPrimary"
                component="p"
              >
                Applicants <br />3
              </Typography>
            </div>
            <Typography
              // aria-label={}
              variant="body1"
              color="textPrimary"
              component="p"
            >
              Current Price
            </Typography>

            <Typography
              // aria-label={}
              gutterBottom
              variant="h4"
              component="h4"
            >
              $123.10
            </Typography>

            <Typography
              // aria-label={}
              variant="body1"
              color="textPrimary"
              component="p"
            >
              Category
            </Typography>
            <Typography
              // aria-label={}
              variant="body1"
              color="textPrimary"
              component="p"
            >
              Job Description Job Description Job Description Job Description
              Job Description Job Description Job Description Job Description
            </Typography>
          </CardContent>

          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <CardActions className={classes.cardMediaItemsBtn}>
              <Button
                className={classes.fullwidthBtn}
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
                Hop In
              </Button>
            </CardActions>
          </Grid>
        </Card>
      </Grid>

      {/* New Card */}
      <Grid item>
        <Card className={classes.card}>
          <CardActionArea>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <FavoriteIcon />
                </IconButton>
              }
              title="Username"
              subheader="Remain : 00:03:12"
            />
          </CardActionArea>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg"
              title=""
            />
          </CardActionArea>
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                // aria-label={}
                gutterBottom
                variant="h5"
                component="h2"
              >
                Job Title
              </Typography>
              <Typography
                // aria-label={}
                variant="body1"
                color="textPrimary"
                component="p"
              >
                Applicants <br />3
              </Typography>
            </div>

            <Typography
              // aria-label={}
              variant="body1"
              color="textPrimary"
              component="p"
            >
              Current Price
            </Typography>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                // aria-label={}
                gutterBottom
                variant="h4"
                component="h4"
              >
                $123.10
              </Typography>
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">
                  Hop Price
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  // value={}
                  // onChange={}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                />
              </FormControl>
            </div>

            <Typography
              // aria-label={}
              variant="body1"
              color="textPrimary"
              component="p"
            >
              Category
            </Typography>
            <Typography
              // aria-label={}
              variant="body1"
              color="textPrimary"
              component="p"
            >
              Job Description Job Description Job Description Job Description
              Job Description Job Description Job Description Job Description
            </Typography>
          </CardContent>

          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <div className={classes.cardMediaItemsBtn}>
              <Button
                type="button"
                variant="contained"
                size="large"
                color="primary"
                disabled={false}
                onClick={() => {
                  console.log(111);
                }}
              >
                Drop
              </Button>
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="secondary"
                disabled={false}
              >
                Hop Again
              </Button>
            </div>
          </Grid>
        </Card>
      </Grid>

      {/* New Card */}
      <Grid item>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <FavoriteIcon />
              </IconButton>
            }
            title="Username"
            subheader="Remain : 00:03:12"
          />
          <CardMedia
            className={classes.media}
            image="https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg"
            title=""
          />
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                // aria-label={}
                gutterBottom
                variant="h5"
                component="h2"
              >
                Job Title
              </Typography>
              <Typography
                // aria-label={}
                variant="body1"
                color="textPrimary"
                component="p"
              >
                Applicants <br />3
              </Typography>
            </div>

            <Typography
              // aria-label={}
              variant="body1"
              color="textPrimary"
              component="p"
            >
              Current Price
            </Typography>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                // aria-label={}
                gutterBottom
                variant="h4"
                component="h4"
              >
                $123.10
              </Typography>

              <FormControl className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">
                  Hop Price
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  // value={}
                  // onChange={}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                />
              </FormControl>
            </div>

            <Typography
              // aria-label={}
              variant="body1"
              color="textPrimary"
              component="p"
            >
              Category
            </Typography>
            <Typography
              // aria-label={}
              variant="body1"
              color="textPrimary"
              component="p"
            >
              Job Description Job Description Job Description Job Description
              Job Description Job Description Job Description Job Description
            </Typography>
          </CardContent>

          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <div className={classes.cardMediaItemsBtn}>
              <Button
                type="button"
                variant="contained"
                size="large"
                color="primary"
                disabled={false}
                onClick={() => {
                  console.log(111);
                }}
              >
                Drop
              </Button>
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                disabled={false}
              >
                Hop Again
              </Button>
            </div>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(JobCard);
