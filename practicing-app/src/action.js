export function resetRestTimerAction(data) {
  console.log("reset time action");
  return {
    type: "RESET_REST_TIMER",
    data,
  };
}
export function resetHangTimerAction(data) {
  return {
    type: "RESET_HANG_TIMER",
    data,
  };
}
