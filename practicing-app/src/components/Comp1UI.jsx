import React, { useEffect, useState } from "react";

function Comp1UI({
  resetRestTimer,
  restTime,
  isRestActive,
  setsTotal,
  stopCircuit,
}) {
  console.log(`is rest active? ${isRestActive}`);
  const [restingTime, setRestingTime] = useState(restTime);
  useEffect(() => {
    if (setsTotal <= 0) {
      stopCircuit();
    } else if (restingTime <= 0) {
      setRestingTime(restTime);
      resetRestTimer();
    } else if (isRestActive) {
      setTimeout(() => {
        setRestingTime((restingTime) => {
          return restingTime - 1;
        });
      }, 1000);
    }
  }, [restTime, restingTime, isRestActive, resetRestTimer]);
  return (
    <>
      <h1>This is a comp!</h1>
      <div>this is the rest timer: {restingTime} </div>
    </>
  );
}

export default Comp1UI;
