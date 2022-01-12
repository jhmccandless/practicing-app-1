import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import WorkoutPageUI from "./components/WorkoutPageUI";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          {/* <header className="App-header">
          </header> */}
          <WorkoutPageUI />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
