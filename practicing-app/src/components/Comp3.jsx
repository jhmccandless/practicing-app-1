import React, { useState, useEffect } from "react";

function Comp3() {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(false);

  //   function toggle() {
  //     setIsActive(!isActive);
  //   }

  //   function reset() {
  //     setSeconds(0);
  //     setIsActive(false);
  //   }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setTimeout(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  return (
    <>
      <h2>This is comp3</h2>
      <div>this is the timer: {seconds}</div>
      <button
        onClick={() => {
          return isActive ? setIsActive(false) : setIsActive(true);
        }}
      >
        Start/Stop Timer
      </button>
    </>
  );
}

export default Comp3;
