import { NUMBER_SETTING } from "./constants";

const DISABLED_COLOR = "lightgray";
const CLOCK_COLOR = "red";

export const EENumber = ({ number }: { number: number }) => {
  const ee = NUMBER_SETTING[number];
  const top = ee.top ? CLOCK_COLOR : DISABLED_COLOR;
  const topLeft = ee.topLeft ? CLOCK_COLOR : DISABLED_COLOR;
  const topRight = ee.topRight ? CLOCK_COLOR : DISABLED_COLOR;
  const middle = ee.middle ? CLOCK_COLOR : DISABLED_COLOR;
  const bottomLeft = ee.bottomLeft ? CLOCK_COLOR : DISABLED_COLOR;
  const bottomRight = ee.bottomRight ? CLOCK_COLOR : DISABLED_COLOR;
  const bottom = ee.bottom ? CLOCK_COLOR : DISABLED_COLOR;
  return (
    <div>
      <div
        className="top-top"
        style={{
          width: 16,
          borderLeft: "4px solid transparent",
          borderRight: "4px solid transparent",
          borderBottom: `4px solid ${top}`,
          marginLeft: 4,
        }}
      />
      <div
        className="top-main"
        style={{
          display: "flex",
        }}
      >
        <div
          className="top-main-left"
          style={{
            height: 16,
            borderBottom: "4px solid transparent",
            borderTop: "4px solid transparent",
            borderRight: `4px solid ${topLeft}`,
          }}
        />
        <div
          className="top-main-body"
          style={{
            width: 16,
            height: 16,
            borderTop: `4px solid ${top}`,
            borderLeft: `4px solid ${topLeft}`,
            borderRight: `4px solid ${topRight}`,
            borderBottom: `4px solid ${middle}`,
          }}
        />
        <div
          className="top-main-right"
          style={{
            height: 16,
            borderBottom: "4px solid transparent",
            borderTop: "4px solid transparent",
            borderLeft: `4px solid ${topRight}`,
          }}
        />
      </div>
      <div
        className="bottom-main"
        style={{
          display: "flex",
        }}
      >
        <div
          className="bottom-main-left"
          style={{
            height: 16,
            borderBottom: "4px solid transparent",
            borderTop: "4px solid transparent",
            borderRight: `4px solid ${bottomLeft}`,
          }}
        />
        <div
          className="bottom-main-body"
          style={{
            width: 16,
            height: 16,
            borderTop: `4px solid ${middle}`,
            borderLeft: `4px solid ${bottomLeft}`,
            borderRight: `4px solid ${bottomRight}`,
            borderBottom: `4px solid ${bottom}`,
          }}
        />
        <div
          className="bottom-main-right"
          style={{
            height: 16,
            borderBottom: "4px solid transparent",
            borderTop: "4px solid transparent",
            borderLeft: `4px solid ${bottomRight}`,
          }}
        />
      </div>
      <div
        className="bottom-bottom"
        style={{
          width: 16,
          borderLeft: "4px solid transparent",
          borderRight: "4px solid transparent",
          borderTop: `4px solid ${bottom}`,
          marginLeft: 4,
        }}
      />
    </div>
  );
};
