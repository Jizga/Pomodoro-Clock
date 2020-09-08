import React from "react";
import Display from "./Components/Display";
import Controller from "./Components/Controller";
import Buttons from "./Components/Buttons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My Pomodoro Clock</h1>
      <div className="controllers">
        <Controller />
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
