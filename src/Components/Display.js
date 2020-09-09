import React from "react";

export default function Display(props) {
  const hours =
    props.clockTimeH.toString().length <= 1
      ? "0" + props.clockTimeH
      : props.clockTimeH;

  const minutes =
    props.clockTimeMin.toString().length <= 1
      ? "0" + props.clockTimeMin
      : props.clockTimeMin;

  return (
    <div className="screen">
      <h3 id="timer-label">{props.title}</h3>
      <h2 id="time-left">
        {hours} : {minutes}
      </h2>
    </div>
  );
}
