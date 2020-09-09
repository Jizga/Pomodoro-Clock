import React from "react";
import Up from "./Icons/up-arrow.png";
import Down from "./Icons/down-arrow.png";

export default function Controller(props) {
  return (
    <div className="controller">
      <h3>{props.title}</h3>
      <button onClick={props.increment}>
        <img src={Up} alt="up" height="30" width="30" />
      </button>
      <span>{props.size}</span>
      <button onClick={props.decrement}>
        <img src={Down} alt="down" height="30" width="30" />
      </button>
    </div>
  );
}
