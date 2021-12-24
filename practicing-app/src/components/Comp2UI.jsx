import React, { useState, useEffect } from "react";
import { deactivateTimerAction, testingAction } from "../action";

function Comp2UI({ hangTime, isHangActive }) {
  const [time, setTime] = useState(hangTime);
  // const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    if (time <= 0) {
      // deactivateTimerAction();
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
