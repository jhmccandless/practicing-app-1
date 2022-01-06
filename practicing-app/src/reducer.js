const initialState = {
  isHangActive: false,
  hangTime: 2,
  isRestActive: false,
  restTime: 5,
  totalTime: 10,
  setsTotal: 3,
};

function timers_reducer(state = initialState, action) {
  console.log(action);
  console.table(state);
  switch (action.type) {
    case "RESET_REST_TIMER":
      return {
        ...state,
        restTime: initialState.restTime,
        isHangActive: true,
        isRestActive: false,
      };
    case "RESET_HANG_TIMER":
      return {
        ...state,
        totalTime: initialState.totalTime,
        isHangActive: false,
        isRestActive: true,
        setsTotal: state.setsTotal--,
      };
    default:
      return state;
  }
}

export default timers_reducer;
