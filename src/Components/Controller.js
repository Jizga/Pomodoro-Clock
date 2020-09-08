import React from "react";

export default function Controller(props) {
  return (
    <div className="controller">
      <h2>{props.title}</h2>
      <button onClick={props.increment}>UP</button>
      <span>{props.size}</span>
      <button onClick={props.decrement}>DOWN</button>
    </div>
  );
}
