import { NUMBER_SETTING } from "./constants";

const DISABLED_COLOR = "lightgray";
const CLOCK_COLOR = "red";
const SIZE = {
  default: 16,
  small: 12,
  xSmall: 8,
};

export const EENumber = ({
  number,
  variant = "default",
}: {
  number: number;
  variant?: keyof typeof SIZE;
}) => {
  const ee = NUMBER_SETTING[number];
  const size = SIZE[variant];
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
          width: size,
          borderLeft: `${size / 4}px solid transparent`,
          borderRight: `${size / 4}px solid transparent`,
          borderBottom: `${size / 4}px solid ${top}`,
          marginLeft: size / 4,
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
            height: size,
            borderBottom: `${size / 4}px solid transparent`,
            borderTop: `${size / 4}px solid transparent`,
            borderRight: `${size / 4}px solid ${topLeft}`,
          }}
        />
        <div
          className="top-main-body"
          style={{
            width: size,
            height: size,
            borderTop: `${size / 4}px solid ${top}`,
            borderLeft: `${size / 4}px solid ${topLeft}`,
            borderRight: `${size / 4}px solid ${topRight}`,
            borderBottom: `${size / 4}px solid ${middle}`,
          }}
        />
        <div
          className="top-main-right"
          style={{
            height: size,
            borderTop: `${size / 4}px solid transparent`,
            borderBottom: `${size / 4}px solid transparent`,
            borderLeft: `${size / 4}px solid ${topRight}`,
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
            height: size,
            borderTop: `${size / 4}px solid transparent`,
            borderBottom: `${size / 4}px solid transparent`,
            borderRight: `${size / 4}px solid ${bottomLeft}`,
          }}
        />
        <div
          className="bottom-main-body"
          style={{
            width: size,
            height: size,
            borderTop: `${size / 4}px solid ${middle}`,
            borderLeft: `${size / 4}px solid ${bottomLeft}`,
            borderRight: `${size / 4}px solid ${bottomRight}`,
            borderBottom: `${size / 4}px solid ${bottom}`,
          }}
        />
        <div
          className="bottom-main-right"
          style={{
            height: size,
            borderTop: `${size / 4}px solid transparent`,
            borderBottom: `${size / 4}px solid transparent`,
            borderLeft: `${size / 4}px solid ${bottomRight}`,
          }}
        />
      </div>
      <div
        className="bottom-bottom"
        style={{
          width: size,
          borderLeft: `${size / 4}px solid transparent`,
          borderRight: `${size / 4}px solid transparent`,
          borderTop: `${size / 4}px solid ${bottom}`,
          marginLeft: size / 4,
        }}
      />
    </div>
  );
};
