import React, { useState } from "react";

function Comp1() {
  //using hooks to make an onclick counter that resets after 10
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>This is a comp!</h1>
      <div>this is the count: {count}</div>
      <button
        onClick={() => (count < 10 ? setCount(count + 1) : setCount(count - 9))}
      >
        Add one
      </button>
    </>
  );
}

export default Comp1;
