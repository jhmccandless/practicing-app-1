import React, { useState, useEffect } from "react";

function Comp2UI({ hangTime, restingTime, totalTime }) {
  const [totalSetTime, setTotalSetTime] = useState(totalTime);
  const [isSetTimeActive, setIsSetTimeActive] = useState(true);
  const [workTime, setWorkTime] = useState(hangTime);
  const [isWorkActive, setIsWorkActive] = useState(true);
  const [restTime, setRestTime] = useState(restingTime);
  const [isRestActive, setIsRestActive] = useState(false);
  useEffect(() => {
    if (workTime <= 0) {
      setIsWorkActive(false);
      setIsRestActive(true);
      setWorkTime(hangTime);
    } else if (restTime <= 0) {
      setIsRestActive(false);
      setIsWorkActive(true);
      setRestTime(restingTime);
    } else if (totalSetTime <= 0) {
      setIsSetTimeActive(false);
    } else if (isWorkActive) {
      setTimeout(() => {
        setWorkTime((workTime) => workTime - 1);
      }, 1000);
    } else if (isRestActive) {
      setTimeout(() => {
        setRestTime((restTime) => restTime - 1);
      }, 1000);
    } else if (isSetTimeActive) {
      setTimeout(() => {
        setTotalSetTime((totalSetTime) => {
          return totalSetTime - 1;
        });
      }, 1000);
    }
  }, [
    workTime,
    isWorkActive,
    restTime,
    isRestActive,
    hangTime,
    restingTime,
    totalSetTime,
    isSetTimeActive,
  ]);

  return (
    <>
      <h2>This is comp2</h2>
      <div>This is the total time: {totalSetTime}</div>
      <div>this is the Hang timer: {workTime}</div>
      <div>this is the Rest timer: {restTime}</div>
    </>
  );
}

export default Comp2UI;
