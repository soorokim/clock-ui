import { EENumber } from "./EENumber";

export const EENumbers = ({ number }: { number: number }) => {
  const strArr = number.toString().padStart(2, "0").split("");

  return (
    <div style={{ display: "flex", gap: 8 }}>
      {strArr.map((n) => (
        <EENumber number={Number.parseInt(n)} />
      ))}
    </div>
  );
};
