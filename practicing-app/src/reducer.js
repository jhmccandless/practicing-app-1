const initialState = {
  isHangActive: true,
  hangTime: 2,
  isRestActive: true,
  restTime: 4,
};

function timers_reducer(state = initialState, action) {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "RESET_REST_TIMER":
      return {
        ...state,
        isRestActive: true ? false : true,
      };
    case "RESET_HANG_TIMER":
      return {
        ...state,
        isHangActive: true ? false : true,
      };
    default:
      return state;
  }
}

export default timers_reducer;
