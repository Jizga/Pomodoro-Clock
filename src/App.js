import React, { useState } from "react";
import Controller from "./Components/Controller";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";
import "./App.css";

function App() {
  const [breaks, setBreaks] = useState(5);
  const [sessions, setSessions] = useState(25);

  const increment = (e) => {
    if (e === "breaks") {
      setBreaks(breaks + 1);
    }
  };

  const decrement = (e) => {
    if (e === "breaks") {
      setBreaks(breaks - 1);
    }
  };

  return (
    <div className="App">
      <h1>My Pomodoro Clock</h1>
      <div className="controllers">
        <Controller
          id="break-label"
          title="Breaks Length"
          size={breaks}
          increment={() => increment("breaks")}
          decrement={() => decrement("breaks")}
        />
        <Controller />
      </div>
      <div className="display">
        <Display />
      </div>
      <div className="buttons">
        <Buttons />
      </div>
    </div>
  );
}

export default App;
