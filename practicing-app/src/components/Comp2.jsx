import React, { useState, useEffect } from "react";

function Comp2() {
  const [time, setTime] = useState(3);
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
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
      <div>this is the timer: {time}</div>
    </>
  );
}

export default Comp2;
