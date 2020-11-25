import "./App.css";

import Main from "./pages/Main";
import Card1 from "./pages/Card1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          style={{ position: "absolute", top: "0px" }}
          src="/topLogo.svg"
          alt="logo"
        ></img>
        <Main />
      </header>
      <div className="App-header">
        <Card1 />
      </div>
    </div>
  );
}

export default App;
