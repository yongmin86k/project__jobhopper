import React from "react";

import AccountForm from "../../components/AccountForm";
import { Paper, Typography, withStyles } from "@material-ui/core";
import styles from "./styles";

const Home = ({ classes }) => {
  return (
    <section className="sectionWithMenuBar home">
      <Typography className={classes.title} color="secondary" component="p">
        Find local professionals for pretty much anything.
      </Typography>
      <Paper className={classes.wrap}>
        <AccountForm />
      </Paper>
    </section>
  );
};

export default withStyles(styles)(Home);
