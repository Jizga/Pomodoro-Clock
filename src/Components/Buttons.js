import React from "react";

export default function Buttons(props) {
  return (
    <div className="btns">
      <div id="start_stop">
        <button onClick={props.play}>PLAY</button>
        <button onClick={props.pause}>PAUSE</button>
      </div>
      <button id="reset" onClick={props.reboot}>
        REBOOT
      </button>
    </div>
  );
}
