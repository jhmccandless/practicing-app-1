import React, { useState, useEffect } from "react";

function Comp2() {
  const [time, setTime] = useState(10);

  useEffect(() => {
    let timer;
    if (time !== 0)
      timer = setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
  }, [time]);
  return (
    <>
      <h2>This is comp2</h2>
      <div>this is the timer: {time}</div>
    </>
  );
}

export default Comp2;
