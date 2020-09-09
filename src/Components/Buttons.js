import React from "react";
import Play from "./Icons/Icono play.png";
import Pause from "./Icons/pause.png";
import Reboot from "./Icons/reboot.png";

export default function Buttons(props) {
  return (
    <div className="btns">
      <div id="start_stop">
        <button onClick={props.play}>
          <img src={Play} alt="play" height="30" width="30" />
        </button>
        <button onClick={props.pause}>
          <img src={Pause} alt="pause" height="30" width="30" />
        </button>
      </div>
      <button id="reset" onClick={props.reboot}>
        <img src={Reboot} alt="reboot" height="30" width="30" />
      </button>
    </div>
  );
}
