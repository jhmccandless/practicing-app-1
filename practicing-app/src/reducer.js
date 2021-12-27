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
    case "RESET_TIMER":
      return {
        ...state,
        isHangActive: false,
      };
    default:
      return state;
  }
}

export default timers_reducer;
