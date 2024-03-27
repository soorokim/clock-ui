import { useEffect, useRef, useState } from "react";
import "./App.css";
import { EENumbers } from "./EENumbers";

function App() {
  const [time, setTime] = useState({ hours: 0, mins: 0, seconds: 0 });
  const start = useRef<number>();
  const rAF = useRef<number>();

  useEffect(() => {
    const cb = (time: number) => {
      if (!start.current) {
        start.current = time;
      }
      const now = Date.now();
      const hour = (Math.floor(now / (1000 * 60 * 60)) % 24) + 9;
      const min = Math.floor(now / (1000 * 60)) % 60;
      const sec = Math.floor(now / 1000) % 60;

      setTime({ hours: hour, mins: min, seconds: sec });
      rAF.current = requestAnimationFrame(cb);
    };

    requestAnimationFrame(cb);

    return () => {
      if (rAF.current) cancelAnimationFrame(rAF.current);
    };
  }, []);

  return (
    <>
      <div style={{ display: "flex", gap: 8 }}>
        h: <EENumbers number={time.hours} />
        m: <EENumbers number={time.mins} />
        s: <EENumbers number={time.seconds} />
      </div>
    </>
  );
}

export default App;
