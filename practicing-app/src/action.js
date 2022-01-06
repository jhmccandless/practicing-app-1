export function resetRestTimerAction(data) {
  console.log("reset rest action");
  return {
    type: "RESET_REST_TIMER",
    data,
  };
}
export function resetHangTimerAction(data) {
  console.log("reset hang action");
  return {
    type: "RESET_HANG_TIMER",
    data,
  };
}

export function stopCircuitAction() {
  return {
    type: "STOP_CIRCUIT",
  };
}
