import React, { useState, useEffect } from "react";

function Comp3UI({ totalTime, isRestActive, isHangActive, resetRestTimer }) {
  const [allTime, setAllTime] = useState(totalTime);
  useEffect(() => {
    if (allTime <= 0) {
      resetRestTimer();
    } else if (isHangActive) {
      setTimeout(() => {
        setAllTime((allTime) => {
          return allTime - 1;
        });
      }, 1000);
    }
  }, [allTime, isHangActive, resetRestTimer]);
  return (
    <>
      <h2>This is comp3UI</h2>
      <div>this is the timer: {allTime}</div>
    </>
  );
}

export default Comp3UI;
