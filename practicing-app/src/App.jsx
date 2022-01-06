import React from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./store";
import RestTimer from "./containers/RestTimer";
import HangUp from "./containers/HangUp";
import SetTimer from "./containers/SetTimer";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <SetTimer />
          <HangUp />
          <RestTimer />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Provider>
  );
}

export default App;
