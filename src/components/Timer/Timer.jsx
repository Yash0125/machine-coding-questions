import React, { useEffect, useState } from "react";

const Timer = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
        if (seconds === 59) {
          setSeconds(0);
          setMinute((prev) => prev + 1);
          if (minute === 59) {
            setMinute(0);
            setHour((prev) => prev + 1);
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, minute, hour, seconds]);

  const handlePlay = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    console.log("pause");
    setIsRunning(false);
  };

  const handleStop = () => {
    console.log("stop");
    setIsRunning(false);
    setHour(0);
    setMinute(0);
    setSeconds(0);
  };
  return (
    <div className="container">
      <h1>Timer</h1>
      <h3>
        {String(hour).padStart(2, "0")}:{String(minute).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </h3>
      <button onClick={handlePlay}>play</button>
      <button onClick={handlePause}>pause</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Timer;
