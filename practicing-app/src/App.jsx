import React from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./store";
import Comp1 from "./containers/Comp1";
import Comp2 from "./containers/Comp2";
import "./App.css";
import Comp3 from "./containers/Comp3";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Comp1 />
          <Comp2 />
          <Comp3 />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Provider>
  );
}

export default App;
