const initialState = {
  isHangActive: true,
  hangTime: 2,
};

function timers_reducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case "DEACTIVATE_TIMER":
      return {
        ...state,
        isHangActive: false,
      };
    case "TESTING_REDUCER":
      console.log("in case");
      return {
        ...state,
      };
    default:
      console.log("in default");
      return state;
  }
}

export default timers_reducer;
