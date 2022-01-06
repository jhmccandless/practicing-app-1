const initialState = {
  isHangActive: true,
  hangTime: 2,
  isRestActive: false,
  restTime: 2,
  totalTime: 4,
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
      let setMinus = state.setsTotal--;
      return {
        ...state,
        totalTime: initialState.totalTime,
        isHangActive: false,
        isRestActive: true,
        setsTotal: state.setsTotal--,
      };
    case "STOP_CIRCUIT":
      console.log("circuit stopped");
      return {
        ...state,
        isHangActive: false,
        isRestActive: false,
      };
    default:
      return state;
  }
}

export default timers_reducer;
