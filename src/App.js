import React, { useState, useEffect, useRef } from "react";
import Controller from "./Components/Controller";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";
import "./App.css";

function App() {
  const [breaks, setBreaks] = useState(5);
  const [sessions, setSessions] = useState(25);
  const [timeH, setTimeH] = useState(sessions);
  const [timeMin, setTimeMin] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [isSession, setIsSession] = useState(true);
  const [currentState, setCurrentState] = useState("Session");

  const useInterval = (callback, delay) => {
    const intervalId = useRef(null);
    const savedCallback = useRef(callback);

    useEffect(() => {
      savedCallback.current = callback;
    });

    useEffect(() => {
      const tick = () => savedCallback.current();

      if (typeof delay === "number") {
        intervalId.current = window.setInterval(tick, delay);

        return () => window.clearInterval(intervalId.current);
      }
    }, [delay]);

    return intervalId.current;
  };

  useInterval(
    () => {
      setTimeMin((setTimeMin) => setTimeMin - 1);
    },
    isOn === true ? 1000 : null
  );

  const increment = (e) => {
    if (!isOn) {
      if (e === "sessions") {
        setSessions(sessions + 1);
        setTimeH(timeH + 1);
        setTimeMin(0);
      }
      if (e === "breaks") {
        setBreaks(breaks + 1);
      }
    }
  };

  const decrement = (e) => {
    if (!isOn) {
      if (e === "sessions" && sessions > 1) {
        setSessions(sessions - 1);
        setTimeH(timeH - 1);
        setTimeMin(0);
      }
      if (e === "breaks" && breaks > 1) {
        setBreaks(breaks - 1);
      }
    }
  };

  const play = () => {
    setIsOn(true);
  };

  const pause = () => {
    setIsOn(false);
  };

  const reboot = () => {
    setIsOn(false);
    setSessions(25);
    setBreaks(5);
    setTimeH(25);
    setTimeMin(0);
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
        <Buttons
          play={() => play()}
          pause={() => pause()}
          reboot={() => reboot()}
        />
      </div>
    </div>
  );
}

export default App;
