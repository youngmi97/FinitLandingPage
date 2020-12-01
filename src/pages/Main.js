import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import { Grid } from "@material-ui/core";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  textField: {
    background: "#ffffff",
    width: "50%",
    height: "56px",
    borderRadius: "4px",
    border: "1px solid #EFEFF4",
    boxSizing: "border-box",
    padding: 10,
  },
  startButton: {
    marginLeft: "16px",
    height: "56px",
    width: "250px",
    background: "#6600FF;",
    boxShadow: "8px 16px 40px rgba(42, 0, 77, 0.3)",
    borderRadius: "6px",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
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
  bigText2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "70px",
    lineHeight: "88px",
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
    marginLeft: "100px",
  },
  medText2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "29px",
    marginTop: "35px",
  },
  submitInfo: {
    width: "100%",
    height: "100px",
  },
  submitInfoNew: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "20px",
    marginLeft: "20px",
  },

  submitInfo2: {
    marginTop: "35px",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    verticalAlign: "middle",
    marginLeft: "100px",
  },
  submitInfo3: {
    marginTop: "35px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    verticalAlign: "middle",
  },
  pageMockUp: {
    float: "right",
    width: "45%",
    position: "absolute",

    top: "80px",
    right: "0px",
  },
  textHolder: {
    width: "100%",
  },
  phoneMockUp: {
    float: "right",
    position: "absolute",
    top: "210px",
    right: "365px",
  },
  mockUpGrid: {
    width: "100%",
  },
}));

function Main(props) {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  function handleResize(e) {
    setInnerWidth(window.innerWidth);
    console.log("width", innerWidth);
  }

  window.addEventListener("resize", handleResize);

  function isValidEmailAddress(address) {
    return !!address.match(/.+@.+/);
  }

  function openForm() {
    window.open("https://sureplus.typeform.com/to/A0mG6n8u");
  }

  function checkEmail(e) {
    console.log("email value", e.target.value);
    if (isValidEmailAddress(e.target.value)) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }

  const isWeb = innerWidth >= 1000;
  const view = isWeb ? (
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
              {/* <TextField
                className={classes.textField}
                id="outlined-basic"
                label="Email"
                type="email"
                errorText={"Please enter a valid email"}
                onChange={checkEmail}
                variant="outlined"
              /> */}
              <Input
                className={classes.textField}
                placeholder="Email"
                type="email"
                disableUnderline={true}
                onChange={checkEmail}
              />
              <Button
                className={classes.startButton}
                onClick={openForm}
                variant="contained"
                color="primary"
                disabled={btnDisabled}
              >
                ↗︎ Apply for Beta Access
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
            src="/mockUpGroup2.png"
            alt="mockPage"
          ></img>
          {/* <img
            className={classes.phoneMockUp}
            src="/phoneMockUp.svg"
            alt="mockPhone"
          ></img> */}
        </Grid>
      </Grid>
    </div>
  ) : (
    <div style={{ width: "100%" }}>
      <Grid
        container
        className={classes.bigGrid}
        direction="column"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid item className={classes.textHolder} direction="column" xs={12}>
          <div className={classes.bigText2}>
            <div>Subscriptions</div>
            <div>made easy</div>
          </div>
          <div className={classes.medText2}>
            <div>Add, make changes and cancel</div>
            <div>subscriptions in one place</div>
          </div>
          <div className={classes.submitInfoNew}>
            <Grid
              item
              className={classes.submitInfo3}
              direction="row"
              xs={12}
              spacing={3}
            >
              {/* <TextField
                className={classes.textField}
                id="outlined-basic"
                label="Email"
                type="email"
                errorText={"Please enter a valid email"}
                onChange={checkEmail}
                variant="outlined"
              /> */}
              <Input
                className={classes.textField}
                placeholder="Email"
                type="email"
                disableUnderline={true}
                onChange={checkEmail}
              />
              <Button
                className={classes.startButton}
                onClick={openForm}
                variant="contained"
                color="primary"
                disabled={btnDisabled}
              >
                GET STARTED
              </Button>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );

  return view;
}

export default Main;
