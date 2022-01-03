const initialState = {
  isHangActive: true,
  hangTime: 2,
  isRestActive: false,
  restTime: 4,
  totalTime: 10,
};

function timers_reducer(state = initialState, action) {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "RESET_REST_TIMER":
      return {
        ...state,
      };
    case "RESET_HANG_TIMER":
      console.log(state.isHangActive);
      console.log(state.isRestActive);
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default timers_reducer;
