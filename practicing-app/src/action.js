export function deactivateTimerAction() {
  console.log("in deact action");
  return {
    type: "DEACTIVATE_TIMER",
  };
}

export function testingAction(data) {
  console.log("testingaction", data);
  return {
    type: "TESTING_ACTION",
    data,
  };
}
