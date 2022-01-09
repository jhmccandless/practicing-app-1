import React from "react";
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
        </header>
      </div>
    </Provider>
  );
}

export default App;
