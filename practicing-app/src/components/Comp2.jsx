import React, { useState, useEffect } from "react";

function Comp2() {
  const [timer, setTimer] = useState(10);
  return (
    <>
      <h2>This is comp2</h2>
      <div>this is the timer: {timer}</div>
    </>
  );
}

export default Comp2;
