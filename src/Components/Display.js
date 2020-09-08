import React from "react";

export default function Display(props) {
  const hours =
    props.clockTimeH.toString().lenght <= 1
      ? "0" + props.clockTimeH
      : props.clockTimeH;

  const minutes =
    props.clockTimeMin.toString().lenght <= 1
      ? "0" + props.clockTimeMin
      : props.clockTimeMin;

  return (
    <div className="screen">
      <h2>
        {hours} : {minutes}
      </h2>
    </div>
  );
}
