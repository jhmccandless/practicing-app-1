const initialState = {
  isHangActive: true,
  hangTime: 2,
};

function timers_reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "DEACTIVATE_TIMER":
      return {
        ...state,
        isHangActive: false,
      };
    default:
      console.log("in default");
      return state;
  }
}

export default timers_reducer;
