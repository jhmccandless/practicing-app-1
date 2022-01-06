import React, { useState, useEffect } from "react";

function HangUpUI({ hangTime, downTime, isHangActive }) {
  const [onTime, setOnTime] = useState(hangTime);
  const [isWorkActive, setIsWorkActive] = useState(true);
  const [offTime, setOffTime] = useState(downTime);
  const [isRestActive, setIsRestActive] = useState(false);
  useEffect(() => {
    if (isHangActive) {
      if (offTime <= 0) {
        setIsRestActive(false);
        setIsWorkActive(true);
        setOffTime(downTime);
      } else if (onTime <= 0) {
        setIsWorkActive(false);
        setIsRestActive(true);
        setOnTime(hangTime);
      } else if (isRestActive) {
        setTimeout(() => {
          setOffTime((offTime) => offTime - 1);
        }, 1000);
      } else if (isWorkActive) {
        setTimeout(() => {
          setOnTime((onTime) => onTime - 1);
        }, 1000);
      }
    } else if (!isHangActive) {
      setIsWorkActive(true);
      setIsRestActive(false);
      setOffTime(downTime);
      setOnTime(hangTime);
    }
  }, [
    onTime,
    isWorkActive,
    offTime,
    isRestActive,
    hangTime,
    downTime,
    isHangActive,
  ]);

  return (
    <>
      <h2>hang and off timer</h2>
      <div>this is the Hang timer: {onTime}</div>
      <div>this is the down timer: {offTime}</div>
    </>
  );
}

export default HangUpUI;
