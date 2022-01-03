import React, { useState, useEffect } from "react";

function Comp2UI({ hangTime, restingTime, setTotalTime, betweenSets }) {
  // between sets rest
  const [betweenSetRest, setBetweenSetRest] = useState(betweenSets);
  const [isBetweenSetRest, setIsBetweenSetRest] = useState(false);
  // set timer
  const [totalSetTime, setTotalSetTime] = useState(setTotalTime);
  const [isSetTimeActive, setIsSetTimeActive] = useState(true);
  // hang timer
  const [workTime, setWorkTime] = useState(hangTime);
  const [isWorkActive, setIsWorkActive] = useState(false);
  // between hang timer
  const [restTime, setRestTime] = useState(restingTime);
  const [isRestActive, setIsRestActive] = useState(false);
  useEffect(() => {
    if (totalSetTime <= 0) {
      setIsSetTimeActive(false);
      setIsBetweenSetRest(true);
      setTotalSetTime(setTotalTime);
    } else if (betweenSetRest <= 0) {
      setIsBetweenSetRest(false);
      setIsSetTimeActive(true);
      setBetweenSetRest(betweenSets);
    } else if (isSetTimeActive) {
      setTimeout(() => {
        setTotalSetTime((totalSetTime) => {
          return totalSetTime - 1;
        });
      }, 1000);
      if (workTime <= 0) {
        setIsWorkActive(false);
        setIsRestActive(true);
        setWorkTime(hangTime);
      } else if (restTime <= 0) {
        setIsRestActive(false);
        setIsWorkActive(true);
        setRestTime(restingTime);
      } else if (isWorkActive) {
        setTimeout(() => {
          setWorkTime((workTime) => workTime - 1);
        }, 1000);
      } else if (isRestActive) {
        setTimeout(() => {
          setRestTime((restTime) => restTime - 1);
        }, 1000);
      }
    } else if (isBetweenSetRest) {
      setTimeout(() => {
        setBetweenSetRest((betweenSetRest) => {
          return betweenSetRest - 1;
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
    betweenSetRest,
    isBetweenSetRest,
    setTotalTime,
    betweenSets,
  ]);

  return (
    <>
      <h2>This is comp2</h2>
      <div>This is the setTime time: {totalSetTime}</div>
      <div>this is the Hang timer: {workTime}</div>
      <div>this is the Rest timer: {restTime}</div>
      <div>This is the setRest time: {betweenSetRest}</div>
    </>
  );
}

export default Comp2UI;
