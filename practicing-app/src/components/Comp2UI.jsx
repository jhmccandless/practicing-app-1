import React, { useState, useEffect } from "react";

function Comp2UI({ hangTime, isHangActive, resetTimer }) {
  const [time, setTime] = useState(hangTime);
  // const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    if (time <= 0) {
      resetTimer();
    } else if (isHangActive)
      setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
  }, [time, isHangActive, resetTimer]);

  return (
    <>
      <h2>This is comp2</h2>
      <div>this is the timer: {isHangActive ? time : hangTime}</div>
    </>
  );
}

export default Comp2UI;
