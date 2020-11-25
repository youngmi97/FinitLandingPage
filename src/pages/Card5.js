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
    height: "57px",
    width: "611px",
    background: "white",
    boxShadow: "8px 16px 40px rgba(47, 4, 89, 0.3)",
    borderRadius: "6px",
    fontStyle: "normal",
    marginTop: 64,
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "17px",
    color: "#5c12A6",
    /* identical to box height */

    textAlign: "center",
    letterSpacing: "0.03em",
    textTransform: "uppercase",
  },
  bigGrid: { width: "100%", margin: 0, padding: 0 },
  bigText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "50px",
    lineHeight: "61px",
    /* or 122% */
    letterSpacing: "0.02em",
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
  pageMockUp1: {
    position: "absolute",
    right: "50vh",
    top: "330vh",
    zIndex: 0,
    opacity: 0.2,
  },
  textHolder: {
    width: "100%",
  },
  mockUpGrid: {
    width: "100%",
  },
}));

function Card3() {
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
          direction="column"
          justify="center"
          alignItems="center"
          xs={12}
          style={{ margin: 0, padding: 0 }}
        >
          <div className={classes.bigText}>
            <div>Control how you spend,</div>
            <div>and when you spend.</div>
          </div>
          <div>
            <Button
              className={classes.startButton}
              variant="contained"
              color="primary"
            >
              GET STARTED
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Card3;