import "./App.css";

import Main from "./pages/Main";
import Card1 from "./pages/Card1";
import Card2 from "./pages/Card2";
import Card3 from "./pages/Card3";
import Card4 from "./pages/Card4";

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
      <div className="App-card" style={{ margin: 0, padding: 0 }}>
        <Card1 />
      </div>
      <div className="App-card" style={{ margin: 0, padding: 0 }}>
        <Card2 />
      </div>
      <div className="App-card" style={{ margin: 0, padding: 0 }}>
        <Card3 />
      </div>
      <div className="App-card" style={{ margin: 0, padding: 0 }}>
        <Card4 />
      </div>
    </div>
  );
}

export default App;
