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
import Gallery from "react-grid-gallery";

import FavoriteIcon from "@material-ui/icons/Favorite";

const IMAGES = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 50,
    caption: "After Rain (Jeshu John - designerspics.com)"
  }
];

const IMAGE = [
  {
    src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
    thumbnail:
      "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 50,
    caption: "37H (gratispgraphy.com)"
  }
];

const Jobs = ({ classes }) => {
  return (
    <div className={classes.Container}>
      <section id="filter-jobs" className="filterJobs">
        <div className={classes.filterContainer}>
          <Fab
            className={classes.filterBtn}
            size="small"
            variant="extended"
            aria-label="like"
            color="primary"
          >
            Category
          </Fab>

          <Fab
            className={classes.filterBtn}
            size="small"
            variant="extended"
            aria-label="like"
            color="primary"
          >
            Dates
          </Fab>

          <Fab
            className={classes.filterBtn}
            size="small"
            variant="extended"
            aria-label="like"
            color="primary"
          >
            Price
          </Fab>

          <Fab
            className={classes.filterBtn}
            size="small"
            variant="extended"
            aria-label="like"
            color="primary"
          >
            Distance
          </Fab>
          <Fab
            className={classes.filtertxt}
            size="small"
            variant="extended"
            aria-label="like"
            color="primary"
          >
            Current location: V6L 3E2
          </Fab>
        </div>
      </section>
      <section className="cardJobs">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
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
                <CardMedia>
                  <Gallery images={IMAGE} />
                </CardMedia>
              </CardActionArea>
              <CardContent>
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
                  Current Price
                </Typography>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    // aria-label={}
                    gutterBottom
                    variant="h2"
                    component="h1"
                  >
                    $123.10
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
                  Category
                </Typography>
                <Typography
                  // aria-label={}
                  variant="body1"
                  color="textPrimary"
                  component="p"
                >
                  Job Description Job Description Job Description Job
                  Description Job Description Job Description Job Description
                  Job Description
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
                    type="submit"
                    variant="contained"
                    size="large"
                    color="secondary"
                    disabled={false}
                  >
                    Hop Me In
                  </Button>
                  <Button
                    type="button"
                    variant="contained"
                    size="large"
                    color="primary"
                    disabled={false}
                    onClick={() => {
                      console.log(111);
                    }}
                    width="200"
                  >
                    Cancel
                  </Button>
                </CardActions>
              </Grid>
            </Card>
          </Grid>

          {/* New Card */}
          <Grid item xs={12} sm={6} md={4}>
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
                  style={{
                    display: "block",
                    flexDirection: "row",
                    minHeight: "50px",
                    width: "100%",
                    overflow: "auto"
                  }}
                >
                  <Gallery images={IMAGES} />
                </CardMedia>
              </CardActionArea>
              <CardContent>
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
                  Current Price
                </Typography>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    // aria-label={}
                    gutterBottom
                    variant="h2"
                    component="h1"
                  >
                    $123.10
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
                  Category
                </Typography>
                <Typography
                  // aria-label={}
                  variant="body1"
                  color="textPrimary"
                  component="p"
                >
                  Job Description Job Description Job Description Job
                  Description Job Description Job Description Job Description
                  Job Description
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
                    type="submit"
                    variant="contained"
                    size="large"
                    color="secondary"
                    disabled={false}
                  >
                    Hop Me In
                  </Button>
                  <Button
                    type="button"
                    variant="contained"
                    size="large"
                    color="primary"
                    disabled={false}
                    onClick={() => {
                      console.log(111);
                    }}
                    width="200"
                  >
                    Cancel
                  </Button>
                </CardActions>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default withStyles(styles)(Jobs);
