import "./App.css";

import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          style={{ position: "fixed", top: "0px" }}
          src="/topLogo.svg"
          alt="logo"
        ></img>
        <Main />
      </header>
    </div>
  );
}

export default App;
