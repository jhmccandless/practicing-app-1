import React, { useState, useEffect } from "react";
import { deactivateTimerAction } from "../action";
// import { testingReducerAction } from "../action";

function Comp2UI({ hangTime, isHangActive }) {
  const [time, setTime] = useState(hangTime);
  // const [isRunning, setIsRunning] = useState(true);
  deactivateTimerAction();
  useEffect(() => {
    console.log(isHangActive);
    if (time <= 0) {
    } else if (isHangActive)
      setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
  }, [time, isHangActive]);
  return (
    <>
      <h2>This is comp2</h2>
      <div>this is the timer: {isHangActive ? time : hangTime}</div>
    </>
  );
}

export default Comp2UI;
