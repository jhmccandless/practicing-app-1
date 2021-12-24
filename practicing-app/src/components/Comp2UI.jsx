import React, { useState, useEffect } from "react";

function Comp2UI({ hangTime }) {
  console.log(hangTime);
  const startTime = 3;
  const [time, setTime] = useState(startTime);
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    console.log(isRunning);
    if (time <= 0) {
      setIsRunning(false);
    } else if (isRunning)
      setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
  }, [time, isRunning]);
  return (
    <>
      <h2>This is comp2</h2>
      <div>this is the timer: {isRunning ? time : startTime}</div>
    </>
  );
}

export default Comp2UI;
