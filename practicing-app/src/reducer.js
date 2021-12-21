const initialState = {
  isActive: false,
};

function timers_reducer(state = initialState, action) {
  switch (action.type) {
    case "TIMER_RESET":
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default timers_reducer;
