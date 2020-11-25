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
  bigGrid: { width: "100%", margin: 0, padding: 0 },
  bigText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "50px",
    lineHeight: "61px",
    /* or 122% */
    letterSpacing: "0.02em",
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
    color: "#18022E",
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
    position: "absolute",
    top: "100vh" + "80px",
    paddingRight: 92,
  },
  textHolder: {
    width: "100%",
  },
  mockUpGrid: {
    width: "100%",
  },
}));

function Card2() {
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
        style={{ margin: 0, padding: 0 }}
      >
        <Grid
          container
          className={classes.mockUpGrid}
          direction="row"
          justify="flex-end"
          alignItems="center"
          xs={6}
          style={{ margin: 0, padding: 0 }}
        >
          <img
            className={classes.pageMockUp}
            src="/Group 169.png"
            alt="mockPage"
          ></img>
        </Grid>
        <Grid
          item
          className={classes.textHolder}
          direction="column"
          xs={6}
          style={{ margin: 0, padding: 0 }}
        >
          <div className={classes.bigText}>
            <div>Say no to unwanted </div>
            <div>recurring payments</div>
          </div>
          <div className={classes.medText}>
            <div>Forgot about that free trial you meant to cancel? </div>
            <div>Don’t worry, we’ve got you covered.</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Card2;
