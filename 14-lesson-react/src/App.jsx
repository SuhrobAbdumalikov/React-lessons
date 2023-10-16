import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    const Interval = setInterval(() => {
      setState((prev) => !prev);
    }, 1000);

    setTimer(Interval);
  };

  const stop = () => {
    clearInterval(timer);
  };

  useEffect(() => {
    if (state === 59) {
      setState(0);
    }
  }, [state]);
  return (
    <>
      <h1>{state}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}

export default App;
