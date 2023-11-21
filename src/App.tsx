import { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const toggleRunning = () => {
    setRunning(!running);
  };

  return (
    <main>
      <h1>Stop Watch</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          minWidth: "300px",
        }}
      >
        <div className="clock">
          <span className="neo">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
          </span>
          <span className="neo">
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
          </span>
          <span className="neo">{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="clock-header">
          <span>Mins</span>
          <span>Secs</span>
          <span> Msecs </span>
        </div>
      </div>
      <div className="btn-wrap">
        <button className="neobtn" onClick={toggleRunning}>
          {running ? "◼" : "▶"}
        </button>
        <button className="neobtn" onClick={() => setTime(0)}>
          Reset
        </button>
      </div>
    </main>
  );
}
