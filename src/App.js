import React, { useState } from "react";
import Controller from "./Components/Controller";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";
import "./App.css";

function App() {
  const [breaks, setBreaks] = useState(5);
  const [sessions, setSessions] = useState(25);
  const [timeH, setTimeH] = useState(sessions);
  const [timeMin, setTimeMin] = useState('00');

  const increment = (e) => {
    if (e === "breaks") {
      setBreaks(breaks + 1);
    }
    if (e === "sessions") {
      setSessions(sessions + 1);
      setTimeH(timeH + 1);
      setTimeMin('00');
    }
  };

  const decrement = (e) => {
    if (e === "breaks" && breaks > 1) {
      setBreaks(breaks - 1);
    }
    if (e === "sessions" && sessions > 1) {
      setSessions(sessions - 1);
      setTimeH(timeH - 1);
      setTimeMin('00');
    }
  };

  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <div className="controllers">
        <Controller
          id="break-label"
          title="Break Length"
          size={breaks}
          increment={() => increment("breaks")}
          decrement={() => decrement("breaks")}
        />
        <Controller
          id="session-label"
          title="Session Length"
          size={sessions}
          increment={() => increment("sessions")}
          decrement={() => decrement("sessions")}
        />
      </div>
      <div className="display">
        <Display title="Session" clockTimeH={timeH} clockTimeMin={timeMin} />
      </div>
      <div className="buttons">
        <Buttons />
      </div>
    </div>
  );
}

export default App;
