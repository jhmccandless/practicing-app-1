import React, { useState, useEffect } from "react";

function SetTimerUI({ totalTime, isHangActive, resetHangTimer }) {
  const [setTime, setSetTime] = useState(totalTime);
  useEffect(() => {
    if (setTime <= 0) {
      setSetTime(totalTime);
      resetHangTimer();
    } else if (isHangActive) {
      setTimeout(() => {
        setSetTime((setTime) => {
          return setTime - 1;
        });
      }, 1000);
    }
  }, [setTime, isHangActive, resetHangTimer, totalTime]);
  return (
    <>
      <h2>This is the set timer</h2>
      <div>this is the timer: {setTime}</div>
    </>
  );
}

export default SetTimerUI;
