import { EENumbers } from "./EENumbers";

export const EEClock = ({
  hours,
  mins,
  seconds,
}: {
  hours: number;
  mins: number;
  seconds: number;
}) => {
  return (
    <div style={{ display: "flex", gap: 8, padding: 16 }}>
      <EENumbers number={hours} />h
      <EENumbers number={mins} />m
      <EENumbers number={seconds} />s
    </div>
  );
};
