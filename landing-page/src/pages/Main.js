import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bigGrid: {},
  pageMockUp: {
    float: "right",
  },
  phoneMockUp: {
    float: "right",
  },
  mockUpGrid: {},
}));

function Main() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        className={classes.bigGrid}
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid item direction="row" justify="center" alignItems="center" xs={6}>
          {" "}
          Hello{" "}
        </Grid>
        <Grid
          container
          className={classes.mockUpGrid}
          direction="row"
          justify="center"
          alignItems="center"
          xs={6}
        >
          <img
            className={classes.pageMockUp}
            src="/landingPageMockUp.svg"
            alt="mockPage"
          ></img>
          <img
            className={classes.phoneMockUp}
            src="/phoneMockUp.svg"
            alt="mockPhone"
          ></img>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
