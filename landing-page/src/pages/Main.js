import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  textField: {
    background: "#ffffff",
    width: "366px",
    height: "56px",
    borderRadius: "4px",
    border: "1px solid #EFEFF4",
    boxSizing: "border-box",
  },
  startButton: {
    marginLeft: "16px",
    height: "56px",
    width: "133px",
    background: "#6600FF;",
    boxShadow: "8px 16px 40px rgba(42, 0, 77, 0.3)",
    borderRadius: "6px",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "17px",
    /* identical to box height */

    textAlign: "center",
    letterSpacing: "0.03em",
    textTransform: "uppercase",
  },
  bigGrid: { width: "100%" },
  bigText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "72px",
    lineHeight: "88px",
    /* or 122% */
    letterSpacing: "0.02em",
    marginLeft: "100px",
  },
  medText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "29px",
    marginTop: "35px",
    marginLeft: "100px",
  },
  submitInfo: {
    width: "100%",
    height: "100px",
  },
  submitInfo2: {
    marginTop: "35px",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    verticalAlign: "middle",
    marginLeft: "100px",
  },
  pageMockUp: {
    float: "right",
    position: "fixed",
    top: "80px",
    right: "0px",
  },
  textHolder: {
    width: "100%",
  },
  phoneMockUp: {
    float: "right",
    position: "fixed",
    top: "210px",
    right: "365px",
  },
  mockUpGrid: {
    width: "100%",
  },
}));

function Main() {
  const classes = useStyles();
  return (
    <div style={{ width: "100%" }}>
      <Grid
        container
        className={classes.bigGrid}
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid item className={classes.textHolder} direction="column" xs={6}>
          <div className={classes.bigText}>
            <div>Subscriptions</div>
            <div>made easy</div>
          </div>
          <div className={classes.medText}>
            <div>Add, make changes and cancel</div>
            <div>subscriptions in one place</div>
          </div>
          <div className={classes.submitInfo}>
            <Grid
              item
              className={classes.submitInfo2}
              direction="row"
              xs={12}
              spacing={3}
            >
              <TextField
                className={classes.textField}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <Button
                className={classes.startButton}
                variant="contained"
                color="primary"
              >
                GET STARTED
              </Button>
            </Grid>
          </div>
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
            src="/webMockUp.svg"
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
