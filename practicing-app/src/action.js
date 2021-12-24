export function deactivateTimerAction() {
  console.log("in action");
  return {
    type: "DEACTIVATE_TIMER",
  };
}

export function testingReducerAction(data) {
  console.log("in testing reducer action");
  console.log(data);
  return {
    type: "TESTING_REDUCER",
    data,
  };
}
