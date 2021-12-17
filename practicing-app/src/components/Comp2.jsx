import React, { useState, useEffect } from "react";

function Comp2() {
  const time = new Date();
  const newTime = Date.now();
  console.log(time);
  setInterval(() => {
    // console.log(Date.now() - newTime);
  }, 1000);
  return (
    <>
      <h2>This is comp2</h2>
      <div>this is the timer</div>
    </>
  );
}

export default Comp2;
