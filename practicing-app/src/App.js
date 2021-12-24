import React from "react";
import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import Comp1 from "./components/Comp1";
import Comp2 from "./containers/Comp2";
import "./App.css";
import Comp3 from "./components/Comp3";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Comp1 />
        <Comp2 />
        <Comp3 />
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span> */}
      </header>
    </div>
  );
}

export default App;
