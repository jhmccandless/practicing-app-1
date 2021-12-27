import React, { useState, useEffect } from "react";

function Comp3UI({ restTime, isRestActive, resetTimer, isHangActive }) {
  // const [seconds, setSeconds] = useState(10);
  // const [isActive, setIsActive] = useState(false);

  // useEffect(() => {
  //   let interval = null;
  //   if (isActive) {
  //     interval = setTimeout(() => {
  //       setSeconds((seconds) => seconds - 1);
  //     }, 1000);
  //   } else if (!isActive && seconds !== 0) {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, [isActive, seconds]);

  const [time, setTime] = useState(restTime);
  // const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    if (!isHangActive) {
      if (time <= 0) {
        resetTimer();
      } else if (isRestActive)
        setTimeout(() => {
          setTime((time) => time - 1);
        }, 1000);
    }
  }, [time, isRestActive, resetTimer, isHangActive]);
  return (
    <>
      <h2>This is comp3UI</h2>
      <div>this is the timer: {time}</div>
      {/* <button
        onClick={() => {
          return isActive ? setIsActive(false) : setIsActive(true);
        }}
      >
        Start/Stop Timer
      </button> */}
    </>
  );
}

export default Comp3UI;
