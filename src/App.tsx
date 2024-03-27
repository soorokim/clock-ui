import { useEffect, useRef, useState } from "react";
import "./App.css";
import { EEClock } from "./EEClock";

function App() {
  const [time, setTime] = useState({
    years: 0,
    months: 0,
    dates: 0,
    hours: 0,
    mins: 0,
    seconds: 0,
  });
  const rAF = useRef<number>();

  useEffect(() => {
    const cb = () => {
      const sec = new Date().getSeconds();

      setTime((prev) =>
        prev.seconds !== sec
          ? {
              years: new Date().getFullYear(),
              months: new Date().getMonth(),
              dates: new Date().getDate(),
              hours: new Date().getHours(),
              mins: new Date().getMinutes(),
              seconds: sec,
            }
          : prev
      );
      rAF.current = requestAnimationFrame(cb);
    };

    requestAnimationFrame(cb);

    return () => {
      if (rAF.current) cancelAnimationFrame(rAF.current);
    };
  }, []);

  return (
    <>
      <EEClock time={time} />
    </>
  );
}

export default App;
