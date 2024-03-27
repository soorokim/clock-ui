import "./clock.css";
export const AnalogClockBack = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div id="clock">
      <div className="hour">1</div>
      <div className="hour">2</div>
      <div className="hour">3</div>
      <div className="hour">4</div>
      <div className="hour">5</div>
      <div className="hour">6</div>
      <div className="hour">7</div>
      <div className="hour">8</div>
      <div className="hour">9</div>
      <div className="hour">10</div>
      <div className="hour">11</div>
      <div className="hour">12</div>
      {children}
    </div>
  );
};
