import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
// import { Fab } from "@material-ui/core";
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
// import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
// import Input from "@material-ui/core/Input";
// import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

const DATA = [
  {
    userPosted: 1,
    userTaken: 2,
    completed: false,
    category: 1,
    title: "Clean Yard",
    description:
      "You will perform a range of general lawn maintenance duties including applying fertilizers, maintaining the landscape design, removing weeds and dead plants, and supervising repairs. ",
    location: "Vancouver",
    date: {
      datePosted: "20th November 2019",
      dateExpire: "19th November 2019",
      dateCompleted: "20th November 2019"
    },
    hopLog: [
      { userID: 2, time: "13:04", price: 48 },
      { userID: 1, time: "13:04", price: 48 },
      { userID: 1, time: "13:04", price: 48 }
    ],
    priceMax: 50,
    priceMin: 15,
    jobImages:
      "https://st.houzz.com/simgs/52f1cab4020de25b_8-3918/mediterranean-landscape.jpg"
  },
  {
    userPosted: 2,
    userTaken: 1,
    completed: false,
    category: 1,
    title: "Clean House",
    description:
      "House cleaners work in residential settings where they are expected to keep houses clean and well-organized. ... Their main work includes dusting, cleaning, doing laundry, mopping, making beds, and taking out the garbage. ",
    location: "Burnany",
    date: {
      datePosted: "20th November 2019",
      dateExpire: "19th November 2019",
      dateCompleted: "20th November 2019"
    },
    hopLog: [{ userID: 2, time: "13:04", price: 48 }],
    priceMax: 150,
    priceMin: 15,
    jobImages:
      "https://cdn.houseplansservices.com/product/45nd7vs237llha59kqgcv1lm6o/w620x413.jpg?v=11"
  },
  {
    userPosted: 3,
    userTaken: 2,
    completed: false,
    category: 1,
    title: "Clean Kitchen",
    description:
      "Work involves thorough cleaning of equipment and facilities to conform to proper sanitation standards. ... Washes pots, pans and traps; maintains neat appearance of working areas and cleaning equipment storage areas.",
    location: "Burnany",
    date: {
      datePosted: "20th November 2019",
      dateExpire: "19th November 2019",
      dateCompleted: "20th November 2019"
    },
    hopLog: [{ userID: 2, time: "13:04", price: 48 }],
    priceMax: 80,
    priceMin: 15,
    jobImages:
      "https://images.squarespace-cdn.com/content/v1/55b92797e4b0b0592fbc8850/1546115585098-TL2T0PWIBBNDBTEO6PL1/ke17ZwdGBToddI8pDm48kPqQfq0L3n3wpHIsRapTfg8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKczo5Zn4xktlpMsMj-QlHXeMfNK6GwvtVkYEWiR8XAPyD3GfLCe_DXOSC_YcAacWL_/Full+kitchen+20.jpg?format=2500w"
  }
];

const map1 = DATA[0].hopLog.map(value => value.userID);

const uniqueSet = new Set(map1);

const backToArray = [...uniqueSet];

const count = backToArray.length;
// console.log(count);

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
              image={DATA[0].jobImages}
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
                {DATA[0].title}
              </Typography>
              <Typography
                // aria-label={}
                variant="body1"
                color="textPrimary"
                component="p"
              >
                Applicants <br />
                {count}
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
              ${DATA[0].priceMax}
            </Typography>

            <Typography
              // aria-label={}
              variant="body1"
              color="textPrimary"
              component="p"
            >
              Category: {DATA[0].category}
            </Typography>
            <br />
            <Typography
              // aria-label={}
              variant="body1"
              color="textPrimary"
              component="p"
            >
              {DATA[0].description}
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
              image={DATA[1].jobImages}
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
                {DATA[1].title}
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
                ${DATA[1].priceMax}
              </Typography>
              {/* <FormControl className={classes.margin}>
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
              </FormControl> */}
              <TextField
                disabled
                id="filled-disabled"
                label="Your Hop Price"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="filled"
              />
            </div>

            <Typography
              // aria-label={}
              variant="body1"
              color="textPrimary"
              component="p"
            >
              Category: {DATA[1].category}
            </Typography>
            <br />
            <Typography
              // aria-label={}
              variant="body1"
              color="textPrimary"
              component="p"
            >
              {DATA[1].description}
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
              image={DATA[2].jobImages}
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
                {DATA[2].title}
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
                ${DATA[2].priceMax}
              </Typography>
              {/* 
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
              </FormControl> */}
              <TextField
                disabled
                id="filled-disabled"
                label="Your Hop Price"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="filled"
              />
            </div>

            <Typography
              // aria-label={}
              variant="body1"
              color="textPrimary"
              component="p"
            >
              Category: {DATA[2].category}
            </Typography>
            <br />
            <Typography
              // aria-label={}
              variant="body1"
              color="textPrimary"
              component="p"
            >
              {DATA[2].description}
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
            </CardActions>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(JobCard);
