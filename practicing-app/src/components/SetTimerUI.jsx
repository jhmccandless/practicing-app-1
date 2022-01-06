import React, { useState, useEffect } from "react";

function SetTimerUI({ totalTime, isHangActive, resetHangTimer }) {
  const [allTime, setAllTime] = useState(totalTime);
  useEffect(() => {
    if (allTime <= 0) {
      setAllTime(totalTime);
      resetHangTimer();
    } else if (isHangActive) {
      setTimeout(() => {
        setAllTime((allTime) => {
          return allTime - 1;
        });
      }, 1000);
    }
  }, [allTime, isHangActive, resetHangTimer, totalTime]);
  return (
    <>
      <h2>This is the set timer</h2>
      <div>this is the timer: {allTime}</div>
    </>
  );
}

export default SetTimerUI;
