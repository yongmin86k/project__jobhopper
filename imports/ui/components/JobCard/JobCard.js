import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Categories } from "/imports/api/categories";

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

import TextField from "@material-ui/core/TextField";

const DATA = [
  {
    userPosted: 1,
    userTaken: null,
    completed: false,
    category: "XycJ3Dqn37WTB3X29",
    title: "Clean Yard",
    description:
      "You will perform a range of general lawn maintenance duties including applying fertilizers, maintaining the landscape design, removing weeds and dead plants, and supervising repairs. ",
    location: "Vancouver",
    date: {
      datePosted: "20th November 2019",
      dateExpire: "19th November 2019",
      dateCompleted: null
    },
    hopLog: [
      { userID: 1, time: "13:04", price: 44 },
      { userID: 1, time: "13:01", price: 48 },
      { userID: 2, time: "13:02", price: 46 },
      { userID: 2, time: "13:06", price: 42 }
    ],
    priceMax: 50,
    priceMin: 15,
    jobImages:
      "https://st.houzz.com/simgs/52f1cab4020de25b_8-3918/mediterranean-landscape.jpg"
  },
  {
    userPosted: 2,
    userTaken: null,
    completed: false,
    category: "f3rDL36EGujEZ2yb2",
    title: "Clean House",
    description:
      "House cleaners work in residential settings where they are expected to keep houses clean and well-organized. ... Their main work includes dusting, cleaning, doing laundry, mopping, making beds, and taking out the garbage. ",
    location: "Burnany",
    date: {
      datePosted: "20th November 2019",
      dateExpire: "19th November 2019",
      dateCompleted: null
    },
    hopLog: [{ userID: 2, time: "13:04", price: 48 }],
    priceMax: 150,
    priceMin: 15,
    jobImages:
      "https://cdn.houseplansservices.com/product/45nd7vs237llha59kqgcv1lm6o/w620x413.jpg?v=11"
  },
  {
    userPosted: 3,
    userTaken: null,
    completed: false,
    category: "ruq6awbX68RsHixAy",
    title: "Clean Kitchen",
    description:
      "Work involves thorough cleaning of equipment and facilities to conform to proper sanitation standards. ... Washes pots, pans and traps; maintains neat appearance of working areas and cleaning equipment storage areas.",
    location: "Burnany",
    date: {
      datePosted: "20th November 2019",
      dateExpire: "19th November 2019",
      dateCompleted: null
    },

    priceMax: 80,
    priceMin: 15,
    jobImages:
      "https://images.squarespace-cdn.com/content/v1/55b92797e4b0b0592fbc8850/1546115585098-TL2T0PWIBBNDBTEO6PL1/ke17ZwdGBToddI8pDm48kPqQfq0L3n3wpHIsRapTfg8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKczo5Zn4xktlpMsMj-QlHXeMfNK6GwvtVkYEWiR8XAPyD3GfLCe_DXOSC_YcAacWL_/Full+kitchen+20.jpg?format=2500w"
  },
  {
    userPosted: 3,
    userTaken: null,
    completed: false,
    category: "ruq6awbX68RsHixAy",
    title: "Clean Kitchen",
    description:
      "Work involves thorough cleaning of equipment and facilities to conform to proper sanitation standards. ... Washes pots, pans and traps; maintains neat appearance of working areas and cleaning equipment storage areas.",
    location: "Burnany",
    date: {
      datePosted: "20th November 2019",
      dateExpire: "19th November 2019",
      dateCompleted: null
    },
    hopLog: [
      { userID: 1, time: "13:04", price: 48 },
      { userID: 2, time: "13:06", price: 46 },
      { userID: 2, time: "13:08", price: 44 },
      { userID: 1, time: "13:10", price: 42 },
      { userID: 1, time: "13:12", price: 40 }
    ],
    priceMax: 80,
    priceMin: 15,
    jobImages:
      "https://images.squarespace-cdn.com/content/v1/55b92797e4b0b0592fbc8850/1546115585098-TL2T0PWIBBNDBTEO6PL1/ke17ZwdGBToddI8pDm48kPqQfq0L3n3wpHIsRapTfg8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKczo5Zn4xktlpMsMj-QlHXeMfNK6GwvtVkYEWiR8XAPyD3GfLCe_DXOSC_YcAacWL_/Full+kitchen+20.jpg?format=2500w"
  }
];

const JobCard = ({ classes, categories }) => {
  return (
    <Fragment>
      {DATA
        ? DATA.map((job, index) => {
            const applicants = job.hopLog
              ? [...new Set(job.hopLog.map(value => value.userID))].length
              : null;

            const userWinning = job.hopLog
              ? [job.hopLog.map(item => item.price).sort()[0]]
              : null;

            const currentPrice = job.hopLog ? userWinning : job.priceMax;

            const result = categories
              ? categories.find(({ _id }) => _id === job.category)
              : null;

            const latestUserBid = job.hopLog
              ? job.hopLog.sort(function(a, b) {
                  let timeA = a.time,
                    timeB = b.time;
                  if (timeA > timeB)
                    //sort string descending
                    return -1;
                  if (timeA < timeB) return 1;
                  return 0; //default return value (no sorting)
                })
              : null;
            // console.log(latestUserBid);
            // console.log(
            //   "userid",
            //   latestUserBid ? latestUserBid[0].price : null
            // );
            const latestUserBidPrice = latestUserBid
              ? latestUserBid[0].price
              : null;

            const dataByUser1 = latestUserBid
              ? latestUserBid.filter(item => item.userID === 1)
              : null;
            // console.log(dataByUser1);
            // console.log(dataByUser1 ? dataByUser1[0] : null);
            const yourHopPrice = dataByUser1 ? dataByUser1[0] : null;

            return (
              <Card key={index} className={classes.card}>
                {!job.hopLog || dataByUser1.length < 1 ? (
                  <Fragment>
                    <CardActionArea>
                      <CardHeader
                        avatar={
                          <Avatar
                            aria-label="recipe"
                            className={classes.avatar}
                          >
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
                        image={job.jobImages}
                        title=""
                      />
                    </CardActionArea>
                    <CardContent>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <Typography gutterBottom variant="h5" component="h2">
                          {job.title}
                        </Typography>
                        <Typography paragraph>
                          Applicants <br />
                          {applicants}
                        </Typography>
                      </div>

                      <Typography paragraph>Current Price</Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <Typography gutterBottom variant="h4" component="h4">
                          ${currentPrice}
                        </Typography>
                      </div>
                      <Typography paragraph>
                        Category: {result ? result.title : null}
                      </Typography>
                      <br />
                      <Typography paragraph>{job.description}</Typography>
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
                          color="primary"
                          fullWidth
                          disabled={false}
                          onClick={() => {
                            console.log("No one bidded");
                          }}
                        >
                          Hop In
                        </Button>
                      </CardActions>
                    </Grid>
                  </Fragment>
                ) : currentPrice[0] === latestUserBidPrice ? (
                  <Fragment>
                    <CardActionArea>
                      <CardHeader
                        avatar={
                          <Avatar
                            aria-label="recipe"
                            className={classes.avatar}
                          >
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
                        image={job.jobImages}
                        title=""
                      />
                    </CardActionArea>
                    <CardContent>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <Typography gutterBottom variant="h5" component="h2">
                          {job.title}
                        </Typography>
                        <Typography paragraph>
                          Applicants <br />
                          {applicants}
                        </Typography>
                      </div>

                      <Typography paragraph>Current Price</Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <Typography gutterBottom variant="h4" component="h4">
                          ${currentPrice}
                        </Typography>

                        <TextField
                          disabled
                          id="filled-disabled"
                          label="Your Hop Price"
                          defaultValue={yourHopPrice && yourHopPrice.price}
                          className={classes.textField}
                          margin="normal"
                          variant="filled"
                        />
                      </div>
                      <Typography paragraph>
                        Category: {result ? result.title : null}
                      </Typography>
                      <br />
                      <Typography paragraph>{job.description}</Typography>
                    </CardContent>

                    <Grid
                      container
                      direction="row"
                      justify="space-around"
                      alignItems="center"
                    >
                      <CardActions className={classes.cardMediaItemsBtn}>
                        <Fragment>
                          <Button
                            type="button"
                            variant="contained"
                            size="large"
                            color="secondary"
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
                        </Fragment>
                      </CardActions>
                    </Grid>
                  </Fragment>
                ) : currentPrice[0] < yourHopPrice && yourHopPrice.price ? (
                  <Fragment>
                    <CardActionArea>
                      <CardHeader
                        avatar={
                          <Avatar
                            aria-label="recipe"
                            className={classes.avatar}
                          >
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
                        image={job.jobImages}
                        title=""
                      />
                    </CardActionArea>
                    <CardContent>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <Typography gutterBottom variant="h5" component="h2">
                          {job.title}
                        </Typography>
                        <Typography paragraph>
                          Applicants <br />
                          {applicants}
                        </Typography>
                      </div>

                      <Typography paragraph>Current Price</Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <Typography gutterBottom variant="h4" component="h4">
                          ${currentPrice}
                        </Typography>
                        <TextField
                          disabled
                          id="filled-disabled"
                          label="Your Hop Price"
                          defaultValue={latestUserBidPrice}
                          className={classes.textField}
                          margin="normal"
                          variant="filled"
                        />
                      </div>
                      <Typography paragraph>
                        Category: {result ? result.title : null}
                      </Typography>
                      <br />
                      <Typography paragraph>{job.description}</Typography>
                    </CardContent>

                    <Grid
                      container
                      direction="row"
                      justify="space-around"
                      alignItems="center"
                    >
                      <CardActions className={classes.cardMediaItemsBtn}>
                        <Fragment>
                          <Button
                            type="button"
                            variant="contained"
                            size="large"
                            color="secondary"
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
                            disabled={true}
                          >
                            Hop Again
                          </Button>
                        </Fragment>
                      </CardActions>
                    </Grid>
                  </Fragment>
                ) : null}
              </Card>
            );
          })
        : "Job is not exist"}
    </Fragment>
  );
};

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    categories: Categories.find({}).fetch()
  };
})(withStyles(styles)(JobCard));
