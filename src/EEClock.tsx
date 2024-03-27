import { EENumbers } from "./EENumbers";

export const EEClock = ({
  time,
}: {
  time: {
    years: number;
    months: number;
    dates: number;
    hours: number;
    mins: number;
    seconds: number;
  };
}) => {
  return (
    <>
      <div style={{ display: "flex", gap: 8 }}>
        <EENumbers number={time.years} variant="xSmall" /> Y
        <EENumbers number={time.months} variant="xSmall" /> M
        <EENumbers number={time.dates} variant="xSmall" /> D
      </div>
      <div style={{ display: "flex", gap: 8, paddingTop: 16 }}>
        <EENumbers number={time.hours} />h
        <EENumbers number={time.mins} />m
        <EENumbers number={time.seconds} />s
      </div>
    </>
  );
};
