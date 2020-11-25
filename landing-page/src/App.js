import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Main from "./pages/Main";

const useStyles = makeStyles((theme) => ({
  bigGrid: {},
  pageMockUp: {
    float: "right",
    position: "absolute",
    zIndex: -1,
  },
  phoneMockUp: {
    float: "right",
    marginTop: "200px",
    position: "absolute",
    zIndex: 1,
  },
  mockUpGrid: {},
  imgDiv: { width: "100%", position: "relative" },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        {/* <Main /> */}
        <img src="/topLogo.svg"></img>
        <Grid
          container
          className={classes.bigGrid}
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <Grid
            container
            className={classes.mockUpGrid}
            direction="row"
            justify="center"
            alignItems="center"
            xs={6}
          >
            Hello
          </Grid>
          <Grid
            container
            className={classes.mockUpGrid}
            direction="row"
            justify="center"
            alignItems="center"
            xs={6}
          >
            <div className={classes.imgDiv}>
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
            </div>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
