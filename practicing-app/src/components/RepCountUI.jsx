import React from "react";

function RepCountUI({ repsTotal }) {
  console.log(repsTotal);
  return (
    <>
      <div>This is the reps countdown: {repsTotal}</div>
    </>
  );
}

export default RepCountUI;
