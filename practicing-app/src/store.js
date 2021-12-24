import { createStore } from "@reduxjs/toolkit";
import timers_reducer from "./reducer";

const store = createStore(timers_reducer);

export default store;
