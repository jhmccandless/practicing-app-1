import React from "react";

function Comp1UI({ testing }) {
  function handleClick() {
    console.log("inside click");
    testing();
  }
  return (
    <>
      <h1>This is a comp!</h1>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Add one
      </button>
    </>
  );
}

export default Comp1UI;
