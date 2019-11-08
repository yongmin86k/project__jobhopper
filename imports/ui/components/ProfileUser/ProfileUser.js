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

const ProfileUser = ({ classes }) => {
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
                U
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <FavoriteIcon />
              </IconButton>
            }
          />

          <CardContent></CardContent>

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
                Edit
              </Button>
            </CardActions>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ProfileUser);
