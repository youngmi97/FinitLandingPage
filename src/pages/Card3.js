import React, { useState } from "react";
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
    fontSize: "17px",
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
    /* or 172% */
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
    zIndex: 1,
  },
  medText1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "29px",
    marginTop: "10px",
    color: "#18022E",
    zIndex: 1,
    paddingBottom: 100,
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
    width: "35%",
  },
  pageMockUp1: {
    position: "absolute",
    right: "60vh",
    top: "330vh",
    zIndex: 0,
    opacity: 0.2,
    width: "70%",
  },
  textHolder: {
    width: "100%",
  },
  mockUpGrid: {
    width: "100%",
  },
  mockUpGrid2: {
    width: "100%",
    float: "center",
    display: "flex",

    flexDirection: "column",
    alignItems: "center",
  },
  pageMockUp2: {
    position: "relative",
    top: "100vh" + "80px",
    width: "80%",
    alignContent: "center",

    marginTop: "50px",
  },
  medText2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "17px",

    lineHeight: "20px",
    marginTop: "20px",
    color: "#18022E",
  },
  bigText2: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "40px",

    /* or 172% */
    letterSpacing: "0.02em",
  },
}));

function Card3() {
  const classes = useStyles();

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  function handleResize(e) {
    setInnerWidth(window.innerWidth);
    console.log("width", innerWidth);
  }

  window.addEventListener("resize", handleResize);

  const isWeb = innerWidth >= 700;
  const view = isWeb ? (
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
            src="/Frame 170.png"
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
          <img
            className={classes.pageMockUp1}
            src="/Path.png"
            alt="mockPage"
          ></img>
          <div className={classes.bigText}>
            <div>Monitor usage </div>
          </div>
          <div className={classes.medText}>
            <div>Is this plan the one for you? </div>
          </div>
          <div className={classes.medText1}>
            <div>Confidently make the choice to continue use by </div>
            <div>knowing how much you use it.</div>
          </div>
        </Grid>
      </Grid>
    </div>
  ) : (
    <div style={{ width: "100%" }}>
      <Grid
        container
        className={classes.bigGrid}
        direction="coumn"
        justify="center"
        alignItems="center"
        xs={12}
        style={{ margin: 0, padding: 0 }}
      >
        <Grid
          item
          className={classes.textHolder}
          direction="column"
          xs={12}
          style={{ margin: 0, padding: 0, paddingLeft: 20, paddingRight: 20 }}
        >
          <div className={classes.bigText2}>
            <div>Monitor usage </div>
          </div>
          <div className={classes.medText2}>
            <div>Is this plan the one for you? </div>
          </div>
          <div className={classes.medText2}>
            <div>Confidently make the choice to continue use by </div>
            <div>knowing how much you use it.</div>
          </div>
        </Grid>
        <Grid
          container
          className={classes.mockUpGrid2}
          direction="row"
          justify="flex-end"
          alignItems="center"
          xs={12}
          style={{ margin: 0, padding: 0 }}
        >
          <img
            className={classes.pageMockUp2}
            src="/Frame 170.png"
            alt="mockPage"
          ></img>
        </Grid>
      </Grid>
    </div>
  );
  return view;
}

export default Card3;
