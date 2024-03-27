import { AnalogClockBack } from "./AnalogClockBack";

export const AnalogClock = ({
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
    <div style={{ width: 300 }}>
      <AnalogClockBack>
        <div
          className="sec"
          style={{
            border: "1px solid red",
            width: "40%",
            transformOrigin: "left",
            borderTopRightRadius: "50%",
            borderBottomRightRadius: "50%",
            transform: `rotate(${(time.seconds - 15) * 6}deg)`,
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        />
        <div
          className="min"
          style={{
            border: "2px solid black",
            borderTopRightRadius: "30%",
            borderBottomRightRadius: "30%",
            width: "35%",
            transformOrigin: "left",
            transform: `rotate(${(time.mins - 15) * 6}deg)`,
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        />
        <div
          className="hour-arrow"
          style={{
            border: "4px solid black",
            width: "28%",
            transformOrigin: "left",
            borderTopRightRadius: "40%",
            borderBottomRightRadius: "40%",
            transform: `rotate(${
              (time.hours > 12 ? time.hours - 15 : time.hours - 3) * 30 +
              time.mins * 0.5
            }deg)`,
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        />
      </AnalogClockBack>
    </div>
  );
};
