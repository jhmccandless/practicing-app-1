export function deactivateTimerAction() {
  console.log("in deact action");
  return {
    type: "DEACTIVATE_TIMER",
  };
}

export function testingAction(data) {
  console.log("testingaction");
  return {
    type: "TESTING_ACTION",
    data,
  };
}
