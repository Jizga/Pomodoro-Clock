import React from "react";

export default function Buttons(props) {
  return (
    <div className="btns">
      <div id="start_stop">
        <button>PLAY</button>
        <button>PAUSE</button>
      </div>
      <button id="reset">REBOOT</button>
    </div>
  );
}
