import { useEffect, useRef, useState } from "react";
import "./App.css";
import { EEClock } from "./EEClock";

function App() {
  const [time, setTime] = useState({
    hours: 0,
    mins: 0,
    seconds: 0,
  });
  const rAF = useRef<number>();

  useEffect(() => {
    const cb = () => {
      const hour = new Date().getHours();
      const min = new Date().getMinutes();
      const sec = new Date().getSeconds();

      setTime((prev) =>
        prev.seconds !== sec ? { hours: hour, mins: min, seconds: sec } : prev
      );
      rAF.current = requestAnimationFrame(cb);
    };

    requestAnimationFrame(cb);

    return () => {
      if (rAF.current) cancelAnimationFrame(rAF.current);
    };
  }, []);

  return <EEClock hours={time.hours} mins={time.mins} seconds={time.seconds} />;
}

export default App;
